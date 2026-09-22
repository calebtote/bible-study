# Joshua: The Journey into the Land

An interactive study of the book of Joshua: all 24 chapters, the geography they
happened in, and the surrounding ancient world that explains them. Built for
personal study and for leading a small group.

At every milestone the interface answers the same six questions. Where are we,
what is happening, what brought us here, who are these people, what was their
surrounding world like, and why does this matter in the biblical story.

## Getting started

Requires Node 20 or newer (developed on 26).

```bash
npm install
npm run dev          # http://localhost:3000
```

That is enough. The map ships with its own geography and the Scripture text
ships with the app, so nothing above needs network access or credentials.

### Optional: the ESV

Scripture is shown in the English Standard Version when a credential is
configured, and in the bundled public-domain World English Bible otherwise.
Either way the translation is named on screen, and a passage that falls back
says why in place.

Get a key from [api.esv.org](https://api.esv.org/) and put it in `.env.local`:

```
API_ESV_ORG=your-token-here
```

The bare token and the `Authorization: Token your-token-here` line ESV hands
out are both accepted. The value is read server-side only, in
`app/api/esv/route.ts`, and never reaches the client bundle, `localStorage`, or
an exported notebook file.

### Production

```bash
npm run build        # runs npm run validate first
npm start
```

### GitHub Pages

`.github/workflows/pages.yml` publishes a static export on every push to
`main`. One manual step first: in the repository's Settings, under Pages,
set Build and deployment's Source to "GitHub Actions". After that the
workflow does the rest on every push; no other settings to fill in.

A static export has no server, so the ESV proxy route cannot exist there.
`npm run build:pages` removes it for that build only, and every reader on
Pages reads the bundled World English Bible, which is the whole reason that
translation is bundled in full rather than fetched on demand. Everything else
in the study, the map, the chapters, the dossiers, notes and export/import,
works the same as it does with `npm run build`.

The workflow computes the site's base path with `actions/configure-pages`, so
it publishes correctly whether the repository serves from a sub-path
(`https://you.github.io/repo-name/`), from a user or org root page, or from a
custom domain. Nothing to configure by hand, and nothing here needs to change
if a custom domain is added later.

To try the static build locally:

```bash
npm run build:pages   # writes ./out
npx serve out
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run validate` | Checks referential integrity across all content. Runs automatically before every build. |
| `npm run build:pages` | Static export for GitHub Pages, at `./out`. Drops the ESV proxy route for that build only. |
| `npm run lint` | ESLint, including the React Compiler hook rules. |
| `npm run basemap` | Regenerates the bundled map geography from Natural Earth. Only needed when changing the basemap. |
| `node scripts/show-verses.mjs joshua-6@1-5` | Prints bundled WEB verses, for checking a passage while authoring. |

`npm run validate` fails the build on an unknown entity, milestone, source,
theme or Scripture reference. A citation cannot rot silently into a dead link.

## How it is organised

Content is data, separate from the components that render it.

```
content/          chapters, milestones, entities, people, themes, sources, map features
lib/              map selection, scripture loading, search, URL and local state
components/       the study screen, the atlas, the explorers
public/geo/       bundled Natural Earth geography
public/scripture/ bundled World English Bible
```

Nothing a reader produces leaves their browser. Notes, bookmarks and progress
live in `localStorage`; the notebook exports and imports JSON, and an import
tells you what it found before it overwrites anything. There are no accounts.

Chapter, milestone and open dossier all live in the URL, so a link restores the
view it was copied from.

## The editorial rules are in the data

The book of Joshua is easy to render dishonestly, so the distinctions are
enforced by types rather than left to prose.

- A milestone declares a `sequenceType`. A territorial summary or an allotment
  cannot be animated as though it were a march, because the renderer reads that
  field to decide whether movement is even drawn.
- A map feature declares its certainty, including `unknown`. An unlocated place
  renders as a gap in a route and says so, rather than being given a plausible
  coordinate.
- Allotment and remaining-land layers are drawn and labelled as claims about
  what the text says, not as evidence of control. Military victory is not
  occupation and an allotment is not proof of possession, and the map is not
  allowed to imply otherwise.
- Absolute dates appear only in `HistoricalAnchor` records, each naming the
  chronology it assumes. Biblical sequence is stored separately from proposed
  historical dating.
- Identification of a site is distinguished from confirmation of an event there.

Theological material is Christian in orientation and broadly Reformed, with
other Christian traditions represented in their own terms. For difficult
passages the text's claims, the literary function, the historical questions,
the major interpretations and what remains unresolved are kept separate.
