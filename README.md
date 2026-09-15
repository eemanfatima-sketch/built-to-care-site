# Built to Care Site

Lovable Prompt — Built to Care (one-page podcast site)

Paste everything below into Lovable. Upload built-to-care-logo.webp (the black + blue wordmark) to the project first and reference it as the hero logo.

Build a single-page marketing site for a podcast called Built to Care. One page, no routing, no multi-page nav. It has four jobs: explain what the show is, play Episode 1, introduce the host, and get people to subscribe.

Who this is for

Owners and operators of home care, home health, and hospice agencies in the US. These are busy business people, not tech people. The site should feel credible and warm — like a trade publication that respects them — not like a SaaS product page. Nothing on this site should read as a software pitch.

Design direction

Follow this palette exactly. It comes from the show's existing social artwork.

Page background: #F5F9FF (very pale blue-white)

Surfaces / cards: #FFFFFF

Display text: #000000 (true black, as in the logo)

Body text: #3A4250

Muted text: #7B8794

Primary blue: #2E86FF — links, buttons, the "Care" accent

Blue hover / pressed: #1565D8

Pale blue tint: #EAF2FE — section washes

Badge / pill fill: #DCE9FB

Hairlines and photo rings: #C7DCF7

Deep navy: #0B2A54 — for the one place a second dark tone is needed, the "now live" pill text

This is a two-color palette: black type on pale blue, with one blue. Do not introduce a warm accent, an orange, a red, or any third hue. If something needs to stand out, use weight, size, or whitespace rather than a new color.

Typography: Outfit for display and headings (geometric sans, matches the logo's round shapes), Inter for body. Two families only. Sentence case throughout — no all-caps eyebrow labels above sections, no tracked-out micro-labels, no "→" appended to button text.

Type scale: hero headline ~56px desktop / 34px mobile at weight 300–400 with tight letter-spacing (the logo's "BUILT" is light and wide — echo that). Section headings ~30px. Body 17px at 1.65 line-height, capped at 68 characters per line.

The one bold element is the audio waveform. The show's artwork uses a soft multicolor waveform — vertical rounded bars in pale blue, pink, yellow, and mint at low opacity. Use it once, as a wide horizontal band bleeding across the full width behind the hero, sitting low and fading out at both edges. Do not repeat it in every section. Everywhere else stay quiet: generous whitespace, thin #C7DCF7 rules, no drop shadows, no gradient washes on cards, border-radius only on pills and the video frame.

Do not use identical rounded cards for every block. Vary the structure: the overview is a three-column text grid with hairline dividers, the episode is a full-bleed feature, the host section is an asymmetric two-column split.

Motion: one page-load reveal on the hero only. No scroll-triggered fade-ups on every section, no hover lift on cards. Respect prefers-reduced-motion.

Sections, in order

1. Hero

The uploaded Built to Care logo, sized generously, centered.

Headline: The business of care at home.

Subhead: Long-form conversations with the people running home care, home health, and hospice agencies — about staffing, payers, cash flow, and growth.

A small pill in #DCE9FB with #0B2A54 text: Episode 1 now live

Two buttons: primary solid blue Watch episode 1 (anchors to the episode section), and a quiet outlined Follow the show (anchors to the subscribe block).

Waveform band behind, as described above.

2. About the show

Heading: An operator-first show

Three short columns, hairline-divided, each 2–3 sentences. No icons, no numbered markers.

Made for operators, not vendors. Every episode is a working conversation with someone who runs an agency or serves the people who do. We ask about the things that actually decide whether an agency grows: hiring caregivers, getting paid, staying compliant.

Long enough to say something. 35 to 45 minutes, one guest, remote video. Released weekly across the season.

No pitch. The host builds software for this industry, and it stays off the mic unless a guest brings it up. The show exists to learn from operators, not to sell to them.

3. Episode 1 — the centerpiece

Full-bleed section on the #EAF2FE tint.

Small line above the title: Episode 1

Title: Why an agency owner co-builds her own software

Embed the YouTube video responsively at 16:9, https://www.youtube.com/watch?v=RXUF8hLY6bw. Give the iframe a #C7DCF7 ring and 12px radius. Use youtube-nocookie.com and lazy-load it.

Below the video, a guest line: Daniela Jonguitud, Founder and CEO, Chajinel Home Care Services — in conversation with host Abeer Raza.

Two-sentence description: Daniela runs a home care agency and chose to build technology alongside a product team rather than buy off the shelf. She walks through that decision, and what VA Community Care billing actually looks like from inside an agency.

4. What's coming this season

Heading: This season Intro line: Twelve to fourteen episodes with operators, association leaders, and the people who know the numbers.

A simple two-column list of themes with hairline separators — plain text, no cards, no icons:

Staffing and retention — recruiting caregivers in a tight labor market

Payer complexity — denials, underpayments, and getting paid for care already delivered

EVV and compliance — surviving surveys and visit-verification mandates

VA Community Care — the payer most agencies overlook

Medicaid managed care — serving the hardest payer profitably

Growth stories — the $1M to $10M journey, and what breaks at each stage

AI in home care — what actually helps, from an operator's view

Aging in place — the village movement and the demand side

Policy and workforce — what's coming nationally

Exits and consolidation — what agencies are worth, and who's buying

5. About the host

Asymmetric split: photo left (~40%), text right. Circular photo with a #C7DCF7 ring, matching the show's artwork. Use a placeholder image and leave a clear TODO comment for the real headshot.

Heading: Abeer Raza Subhead: Co-founder and CMO, TekRevol

Body, three short paragraphs:

Abeer co-founded TekRevol in 2018 and leads its growth as CMO. What began as a self-funded studio now builds digital products for companies across the US, the Middle East, and beyond.

His work in home-based care started with the operators themselves — running roundtables with agency owners in Austin and Dallas, and co-building software with agencies rather than for them. That's where this show came from.

He hosts every episode. The format is deliberately simple: one guest, forty minutes, and questions about the business rather than the technology.

Add a single text link to LinkedIn, styled in #2E86FF. Leave the href as a TODO.

6. Subscribe and footer

Heading: Follow the show Line: New episodes weekly. Watch on YouTube, or listen wherever you get podcasts.

Three plain text links with hairlines between them — YouTube (link to the channel, TODO href), Apple Podcasts (TODO), Spotify (TODO). No logo soup, no gradient buttons.

Footer: thin #C7DCF7 rule, then Built to Care is produced by TekRevol. — plain text with TekRevol as a #2E86FF link to https://www.tekrevol.com. No logo. Copyright line in #7B8794.

Rules

Invent nothing. No fake download counts, no made-up testimonials, no episode list beyond Episode 1, no ratings, no logo walls, no newsletter form. Only one episode exists.

Anywhere real content is missing, use a clearly marked TODO comment rather than filler.

Fully responsive down to 375px. The waveform band should shrink gracefully, not scroll horizontally.

Visible keyboard focus rings in #2E86FF. Semantic headings in order. Alt text on the logo and headshot.

Set the page title to Built to Care — the business of care at home, write a real meta description, and add Open Graph tags using the show's social artwork.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6c677152-0a07-4c52-9bed-cc85beea8b89).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
