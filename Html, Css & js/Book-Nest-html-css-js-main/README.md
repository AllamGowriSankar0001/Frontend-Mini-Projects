# Book-Nest — Static Demo Project

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://allamgowrisankar0001.github.io/Book-Nest/)

Live demo: https://allamgowrisankar0001.github.io/Book-Nest/

Lightweight static demo for a small ebook/bookstore UI built with plain HTML, CSS and JavaScript. It contains a few pages showcasing browsing, saved items, and job listings used while prototyping UI and client-side behavior.

## What this repository contains

- `index.html` — home / landing (project root). 
- `book.html`, `browser.html`, `cart.html`, `geners.html`, `saved.html` — example pages for browsing and managing saved books.
- `styles.css` — (if present) shared stylesheet referenced by pages.

Note: many pages include inline styles and data arrays inside `<script>` tags for demo purposes.

## How to view locally

This is a static site — no build step required. You can open the pages directly in a browser, however using a local server avoids issues with some browser features (e.g., fetch/localStorage nuances on file://).

Quick way to run a local server:

 just double-click any `.html` file to open it in the browser.

## Key behaviours implemented

- Client-side data arrays for books and jobs (in `saved.html`, `jj.html`) used to render cards.
- Saved books use `localStorage` to persist an array of saved book IDs; `saved.html` reads/writes that key.
- Filters and search are implemented with DOM manipulation and basic event handlers.

## Troubleshooting

- If pages don't show dynamic content, open the browser console (F12) to see JS errors.
- When editing inline scripts, watch for unmatched braces or stray template literals which can stop the rest of the script from running.

## Contact / Notes

This is a small demo repository. If you want, I can:
- implement a small local dev server script (package.json + start script),
- replace inline data with JSON files and update the pages to fetch them,
- or convert the UI into a small React/Vite prototype for faster iteration.

Tell me which of the above you'd like next and I'll implement it.
