## Fix: Vidya dropdown transparent / text overlap

The Vidya menu uses our `glass` utility, which is intentionally semi-transparent. Sitting over body text it lets the page bleed through, so menu items overlap with whatever is underneath.

### Change

In `src/components/SiteHeader.tsx`, swap the dropdown panel's background from `glass` to a solid, opaque surface using design tokens (no raw colors):

- Replace `glass rounded-2xl border border-border/60 p-2 shadow-xl` with `rounded-2xl border border-border bg-popover text-popover-foreground p-2 shadow-2xl` on the dropdown panel `<div>`.
- Keep the existing `backdrop-blur-xl` on the parent `<header>` — only the dropdown surface changes.

`bg-popover` is the shadcn token already wired in `src/styles.css` and is fully opaque, matching the rest of the app's menu/popover surfaces. No other files touched.
