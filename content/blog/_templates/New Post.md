<%*
// Prompt for the post title, derive a URL slug, and move the new note
// into its own folder as index.md (the layout Gatsby expects).
const title = await tp.system.prompt("Post title");
const slug = title.toLowerCase().trim()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");
await tp.file.move(`/${slug}/index`);
-%>
---
title: <% title %>
date: <% tp.date.now("YYYY-MM-DD") %>
description:
---

