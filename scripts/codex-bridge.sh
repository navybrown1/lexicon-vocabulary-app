#!/usr/bin/env bash
set -euo pipefail

MODE="${1:-}"
ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
CONTROL_DIR="$ROOT/agent-control"
LOG_FILE="$CONTROL_DIR/RUN_LOG.md"

mkdir -p "$CONTROL_DIR"

log() {
  printf "\n## %s\n%s\n" "$(date '+%Y-%m-%d %H:%M:%S')" "$1" >> "$LOG_FILE"
}

require_codex() {
  if ! command -v codex >/dev/null 2>&1; then
    echo "ERROR: codex command not found. Install and authenticate Codex CLI first."
    exit 1
  fi
}

require_git_or_override() {
  if ! git -C "$ROOT" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    if [ "${ALLOW_NON_GIT:-0}" != "1" ]; then
      echo "ERROR: Not inside a Git repo. Refusing to continue because audit requires git diff."
      echo "Set ALLOW_NON_GIT=1 only for a disposable test folder."
      exit 1
    fi
  fi
}

write_prompt_and_run_codex() {
  local prompt_file="$1"
  local output_file="$2"

  require_codex

  codex exec \
    --cd "$ROOT" \
    --sandbox read-only \
    --output-last-message "$output_file" \
    - < "$prompt_file"
}

case "$MODE" in
  preflight)
    if ! command -v codex >/dev/null 2>&1; then
      echo "WARNING: codex command not found."
    fi
    {
      echo "# PREFLIGHT"
      echo
      echo "Project root: $ROOT"
      echo
      echo "## Commands"
      echo
      echo "pwd:"
      pwd
      echo
      echo "git status:"
      git -C "$ROOT" status --short 2>/dev/null || true
      echo
      echo "codex path:"
      command -v codex || true
      echo
      echo "codex version:"
      codex --version 2>/dev/null || true
      echo
      echo "kimi path:"
      command -v kimi || true
      echo
      echo "kimi version:"
      kimi --version 2>/dev/null || true
    } | tee "$CONTROL_DIR/PREFLIGHT.md"
    log "Preflight completed."
    ;;

  plan)
    require_git_or_override

    if [ ! -f "$CONTROL_DIR/REQUEST.md" ]; then
      echo "ERROR: Missing agent-control/REQUEST.md"
      exit 1
    fi

    if grep -q "Waiting for Edwin to provide the task" "$CONTROL_DIR/REQUEST.md"; then
      echo "ERROR: REQUEST.md is still a placeholder. Add a real task before running plan."
      exit 1
    fi

    PROMPT_FILE="$(mktemp)"
    cat > "$PROMPT_FILE" <<'PROMPT'
You are Codex acting as architect and supervising intelligence.

You are inside a Codex-led, Kimi-executed workflow.

Your role:
- Plan only.
- Do not edit files.
- Do not run implementation.
- Inspect only what is needed.
- Produce a precise execution plan for Kimi.

Read:
agent-control/REQUEST.md

Also inspect the repository only as needed to create a practical plan.

Write your final answer as a complete markdown plan using this exact structure:

# CODEX PLAN

## Objective
State the exact goal.

## Current Repo Understanding
Summarize only the facts you verified from the repo.

## Constraints
List all boundaries and limitations.

## Files Kimi May Modify
List exact files or directories. If unknown, list a narrow discovery step first.

## Files Kimi Must Not Modify
List protected files or directories.

## Execution Steps for Kimi
Give concrete numbered steps.

## Stop Conditions
Define exactly when Kimi must stop and write BLOCKER_REPORT.md.

## Test Plan
Define exact checks Kimi should run.

## Definition of Done
Define what must be true before Kimi marks execution complete.

## Required Codex Audit
State what Codex must inspect after Kimi finishes.

## Required Edwin Approval
List actions requiring Edwin's final approval.

Rules:
- Kimi is the worker, not the architect.
- Keep scope narrow.
- Do not authorize Kimi to push, deploy, publish, delete, spend money, send emails, modify credentials, or change system settings.
- If new dependencies may be needed, require Edwin approval before installation.
- Prefer small, reversible changes.
PROMPT

    write_prompt_and_run_codex "$PROMPT_FILE" "$CONTROL_DIR/CODEX_PLAN.md"
    rm -f "$PROMPT_FILE"
    log "Codex plan completed and written to agent-control/CODEX_PLAN.md."
    ;;

  rescue)
    require_git_or_override

    if [ ! -f "$CONTROL_DIR/CODEX_PLAN.md" ]; then
      echo "ERROR: Missing agent-control/CODEX_PLAN.md"
      exit 1
    fi

    if [ ! -f "$CONTROL_DIR/BLOCKER_REPORT.md" ]; then
      echo "ERROR: Missing agent-control/BLOCKER_REPORT.md"
      exit 1
    fi

    PROMPT_FILE="$(mktemp)"
    cat > "$PROMPT_FILE" <<'PROMPT'
You are Codex acting as recovery supervisor.

Read:
agent-control/CODEX_PLAN.md
agent-control/BLOCKER_REPORT.md

Inspect only the relevant project files needed to diagnose the blocker.

Your role:
- Diagnose the blocker.
- Do not implement.
- Do not edit files.
- Give Kimi a narrow recovery plan.

Write your final answer as markdown using this exact structure:

# CODEX RECOVERY PLAN

## Blocker Summary
## Likely Cause
## Relevant Files
## Recovery Steps for Kimi
## Commands Kimi May Run
## Files Kimi May Modify
## Files Kimi Must Not Modify
## Stop Conditions
## Required Test or Check
## Required Edwin Approval

Rules:
- Do not expand scope.
- Do not rewrite the whole project unless unavoidable.
- If the blocker requires credentials, deletion, deployment, payment, or system modification, require Edwin approval.
- If the safest move is to stop, say so.
PROMPT

    write_prompt_and_run_codex "$PROMPT_FILE" "$CONTROL_DIR/CODEX_RECOVERY_PLAN.md"
    rm -f "$PROMPT_FILE"
    log "Codex recovery completed and written to agent-control/CODEX_RECOVERY_PLAN.md."
    ;;

  audit)
    require_git_or_override

    if [ ! -f "$CONTROL_DIR/CODEX_PLAN.md" ]; then
      echo "ERROR: Missing agent-control/CODEX_PLAN.md"
      exit 1
    fi

    if [ ! -f "$CONTROL_DIR/KIMI_WORK_REPORT.md" ]; then
      echo "ERROR: Missing agent-control/KIMI_WORK_REPORT.md"
      exit 1
    fi

    if grep -q "Waiting for Kimi to complete work" "$CONTROL_DIR/KIMI_WORK_REPORT.md"; then
      echo "ERROR: KIMI_WORK_REPORT.md is still a placeholder. Refusing to audit."
      exit 1
    fi

    git -C "$ROOT" status --short > "$CONTROL_DIR/GIT_STATUS_SHORT.txt" || true
    git -C "$ROOT" diff --stat > "$CONTROL_DIR/GIT_DIFF_STAT.txt" || true
    git -C "$ROOT" diff > "$CONTROL_DIR/GIT_DIFF_FULL.patch" || true
    git -C "$ROOT" diff -- . \
      ':(exclude)agent-control/REQUEST.md' \
      ':(exclude)agent-control/CODEX_PLAN.md' \
      ':(exclude)agent-control/CODEX_AUDIT.md' \
      ':(exclude)agent-control/CODEX_RECOVERY_PLAN.md' \
      ':(exclude)agent-control/BLOCKER_REPORT.md' \
      ':(exclude)agent-control/RUN_LOG.md' \
      ':(exclude)agent-control/PREFLIGHT.md' \
      ':(exclude)agent-control/STATUS.md' \
      ':(exclude)agent-control/CODEX_EXEC_HELP.txt' \
      ':(exclude)agent-control/GIT_STATUS_SHORT.txt' \
      ':(exclude)agent-control/GIT_DIFF_STAT.txt' \
      ':(exclude)agent-control/GIT_DIFF_FULL.patch' \
      ':(exclude)agent-control/GIT_DIFF_IMPLEMENTATION.patch' \
      > "$CONTROL_DIR/GIT_DIFF_IMPLEMENTATION.patch" || true

    PROMPT_FILE="$(mktemp)"
    cat > "$PROMPT_FILE" <<'PROMPT'
You are Codex acting as final auditor.

Read:
agent-control/CODEX_PLAN.md
agent-control/KIMI_WORK_REPORT.md
agent-control/CODEX_RECOVERY_PLAN.md if present
agent-control/GIT_STATUS_SHORT.txt
agent-control/GIT_DIFF_STAT.txt
agent-control/GIT_DIFF_FULL.patch
agent-control/GIT_DIFF_IMPLEMENTATION.patch

Inspect changed files if necessary.

Your role:
- Audit Kimi's work.
- Do not edit files.
- Do not fix anything.
- Decide whether the work is ready for Edwin.

Write your final answer as markdown using this exact structure:

# CODEX AUDIT

## Verdict
Approved / Rejected / Needs Fixes

## Summary
## Plan Compliance
## Files Changed
## Diff Review
## Problems Found
## Tests Verified
## Risks
## Required Fixes
## Ready for Edwin Approval?
Yes / No

## Edwin Approval Notes
State clearly what Edwin is being asked to approve.

Rules:
- Reject if Kimi modified files outside the allowed scope.
- Reject if tests failed and were not fixed.
- Reject if tests were skipped without explanation.
- Reject if the implementation added dependencies without approval.
- Reject if credentials, secrets, deployment, deletion, or system settings were touched.
- Approve only if the work matches the plan and the evidence supports completion.

Coordination files may change as part of the bridge workflow. Do not reject solely because these files changed:
- agent-control/REQUEST.md
- agent-control/CODEX_PLAN.md
- agent-control/CODEX_AUDIT.md
- agent-control/CODEX_RECOVERY_PLAN.md
- agent-control/BLOCKER_REPORT.md
- agent-control/RUN_LOG.md
- agent-control/PREFLIGHT.md
- agent-control/STATUS.md
- agent-control/CODEX_EXEC_HELP.txt
- agent-control/GIT_STATUS_SHORT.txt
- agent-control/GIT_DIFF_STAT.txt
- agent-control/GIT_DIFF_FULL.patch
- agent-control/GIT_DIFF_IMPLEMENTATION.patch

Use agent-control/GIT_DIFF_IMPLEMENTATION.patch as the primary implementation evidence.

Focus on:
- files explicitly allowed by CODEX_PLAN.md
- files listed in KIMI_WORK_REPORT.md
- agent-control/KIMI_WORK_REPORT.md

Reject only if Kimi changed implementation files outside the plan, skipped required checks without explanation, touched credentials, installed packages without approval, deleted files, deployed, pushed, or violated the plan.
PROMPT

    write_prompt_and_run_codex "$PROMPT_FILE" "$CONTROL_DIR/CODEX_AUDIT.md"
    rm -f "$PROMPT_FILE"
    log "Codex audit completed and written to agent-control/CODEX_AUDIT.md."
    ;;

  status)
    {
      echo "# AGENT CONTROL STATUS"
      echo
      echo "## Git status"
      git -C "$ROOT" status --short 2>/dev/null || true
      echo
      echo "## Control files"
      ls -la "$CONTROL_DIR"
    } | tee "$CONTROL_DIR/STATUS.md"
    log "Status generated."
    ;;

  *)
    echo "Usage:"
    echo "  ./scripts/codex-bridge.sh preflight"
    echo "  ./scripts/codex-bridge.sh plan"
    echo "  ./scripts/codex-bridge.sh rescue"
    echo "  ./scripts/codex-bridge.sh audit"
    echo "  ./scripts/codex-bridge.sh status"
    exit 1
    ;;
esac
