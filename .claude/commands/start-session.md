---
description: Begin a new session - load project context and show status
---

## Git Sync Check

Run `git fetch --quiet` then `git status -sb` to compare the local `main` branch against `origin` on GitHub.

- If local is **behind**: note how many commits behind and recommend pulling before starting work.
- If local is **ahead** (unpushed commits): note it.
- If **diverged**: flag this prominently — do not proceed without addressing it.
- If up to date: note briefly and continue.

---

## Project Context

@CLAUDE.md

---

## Session Status

Now read all `*-status.md` files in the project root directory and provide a concise summary of:

1. **Current project status** - what phase/stage each workstream is at
2. **What's been completed** - key items finished
3. **Next steps** - prioritised list of available actions

Then ask which next step the user would like to pursue.

Keep the summary brief and actionable.
