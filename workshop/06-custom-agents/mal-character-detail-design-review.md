# Decision: Character Detail Page — Design Review

**Decided by:** Mal (Lead/Architect)
**Date:** 2026-03-31
**Participants:** Kaylee (Backend), Wash (Frontend), Zoe (Testing)
**Related feature:** `docs/FEATURE-CHARACTER-DETAIL.md`

---

## 1. Episode List Phase Decision

**DECISION: Episode list is DEFERRED to Phase 2.**

The spec lists episodes as Phase 1 scope, but the codebase has no episode↔character junction table. `Episode.Characters` is marked `[NotMapped]`. Implementing this in Phase 1 requires:

- A new `EpisodeCharacter` junction table
- An EF Core migration
- Seed data rows for episode↔character links
- Additional API projection logic

This cost is disproportionate for MVP. Phase 1 will instead deliver character identity + quotes + relationships + favorites toggle. The spec's out-of-scope quote section is swapped IN because the data model already supports it via `Quote.CharacterId`, and the character detail endpoint bypasses the `GET /api/quotes` truncation bug (intentional — must NOT be touched).

**Phase 1 scope (revised):**

- ✅ Character identity (name, bio, image, actor, status, tagline, characterType)
- ✅ Quotes (via character detail endpoint — full text, no truncation bug)
- ✅ Related characters (with relationship type and resolved names)
- ✅ Favorite toggle (localStorage)
- ✅ Loading and error states
- ❌ Episode list (deferred to Phase 2 — requires migration)

---

## 2. API Contract

**Endpoint:** `GET /api/characters/{id}`

**Exact JSON shape:**

```json
{
  "id": 1,
  "name": "Walter White",
  "bio": "A chemistry teacher turned drug kingpin...",
  "imageUrl": "https://...",
  "actorName": "Bryan Cranston",
  "tagline": "I am the one who knocks.",
  "characterType": "Antihero",
  "status": "deceased",
  "isMainCharacter": true,
  "show": {
    "id": 1,
    "name": "Breaking Bad"
  },
  "quotes": [
    {
      "id": 3,
      "text": "I am the one who knocks.",
      "isFamous": true,
      "episode": {
        "id": 12,
        "title": "Cornered",
        "seasonNumber": 4,
        "episodeNumber": 6
      }
    }
  ],
  "relatedCharacters": [
    {
      "id": 2,
      "name": "Jesse Pinkman",
      "imageUrl": "https://...",
      "relationship": "partner"
    }
  ]
}
```

**Implementation notes:**

- Kaylee must use a projection DTO — do NOT return the `Character` entity directly (it has circular ref risk via `Show`)
- Quotes joined via `WHERE CharacterId = id`, include Episode nav for season/episode number — use `Include(q => q.Episode).ThenInclude(e => e.Season)` (Season holds the season number)
- `Quote.QuoteText` must NOT be truncated — this is fetched independently of the broken `/api/quotes` endpoint
- RelatedCharacters resolved by joining `CharacterRelationships` where `CharacterId = id` OR `RelatedCharacterId = id` back to `Characters` table to fetch names/images
- `GET /api/quotes` truncation bug must remain untouched
- Returns `404 NotFound` for missing character IDs

---

## 3. Component Architecture

**Route:** `/characters/{Id:int}` — Blazor page `CharacterDetail.razor`
**Render mode:** `@rendermode InteractiveServer` (required for favorites toggle / JS interop)

**Shared model location:** `dotnet/Frontend/Models/CharacterDetailDto.cs` (team breaks the empty-Models-folder pattern — this is the first shared model, Wash owns it)

**Page structure:**

```
CharacterDetail.razor       ← @page "/characters/{Id:int}"
  ├── Loading spinner        ← conditional on isLoading
  ├── Error message          ← conditional on errorMessage != null
  ├── Character header       ← inline section: image, name, actor, status, tagline
  │     └── FavoriteButton   ← heart icon, toggles via IJSRuntime localStorage
  ├── Quotes section         ← foreach on detail.Quotes
  └── Related Characters     ← foreach on detail.RelatedCharacters, NavLink per card
```

**Favorites pattern:**

- On page load: `await JS.InvokeAsync<string>("localStorage.getItem", "fanhub_favorites")` → deserialize JSON int array
- On toggle: update local list → `await JS.InvokeVoidAsync("localStorage.setItem", "fanhub_favorites", JsonSerializer.Serialize(ids))`
- `IJSRuntime` injected via `@inject IJSRuntime JS`

**Navigation from list:**

- `Characters.razor` card `@onclick` replaced with `NavigationManager.NavigateTo($"/characters/{character.Id}")` — removes the broken inline modal pattern

---

## 4. Task Order (what blocks what)

```
Kaylee: Define DTO + implement GET /api/characters/{id}
    ↓
Wash: Build CharacterDetail.razor consuming agreed API shape
    ↓
Zoe: Integration tests for endpoint + Playwright/bUnit smoke test for page
```

Kaylee's output (the API contract above) is the critical path blocker for Wash. Wash can scaffold the page structure and model against the agreed JSON shape before the backend is live.

---

## 5. Do Not Touch

- `GET /api/quotes` truncation bug — intentional, must remain broken
- `Episode.Characters [NotMapped]` — leave as-is for Phase 1
- No EF migrations in Phase 1 scope

---

## Status

- [ ] Kaylee: implement `GET /api/characters/{id}` with DTO projection
- [ ] Wash: scaffold `Frontend/Models/CharacterDetailDto.cs` and `CharacterDetail.razor`
- [ ] Zoe: write integration test spec for Phase 1 endpoint and page
