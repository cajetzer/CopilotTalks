# Exercise 0.1: Clone FanHub & Pick Your Stack

## 🔨 Exercise

**Lead:** Everyone ⭐ | **Time:** 10 min

#### 📖 The Story

It's Monday, 9:00 AM. Sarah drops the challenge: transform a half-finished generic fan site into a production-ready fan hub — by end of day.

Before the team can do anything, they need the code. And before Copilot can help, it needs a codebase to think about.

**First things first: get the repo.**

#### 🎯 Objective

Clone the FanHub starter repo, explore the available language flavors, pick the one that matches your stack, and confirm the app runs locally.

#### ✅ Success Criteria

- [ ] Repo cloned successfully
- [ ] Chosen a language flavor that matches your background
- [ ] App running locally (dev server or equivalent)
- [ ] Opened the project in VS Code with GitHub Copilot active

---

#### 📋 Steps

**1. Clone the repository**

```bash
git clone https://github.com/MSBart2/FanHub.git
cd FanHub
```

**2. Explore the available stacks**

The repo includes multiple language/framework flavors. Browse the top-level folders and pick the one that matches your background:

| Folder | Stack | Good if you know... |
|--------|-------|---------------------|
| *(explore the repo)* | *(varies)* | Pick what fits you |

> 💡 **Tip:** Open the repo in VS Code first (`code .`) and let the Explorer panel show you what's available.

**3. Pick your show**

Choose a TV show, film, or franchise to theme your fan hub around:

📺 The Office · 🔦 Stranger Things · 🧪 Breaking Bad · 🛡️ The Mandalorian · 🐉 Game of Thrones · 🚀 The Expanse

You'll use this theme throughout the entire workshop. Pick something you know well — the more you know the domain, the better your prompts will be.

**4. Get the app running**

Follow the README in your chosen stack folder to install dependencies and start the dev server. Confirm you see the generic starter UI in your browser.

**5. Open in VS Code with Copilot**

```bash
code .
```

Confirm GitHub Copilot is active (look for the Copilot icon in the status bar). If it's not showing, sign in via the Accounts menu.

---

#### 💡 Tips

- If you're unsure which stack to pick, choose the one closest to your day job — you'll get more out of the exercises.
- Don't spend more than 2 minutes deciding on a show. Any show works.
- If the dev server throws errors, drop the error into Copilot Chat — this is your first chance to see it in action.

#### 🧠 Mindful Moment

**Jessica's realization:** "I don't need to know the whole codebase. I just need enough to start asking good questions."

**Sarah's note:** "The repo is messy by design. That's the point — you're about to make it yours."

#### 🚀 Challenge Extension

Once the app is running, ask Copilot Chat:

```
@workspace Give me a one-paragraph summary of this codebase's current state.
```

Notice how generic the answer is with no configuration. That changes in Module 1.
