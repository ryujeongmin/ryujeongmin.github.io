# Jeongmin Ryu — Portfolio Design System
# Paste this entire file into Claude Code as your first message when working on the site.

---

## ROLE & GOAL

You are helping maintain and extend the personal portfolio website of Jeongmin Ryu (ryujeongmin.github.io).
The site is a single-page HTML portfolio for a mechanical engineer and HCI researcher.
After every change, run: `git add . && git commit -m "<description>" && git push`

---

## AESTHETIC DIRECTION

Nordic editorial — clean, restrained, typographically driven.
Reference: Imperial College London website grid discipline + Scandinavian poster composition.
- No gradients, no shadows, no decorative flourishes
- Everything lives on a strict 12-column grid
- Thin 1px lines divide sections and columns
- Color is used sparingly — warm paper tones + one red accent only
- Generous whitespace, never crowded

---

## FONTS

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;900&family=Outfit:wght@300;400;500;600&family=Space+Mono&display=swap');
```

| Role         | Font              | Use case                              |
|--------------|-------------------|---------------------------------------|
| `--display`  | Playfair Display  | Hero title, section headings, project names |
| `--ui`       | Outfit            | Body text, nav links, descriptions    |
| `--mono`     | Space Mono        | Labels, tags, dates, metadata         |

NEVER use: Inter, Roboto, Arial, system-ui as primary fonts.

---

## COLOR TOKENS

```css
:root {
  --bg:   #f4f1ea;   /* main background — warm paper */
  --bg2:  #edeae1;   /* secondary surface */
  --bg3:  #e4e0d5;   /* tertiary / dimmed surface */
  --ink:  #0f0e0b;   /* primary text */
  --ink2: #48453e;   /* secondary text */
  --ink3: #9a9690;   /* muted / labels */
  --red:  #b83428;   /* accent — use ONLY for: award labels, experience company tags, section separators */
  --line: rgba(15,14,11,0.12);  /* all borders and dividers */
  --nav-h: 54px;
  --display: 'Playfair Display', Georgia, serif;
  --ui: 'Outfit', -apple-system, sans-serif;
  --mono: 'Space Mono', 'Courier New', monospace;
}
```

Background hierarchy (dark to light): `--ink` → `--bg3` → `--bg2` → `--bg`
Red (`--red`) is used ONLY for: `.t-label-red` (company/award tags). Never for backgrounds or headings.

---

## GRID SYSTEM

12-column grid. Every section uses `.row`. Cells span columns with `.c1`–`.c12`.
All borders are `1px solid var(--line)`. No gap between cells — borders create the separation.

```css
.row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 0; row-gap: 0;
  border-top: 1px solid var(--line);
}
.row > * {
  background: var(--bg);
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.row > *:last-child { border-right: none; }

/* Column spans */
.c1 { grid-column: span 1; }  .c2 { grid-column: span 2; }
.c3 { grid-column: span 3; }  .c4 { grid-column: span 4; }
.c5 { grid-column: span 5; }  .c6 { grid-column: span 6; }
.c7 { grid-column: span 7; }  .c8 { grid-column: span 8; }
.c9 { grid-column: span 9; }  .c10 { grid-column: span 10; }
.c11 { grid-column: span 11; } .c12 { grid-column: span 12; }

/* Row heights */
.h-hero  { height: calc(100vh - var(--nav-h)); min-height: 520px; }
.h-tall  { height: 500px; }
.h-mid   { height: 360px; }
.h-short { height: 240px; }
.h-label { height: 64px; }
```

---

## TYPOGRAPHY CLASSES

```css
/* Tiny mono uppercase label — dates, tags, categories */
.t-label {
  font-family: var(--mono); font-size: 9px; font-weight: 400;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--ink3); line-height: 1.4;
}
.t-label-inv { color: rgba(244,241,234,0.45); }
.t-label-red { color: var(--red); }          /* company/award tags only */

/* Hero display — very large, tight leading */
.t-display {
  font-family: var(--display);
  font-size: clamp(48px, 6.5vw, 92px);
  font-weight: 900; line-height: 0.94;
  letter-spacing: -0.02em; color: var(--ink);
}

/* H1 — section titles, contact email */
.t-h1 {
  font-family: var(--display);
  font-size: clamp(22px, 2.5vw, 36px);
  font-weight: 700; line-height: 1.15;
  letter-spacing: -0.01em; color: var(--ink);
}
.t-h1-inv { color: var(--bg); }

/* H2 — project names, institution names */
.t-h2 {
  font-family: var(--display);
  font-size: clamp(16px, 1.5vw, 22px);
  font-weight: 700; line-height: 1.25;
  letter-spacing: -0.01em; color: var(--ink);
}

/* Body — paragraphs, descriptions */
.t-body {
  font-family: var(--ui); font-size: 13px; font-weight: 300;
  line-height: 1.8; color: var(--ink2);
}
.t-body-inv { color: rgba(244,241,234,0.58); }

/* Small — secondary info, dates in lists */
.t-sm {
  font-family: var(--ui); font-size: 11px; font-weight: 300;
  line-height: 1.65; color: var(--ink3);
}
```

Typography hierarchy: `t-display` → `t-h1` → `t-h2` → `t-body` → `t-sm` → `t-label`

---

## BACKGROUND MODIFIERS

```css
.on-dark { background: var(--ink) !important; }   /* dark panels */
.on-mid  { background: var(--bg2) !important; }   /* slightly offset panels */
.on-dim  { background: var(--bg3) !important; }   /* dimmer panels */
```

---

## IMAGE CELLS

Images always fill their cell completely. Hover scales the image slightly.
On-hover: dark panel slides in from opacity 0 showing project details.

```css
.img-cell { position: relative; overflow: hidden; }
.img-cell img {
  position: absolute; inset: 0; width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(.25,.46,.45,.94);
}
.img-cell:hover img { transform: scale(1.05); }

/* Gradient overlay at bottom for text legibility */
.overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(12,11,9,0.75) 0%, transparent 55%);
  pointer-events: none;
}
.overlay-info {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 1.5rem 2rem;
}

/* Full dark overlay on hover showing description */
.hover-panel {
  position: absolute; inset: 0;
  background: rgba(12,11,9,0.88);
  opacity: 0; transition: opacity 0.3s;
  padding: 2rem; display: flex; flex-direction: column; justify-content: flex-end;
}
.img-cell:hover .hover-panel { opacity: 1; }
```

---

## SECTION LABEL ROW PATTERN

Every major section starts with this full-width label row:

```html
<div class="sec-label rev">
  <span class="sec-num">01</span>
  <div class="sec-rule"></div>
  <span class="sec-title">Section Name</span>
  <div class="sec-rule"></div>
</div>
```

```css
.sec-label {
  grid-column: span 12;
  display: flex; align-items: center; gap: 2rem;
  padding: 0 2rem; height: 52px;
  background: var(--bg2) !important;
  border-bottom: 1px solid var(--line);
}
.sec-num   { font-family: var(--mono); font-size: 9px; color: var(--ink3); letter-spacing: 0.2em; }
.sec-title { font-family: var(--display); font-size: 14px; font-weight: 700; color: var(--ink); }
.sec-rule  { flex: 1; height: 1px; background: var(--line); }
```

Section numbers: 01 Projects, 02 About, 03 Experience, 04 Awards, 05 Contact

---

## NAV

Fixed top bar. 3-part layout: logo left / descriptor center / links right.

```html
<nav>
  <span class="nav-logo">Jeongmin Ryu</span>
  <span class="nav-tag">ME · HCI · Seoul · 2025</span>
  <div class="nav-links">
    <a href="#projects">Projects</a>
    <a href="#about">About</a>
    <a href="#experience">Experience</a>
    <a href="#contact">Contact</a>
  </div>
</nav>
```

---

## EXPERIENCE TABLE PATTERN

Two-column: narrow date column (150px, mono font) | content column.
Each row separated by `1px solid var(--line)`.

```html
<div class="exp-row">
  <div class="exp-date">Mar 2025 — Now</div>
  <div class="exp-body">
    <p class="t-h2">Job Title</p>
    <p class="t-label t-label-red" style="margin-bottom:0.6rem">Company · Team</p>
    <p class="t-body">Description...</p>
  </div>
</div>
```

---

## AWARDS TABLE PATTERN

3-part flex row: prize label (red mono) | name | org+year (right-aligned).

```html
<div class="award-row">
  <span class="aw-prize">Grand Prize</span>
  <span class="aw-name">Award Name</span>
  <span class="aw-org">Organization · Year</span>
</div>
```

---

## STAT STRIP PATTERN

Full-width strip between hero and projects. Shows key numbers.

```html
<div class="stat-strip">
  <div class="stat-item">
    <div class="stat-num">11+</div>
    <div class="stat-lbl">Projects</div>
  </div>
  <!-- repeat -->
</div>
```

---

## SCROLL REVEAL

All major blocks animate in on scroll with `.rev` class. JS at bottom of page.

```html
<div class="rev"> ... </div>
<!-- with optional delay: style="transition-delay:.08s" -->
```

```js
const obs = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); }),
  { threshold: 0.06 }
);
document.querySelectorAll('.rev').forEach(el => obs.observe(el));
```

```css
.rev { opacity: 0; transform: translateY(12px); transition: opacity 0.55s ease, transform 0.55s ease; }
.rev.on { opacity: 1; transform: none; }
```

---

## MARQUEE STRIP

Scrolling keyword strip between Projects and About sections.

```html
<div class="marquee-wrap">
  <div class="marquee-inner">
    <span class="m-item">Keyword</span><span class="m-sep"> · </span>
    <!-- repeat twice for seamless loop -->
  </div>
</div>
```

```css
.marquee-wrap { overflow: hidden; background: var(--bg2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: 0.85rem 0; }
.marquee-inner { display: flex; gap: 2.5rem; white-space: nowrap; animation: marquee 22s linear infinite; width: max-content; }
.m-item { font-family: var(--ui); font-size: 12px; font-weight: 400; color: var(--ink2); }
.m-sep  { color: var(--red); }
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
```

---

## BUTTON STYLE

```css
.btn-outline {
  display: inline-block;
  font-family: var(--mono); font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase;
  padding: 0.65rem 1.4rem; border: 1px solid var(--line); color: var(--ink2);
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.btn-outline:hover { background: var(--ink); color: var(--bg); border-color: var(--ink); }
.btn-inv { border-color: rgba(244,241,234,0.2); color: rgba(244,241,234,0.7); }
.btn-inv:hover { background: rgba(244,241,234,0.1); color: var(--bg); }
```

---

## OWNER INFO (for content updates)

- **Name:** Jeongmin Ryu (류정민)
- **Email:** r10010jm@gmail.com
- **Current role:** Mechanical Designer, Samsung Electronics (Ballie team), March 2025–present
- **Education:** KAIST M.Eng. Industrial Design (2023–2025), Yonsei B.Eng. Mech. Eng. (2018–2023), UC Berkeley Exchange (2022)
- **Skills:** NX · Creo · Fusion360 · Photoshop · Illustrator · Arduino · C · Python · Node.js · 3D Print · Laser Cut
- **Links:** github.com/ryujeongmin · instagram @ryujeongmin3812 · LinkedIn

---

## DO / DON'T

| DO | DON'T |
|----|-------|
| Use `var(--line)` for ALL borders | Hardcode colors like `#ccc` or `#333` |
| Keep section numbers sequential (01–05) | Add shadows or drop-shadows |
| Use `.t-label-red` only for company/award tags | Use red for backgrounds or headings |
| Keep image cells with hover-panel pattern | Add text directly on images without overlay |
| Use Playfair Display for all headings | Use Inter, Roboto, or system-ui as display font |
| Add `.rev` to every new block | Leave new sections without scroll reveal |
| Commit after every change with clear message | Make multiple unrelated changes in one commit |

---

## EXAMPLE CLAUDE CODE PROMPTS

Once you paste this system prompt, you can say things like:

- "Add a new project card for Bubble Maker between Umbrellatic and AI Diary. Image file is `bubble.jpg`, tag is `KAIST · IoT · 2023`, description is `...`"
- "Change the hero tagline to `...`"
- "Add a publications section after Awards with the two KAIST papers"
- "Update my current role end date"
- "Make the contact email smaller on mobile"

After each change, Claude Code will automatically run:
```bash
git add . && git commit -m "description" && git push
```
