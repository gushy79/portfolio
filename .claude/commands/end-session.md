---
description: Update status files and prepare for session exit
---

Review what has been accomplished in this session and update the appropriate status file(s).

## Instructions

1. **Identify topics worked on** - Review the conversation to identify distinct workstreams (e.g., LinkedIn, website, CV, job applications)

2. **For each topic, check for existing status file:**
   - Look for `*-status.md` files in the project root
   - Examples: `linkedin-status.md`, `website-status.md`, `cv-status.md`

3. **Update or create status files:**
   - If matching status file exists: Update it with session progress
   - If no matching file exists: Propose creating a new one and ask for confirmation

4. **Status file updates should be LEAN (~50 lines max):**
   - Update "Last updated" date to today
   - Add completed items to "Done" section (brief descriptions)
   - Update "Phase" if project stage changed
   - Add new "Next Steps" identified
   - Add "Key Decisions Made" for important choices
   - Update "Action Items (for Nick)" if applicable

5. **For significant work, create/update session logs:**
   - If detailed decisions, iterations, or analysis occurred, update `[topic]-session-logs.md`
   - Session logs preserve: decision rationale, version iterations, rejected options, detailed analysis
   - Status files should reference session logs: "See `[topic]-session-logs.md` for details"
   - Only create session logs when there's substantial content worth preserving

6. **Summarise changes to the user:**
   - List which status files were updated
   - List which session logs were created/updated (if any)
   - Highlight pending decisions or action items for Nick

7. **Confirm safe to exit:**
   - State clearly: "Session status saved. Safe to exit."
   - Remind user they can run `/start-session` next time to pick up where they left off

## File structure principle

```
*-status.md        ← Lean, read every session (~50 lines)
*-session-logs.md  ← Detailed history, read when needed
```

Status files = current state + next steps
Session logs = decision history + analysis + iterations
