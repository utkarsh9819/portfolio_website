# Utkarsh Mishra — Research Portfolio

A simple, static personal website. No build step, no framework —
just HTML, CSS, and vanilla JavaScript, so it runs directly on
GitHub Pages.

## Folder structure

```
index.html                     the whole site (one page)
assets/css/style.css            all styling
assets/js/main.js               nav menu, scroll reveals, photo galleries
assets/img/profile.svg          placeholder headshot — replace with profile.jpg
assets/img/projects/            3 placeholder photos per project — replace these
assets/cv/                      put your CV PDF here (see README.txt inside)
assets/talks/                   put your talk/poster PDFs here (see README.txt inside)
.nojekyll                       tells GitHub Pages to skip Jekyll processing
```

## How to put this on GitHub Pages

1. Create a new repository on GitHub (or use an existing one).
2. Upload every file in this folder to the repository, keeping the
   folder structure exactly as it is (drag-and-drop on github.com
   works fine, or use `git add . && git commit -m "site" && git push`).
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
5. Set **Branch** to `main` (or whichever branch you pushed to) and
   folder to `/ (root)`. Save.
6. GitHub will give you a URL, usually:
   `https://<your-username>.github.io/<repo-name>/`
   It can take a minute or two to go live the first time.

## Replacing the placeholders

- **Photos:** each project has 3 placeholder images in
  `assets/img/projects/`, named like `nrlm-1.svg`, `nrlm-2.svg`,
  `nrlm-3.svg`. Replace them with your own JPG/PNG files. You can
  keep the same filenames (just swap the file), or use new filenames —
  if you rename them, update the matching `<img src="...">` lines in
  `index.html`.
- **More or fewer photos per project:** open `index.html`, find the
  project's `<div class="gallery-track">`, and add or remove `<img>`
  lines. The slider, dots, and swipe gestures adjust automatically —
  no JavaScript changes needed.
- **Profile photo:** replace `assets/img/profile.svg` with your own
  photo (e.g. `profile.jpg`), then update the `src` in the About
  section of `index.html`.
- **CV:** see `assets/cv/README.txt`.
- **Talk slides:** see `assets/talks/README.txt`.

## Editing text

All the page copy lives directly in `index.html` — headings,
project descriptions, experience list, and skills are plain text
in the HTML, so you can edit them with any text editor (including
GitHub's built-in editor) without touching the CSS or JS.
