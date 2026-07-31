# AGENTS.md — yang-qwq.github.io

Single-page static personal site (journal/scrapbook theme). No build tool, no framework — plain HTML + CSS + JS.

## Serve locally

```sh
python3 -m http.server 8000
```

## File structure

- `index.html` — skeleton with `Loading...` placeholders; every section populated at runtime by `main.js` reading `SITE_DATA` from `data.js`
- `static/js/data.js` — single config file; edit this to change all page content
- `static/js/main.js` — 18 `try{...}catch` init calls: `initPageTitle`, `initCoverTitle`, `initUser`, `initAbout`, `initFooterName`, `initPoem`, `initMusic`, `initQuote`, `initAnime`, `initCategories`, `initSubsites`, `initFriends`, `initGames`, `initAnimeToggle`, `initTyped`, `initJinrishici`, `initAplayerAria`, plus `setInterval(ascTime)` for run-day counter
- `static/js/timer.js` — `ascTime`/`descTime` utilities
- `static/css/style.css` — base styles; `static/css/responsive.css` — media queries; `static/css/dark.css` — dark mode overrides (`@media prefers-color-scheme: dark`); `static/css/cursor.css` — custom cursors
- `static/img/bangumi/*.jpg` — anime images; `static/img/game/` — placeholder (SVG fallback via `img.onerror`);
- `error/*.html` — prebuilt Bootstrap error pages, **not themed** — skip editing

## CSS loading order (cascade matters)

| Order | File | Role |
|-------|------|------|
| 1 | `cursor.css` | Custom cursor GIFs |
| 2 | `style.css` | Base layout & design tokens |
| 3 | `responsive.css` | Media query overrides |
| 4 | `dark.css` | Dark mode overrides inside `@media (prefers-color-scheme: dark)` |

All 4 loaded in `<head>` via `<link>`. Dark mode has **no JS toggle** — purely OS-preference driven.

## Script loading & execution order

- **Synchronous** (blocking): `typed.js`, `clipboard.js` — run before `data.js`
- **`defer`** (in-order): `APlayer.min.js` → `Meting.min.js` → `jinrishici` → `data.js` → `timer.js` → `main.js`
- **`async`** (unordered): `busuanzi`, hitokoto JSONP `<script>`
- `main.js` top-level calls are **not** wrapped in `DOMContentLoaded` — deferred scripts execute after DOM parse; wrapping would break them
- Inline snowflake/lantern/visibility scripts use `DOMContentLoaded` (run after all deferred)

## Key behaviors

| Behavior | Detail |
|---|---|
| Data flow | `data.js` → `main.js` renders → HTML has only `Loading...` placeholders |
| Quote fallback | `initQuote` writes `SITE_DATA.quote` only if `#hitokoto` still says `Loading...` (hitokoto JSONP `hitokotoCallback` sets via `from_who`/`from`) |
| Poem fallback | `initPoem` sets `SITE_DATA.poem` first; `initJinrishici` overrides via `result.data.origin.title` + `result.data.origin.author` |
| Anime toggle | First 4 in `#anime-grid-main`, rest in `#anime-strip` (collapsible); toggle button created by `initAnimeToggle` |
| Music player | `<meting-js>` custom element created dynamically by `initMusic()` from `SITE_DATA.music`; `initAplayerAria` then injects Chinese `aria-label`s on APlayer buttons via `MutationObserver` |
| Accessibility | APlayer controls get `aria-label` values (播放顺序/循环模式/播放列表) via `initAplayerAria` MutationObserver — add `aria-label` attrs in dark.css if styling new player elements |
| Visibility title | Captures `prevTitle` when hidden (not at parse time); restores after 2 s |
| Seasonal | Snowflakes (Dec–Feb, `SnowScene` from `snowflakesjs`), lanterns (Jan 21–Feb 15 lunar, CSS from `deng.css`) |
| Game UID copy | `ClipboardJS` on `.copy-uid-btn`; toast via `showToast()` — do NOT use `swal()` |
| Typed.js subtitle | Strings hardcoded in `main.js:56-67` (not from `data.js`); shuffled randomly each load |
| Dark mode | Auto-detected via `prefers-color-scheme: dark`; no manual toggle. Edit `dark.css` if adding elements that need dark variants |

## CDN origins (do not vendor)

- **unpkg.com**: typed.js, clipboard, APlayer, Meting, busuanzi, snowflakesjs
- **cdn.jsdelivr.net**: bootstrap-icons
- **github.yang-qwq.top**: deng.css (lantern animation, custom domain)
- **v1.hitokoto.cn**: hitokoto API (JSONP: `encode=json&callback=hitokotoCallback`; inline handler `JSON.parse`s the string arg)
- **sdk.jinrishici.com**: daily poem API

## Design conventions

- Colors: cream `#efe7d6`, tan `#c8b898`, brown `#3a2c1b`; dark mode bg `#1e1e1e`, card bg `#2c2c2c`
- Fonts: LXGW WenKai (body), Caveat (English decorative) — Google Fonts
- Card rotation: `r0`(0°), `r1`(1.2°), `r1n`(-1.2°), `r2`(2.4°), `r2n`(-2.4°)
- Mobile (≤640px): cards 6+ lose rotation (`.journal > .card:nth-child(n+6)`)
- `border-radius: 0` everywhere (intentional rectilinear journal look)
- Paper texture via `body::after` SVG `feTurbulence` noise overlay (opacity 0.025)
- Icons: Bootstrap Icons (`bi-*` class names)

## Do NOT

- Modify `error/*.html` — unthemed Bootstrap templates
- Add `border-radius` — keep 0
- Replace CDN URLs without asking
- Use `swal()` — use `showToast()` instead
