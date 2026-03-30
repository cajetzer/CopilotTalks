## Plan: Lore Card + `/lore` Page (with Add Lore Form)

Add a "Lore Facts" stat and nav-card to the homepage, backed by a new `Lore` entity in the database seeded from the breaking-bad-universe docs. Clicking the card navigates to a new `/lore` page showing all lore facts in a card grid with a form to add new entries. On submit, the new card appears immediately and the homepage count updates on next visit.

---

**Phase 1: Backend**

1. **Create `Lore` model** — `dotnet/Backend/Models/Lore.cs` with properties: `Id`, `ShowId`, `Title`, `Description`, `Category` (e.g. "Location", "Faction", "Theme", "Story Beat", "Production")

2. **Register in DbContext** — `dotnet/Backend/Data/FanHubContext.cs`, add `public DbSet<Lore> Lores { get; set; }`

3. **Seed lore data** — `dotnet/Backend/Data/SeedData.cs`, add ~12-15 lore facts from `docs/breaking-bad-universe.md` (Key Locations, Factions, Story Beats, Themes, Production notes), guarded by `if (!context.Lores.Any())`

4. **EF migration** — run `dotnet ef migrations add AddLore` then `dotnet ef database update` in `dotnet/Backend/`

5. **Create `LoreController`** — `dotnet/Backend/Controllers/LoreController.cs` with two endpoints:
   - `GET /api/lore` — returns all lore facts (`ToListAsync()` pattern)
   - `POST /api/lore` — accepts `[FromBody] Lore lore`, adds to context, saves, returns `Ok(lore)` — consistent with `QuotesController`/`CharactersController` POST pattern

---

**Phase 2: Frontend — Display**

6. **Create frontend model** — `dotnet/Frontend/Models/Lore.cs` mirroring the backend model

7. **Update `Home.razor`** — two additions:
   - A new `<div class="summary-stat">` with `@loreCount` / "Lore Facts" (fetch count via `api/lore`)
   - A new `<a href="/lore" class="nav-card">` with icon 📖, matching the Characters/Episodes card pattern

8. **Create `Lore.razor` page** — `dotnet/Frontend/Components/Pages/Lore.razor` at `@page "/lore"`, fetches `api/lore` on `OnInitializedAsync`, renders a CSS grid of cards showing Category badge + Title + truncated Description

---

**Phase 3: Frontend — Add Lore Form**

9. **Add form to `Lore.razor`** — above or below the card grid:
   - Plain HTML `<form @onsubmit="HandleSubmit">` (no `<EditForm>` — no existing template in codebase)
   - `<input @bind="newTitle">` bound to `newTitle`
   - `<textarea @bind="newDescription">` bound to `newDescription`
   - Submit handler `HandleSubmit()`: calls `Http.PostAsJsonAsync("api/lore", new Lore { Title = newTitle, Description = newDescription, ShowId = 1, Category = "Custom" })`
   - On success: deserialize response body into `Lore`, append to the in-memory `lores` list, clear form fields — **no full re-fetch needed**, `StateHasChanged()` re-renders the grid immediately

### Homepage count update behavior

`Home.razor` fetches count via `OnInitializedAsync`. Blazor re-runs this when the user navigates back to `/` — the incremented count appears automatically. No cross-page state or SignalR needed.

---

**Relevant Files**

- `dotnet/Backend/Models/Lore.cs` — new
- `dotnet/Backend/Data/FanHubContext.cs` — add DbSet
- `dotnet/Backend/Data/SeedData.cs` — add seed block
- `dotnet/Backend/Controllers/LoreController.cs` — new (GET + POST)
- `dotnet/Frontend/Models/Lore.cs` — new
- `dotnet/Frontend/Components/Pages/Home.razor` — add stat + nav-card
- `dotnet/Frontend/Components/Pages/Lore.razor` — new (grid + form)

---

**Verification**

1. `dotnet ef migrations add AddLore` succeeds in `dotnet/Backend/`
2. `dotnet ef database update` applies cleanly
3. `GET http://localhost:5265/api/lore` returns JSON array of seeded lore facts
4. `POST http://localhost:5265/api/lore` with `{"title":"Test","description":"Test desc","category":"Custom","showId":1}` returns saved object with new `Id`
5. Home page shows Lore count in summary stats row and a Lore nav-card
6. Clicking nav-card navigates to `/lore` and renders the lore card grid
7. Fill in Title + Description on `/lore`, submit → new card appears immediately in the grid without page reload
8. Navigate back to `/` → Lore count is incremented by 1

---

**Decisions**

- `Lore` records are scoped to `ShowId = 1` (Breaking Bad), matching existing seed pattern
- `Category` defaults to `"Custom"` for user-submitted entries (form only exposes Title + Description)
- POST endpoint follows existing controller pattern: accept raw entity body, no DTO, return `Ok(lore)`
- No authentication required on GET or POST endpoints (matches all other endpoints)
- No individual lore detail page/modal (not requested)
- No EF navigation relationship on `Lore` (consistent with existing `FanHubContext` — no `OnModelCreating` relationships configured)
- ~12-15 seed facts across 5 categories drawn from `docs/breaking-bad-universe.md`
- Homepage count updates on next navigation to `/` — no real-time cross-page state needed
