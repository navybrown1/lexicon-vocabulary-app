# CODEX PLAN

## Objective
Build a local, dependency-free English vocabulary learning front-end app with polished responsive UI, word cards, category/search controls, quiz mode, instant feedback, score tracking, and progress indication.

## Current Repo Understanding
- Verified repo root: `/Users/edwinbrown1/AI_Council_Workspace/telegram-english-words-app-test`.
- Verified request file: `agent-control/REQUEST.md`.
- Verified current repo contains only:
  - `agent-control/`
  - `scripts/`
- Verified no existing app source files are present from `rg --files`.
- Verified preferred stack is plain HTML/CSS/JavaScript.
- Verified new package installation requires Edwin approval.
- Verified bridge workflow expects Kimi to produce `agent-control/KIMI_WORK_REPORT.md`.

## Constraints
- Kimi is the worker, not the architect.
- Scope is front-end only.
- Keep all app files inside this repo.
- Do not install packages unless Edwin explicitly approves.
- Do not push.
- Do not deploy.
- Do not publish.
- Do not delete important files.
- Do not modify credentials.
- Do not modify shell profiles or system settings.
- Use small, reversible changes.
- Prefer plain `index.html`, `styles.css`, and `app.js`.
- App must run locally without paid APIs or credentials.

## Files Kimi May Modify
- `index.html`
- `styles.css`
- `app.js`
- `agent-control/KIMI_WORK_REPORT.md`
- `agent-control/BLOCKER_REPORT.md` only if execution must stop

If Kimi discovers an existing app file not listed above, Kimi must stop and write `BLOCKER_REPORT.md` before modifying it.

## Files Kimi Must Not Modify
- `scripts/codex-bridge.sh`
- `agent-control/REQUEST.md`
- `agent-control/CODEX_PLAN.md`
- `agent-control/CODEX_AUDIT.md`
- `agent-control/CODEX_RECOVERY_PLAN.md`
- `agent-control/PREFLIGHT.md`
- `agent-control/RUN_LOG.md`
- `agent-control/EDWIN_APPROVAL.md`
- Any credential, token, env, shell profile, or system config file
- Any file outside this repository

## Execution Steps for Kimi
1. Confirm repo state:
   - Run `pwd`.
   - Run `rg --files -g '!*node_modules*'`.
   - Confirm no existing `index.html`, `styles.css`, or `app.js` need preservation.
2. Create `index.html`:
   - Link `styles.css`.
   - Load `app.js` with `defer`.
   - Include one app root with semantic sections for header, learning card, controls, quiz, progress, and score.
3. Create `styles.css`:
   - Build a polished responsive UI.
   - Use modern typography, gradients, soft cards, hover states, subtle transitions, and clean spacing.
   - Support desktop and mobile layouts.
   - Avoid external fonts or remote assets.
4. Create `app.js`:
   - Define an in-file vocabulary dataset with at least 12 words.
   - Each word must include:
     - word
     - meaning
     - example sentence
     - category
     - difficulty level
     - pronunciation hint
   - Implement next word behavior.
   - Implement shuffle/random word behavior.
   - Implement category filter and/or search.
   - Implement quiz mode with multiple-choice answers.
   - Implement instant feedback after answer selection.
   - Implement score tracking.
   - Implement progress indicator.
   - Keep state simple and readable.
5. Ensure the app works by opening `index.html` directly and also through a local static server if available.
6. Write `agent-control/KIMI_WORK_REPORT.md` with:
   - Files changed.
   - Features implemented.
   - Commands/checks run.
   - Any limitations.
   - Confirmation that no dependencies were installed.

## Stop Conditions
Kimi must stop and write `agent-control/BLOCKER_REPORT.md` if:
- Any dependency installation appears necessary.
- Any existing app source exists and conflicts with the allowed file list.
- Any requested feature would require credentials, paid APIs, backend services, deployment, or system settings.
- Tests/checks fail and Kimi cannot fix them within the allowed files.
- Kimi needs to modify files outside the allowed list.
- Kimi is uncertain whether a change is safe or within scope.

## Test Plan
Kimi should run these checks:

1. File existence:
   - `test -f index.html && test -f styles.css && test -f app.js`

2. Basic source inspection:
   - Confirm `index.html` references `styles.css`.
   - Confirm `index.html` references `app.js`.
   - Confirm `app.js` contains vocabulary entries with required fields.

3. Local server smoke check:
   - Run `python3 -m http.server 4173`.
   - Open or check `http://127.0.0.1:4173/`.
   - Stop the server after checking.

4. Browser/manual functionality check:
   - Word card renders.
   - Next button changes the word.
   - Shuffle button changes the word.
   - Quiz choices render.
   - Selecting an answer shows feedback.
   - Score updates.
   - Progress updates.
   - Category filter or search changes visible content.
   - Layout remains usable on narrow/mobile width.

5. Repo diff check:
   - `git status --short`
   - `git diff --stat`

## Definition of Done
Execution is complete only when:
- `index.html`, `styles.css`, and `app.js` exist.
- App opens locally without package installation.
- No credentials, paid APIs, backend, deployment, or external assets are required.
- Vocabulary cards show all required word data.
- Next/shuffle behavior works.
- Quiz mode works with multiple-choice answers.
- Instant feedback works.
- Score tracking works.
- Progress indicator works.
- Category filter or search works.
- Responsive styling is present and verified.
- `agent-control/KIMI_WORK_REPORT.md` accurately documents changes and checks.
- No files outside the allowed scope were modified.

## Required Codex Audit
After Kimi finishes, Codex must inspect:
- `agent-control/KIMI_WORK_REPORT.md`
- `git status --short`
- `git diff --stat`
- `git diff`
- `index.html`
- `styles.css`
- `app.js`

Codex must verify:
- Kimi stayed within allowed files.
- No dependencies were added.
- No deployment, push, credential, deletion, or system setting changes occurred.
- Implementation matches the requested features.
- Test evidence in `KIMI_WORK_REPORT.md` is credible.
- The app can run locally.

## Required Edwin Approval
Edwin approval is required before:
- Installing any dependency.
- Adding a framework or build tool.
- Deploying, publishing, or pushing.
- Deleting files.
- Modifying credentials, shell profiles, or system settings.
- Expanding scope beyond the allowed files.
- Final acceptance after Codex audit.