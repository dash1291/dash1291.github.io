# Editing this blog from Obsidian

`content/blog/` is set up to be opened directly as a dedicated Obsidian vault. You
write and edit posts in Obsidian; git is your sync. Everything below happens inside
Obsidian — no terminal needed for day-to-day writing.

## One-time setup

1. **Open the vault**: Obsidian → *Open folder as vault* → select
   `…/dash1291.github.io/content/blog`. Name it e.g. "Blog". Trust author / enable
   plugins when asked. (This is separate from your main vault.)

   The committed `.obsidian/app.json` already makes images and links build correctly:
   pasted/dragged images save **next to the post's `index.md`** and insert as
   standard `![](./img.png)` markdown — never wikilinks — which is what Gatsby needs.

2. **Install Templater** (gives you one-click "new post"):
   Settings → Community plugins → Browse → search **Templater** → Install → Enable.
   Then Settings → Templater → set **Template folder location** to `_templates`.
   (Optional: Settings → Hotkeys → bind *"Templater: Create new note from template"*.)

3. **(Optional, recommended) Install "Front Matter Title"** so the sidebar shows each
   post's `title` instead of the literal filename `index` (every post is its own
   folder's `index.md`, so without this they all read "index").
   Community plugins → Browse → "Front Matter Title" → Install → Enable.

## Writing posts

### New post  (fully in Obsidian)
Command palette → **"Templater: Create new note from template"** → choose **New Post**
→ type the title when prompted. Templater creates `content/blog/<slug>/index.md`, fills
in `title` and today's `date`, and leaves your cursor in the body. Start writing.

- The folder name (slug) is derived from the title and becomes the URL
  (`/<slug>.html`). To use a different slug, just rename the folder afterwards.

### Edit a post
Open its `index.md` and type. `title` / `date` / `description` appear in the
**Properties** panel at the top.

### Images
Paste or drag into the note. The file lands in that post's folder and is inserted as
`![](./image.png)` — renders in Obsidian preview *and* on the built site.

## Publish
Required frontmatter: `title` and `date` (`YYYY-MM-DD`); `description` is optional.
Commit and push as usual:

```sh
git add content/blog && git commit -m "New post: …" && git push
```

## Notes / gotchas
- **Don't keep scratch or template `.md` files loose in `content/blog/`** — Gatsby turns
  every markdown file there into a published page. The Templater template lives in
  `content/blog/_templates/`, which `gatsby-config.js` is set to ignore (along with
  `.obsidian/`). This guide lives at the repo root, outside the vault, for the same
  reason.
- You also have `gatsby-plugin-netlify-cms` installed (from the `cms` branch). This
  Obsidian workflow replaces that web CMS — decide whether to keep or remove it.

## No-plugin fallback (if you skip Templater)
Create a note, rename it `your-slug/index` (typing the `/` makes Obsidian create the
folder), then paste this at the top and edit the title:

```
---
title: Your Title
date: 2026-01-01
description:
---
```
