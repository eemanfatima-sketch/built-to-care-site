import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";

import logoAsset from "@/assets/built-to-care-logo.png.asset.json";
import hostPhotoAsset from "@/assets/abeer-raza-headshot.webp.asset.json";
import { WaveformBand } from "@/components/WaveformBand";

const DESCRIPTION =
  "Built to Care is a long-form podcast with the owners and operators running home care, home health, and hospice agencies — on staffing, payers, cash flow, and growth.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Built to Care — the business of care at home" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Built to Care — the business of care at home" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      // TODO: add og:image / twitter:image once the show's social artwork is
      // hosted at a public absolute https URL (1200x630).
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const THEMES = [
  ["Staffing and retention", "recruiting caregivers in a tight labor market"],
  [
    "Payer complexity",
    "denials, underpayments, and getting paid for care already delivered",
  ],
  ["EVV and compliance", "surviving surveys and visit-verification mandates"],
  ["VA Community Care", "the payer most agencies overlook"],
  ["Medicaid managed care", "serving the hardest payer profitably"],
  ["Growth stories", "the $1M to $10M journey, and what breaks at each stage"],
  ["AI in home care", "what actually helps, from an operator's view"],
  ["Aging in place", "the village movement and the demand side"],
  ["Policy and workforce", "what's coming nationally"],
  ["Exits and consolidation", "what agencies are worth, and who's buying"],
];

const COLUMNS = [
  {
    title: "Built for operators.",
    body: "Every episode is a working conversation with someone who runs an agency or serves the people who do. We ask about the things that actually decide whether an agency grows: hiring caregivers, getting paid, staying compliant.",
  },
  {
    title: "Long enough to say something.",
    body: "35 to 45 minutes, one guest, remote video. Released weekly across the season.",
  },
  {
    title: "Voices from across the country.",
    body: "Agency founders, association leaders, and the people who hold the industry's benchmarking data — from single-market independents to national platforms.",
  },
];

function Index() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <WaveformBand />
        <div className="hero-reveal relative mx-auto max-w-3xl px-6 pt-20 pb-32 text-center sm:pt-28 sm:pb-40">
          <img
            src={logoAsset.url}
            alt="Built to Care podcast logo"
            width={320}
            height={168}
            className="mx-auto h-auto w-[240px] sm:w-[320px]"
          />
          <h1 className="mt-10 text-[34px] leading-[1.1] font-light tracking-[-0.02em] sm:text-[56px]">
            The business of care at home.
          </h1>
          <p className="measure mx-auto mt-6 text-card-foreground">
            Long-form conversations with the people running home care, home health, and
            hospice agencies — about staffing, payers, cash flow, and growth.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <a
              href="#episode-1"
              className="rounded-full bg-primary px-6 py-3 text-[15px] font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Watch episode 1
            </a>
          </div>
        </div>
      </section>

      {/* About the show */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <h2 className="text-[26px] tracking-[-0.01em] sm:text-[30px]">A season-long question</h2>
        <p className="measure mt-6 text-[19px] text-card-foreground">
          Referrals come in. Patients need care, caregivers need scheduling,
          authorizations need tracking, visits need verifying, documentation needs
          completing, and claims need to turn into cash. Somewhere in between all of
          that, an enormous amount of manual work happens — and time and revenue quietly
          slip through the cracks. This season is an attempt to find out where.
        </p>
        <div className="mt-10 grid gap-10 border-t border-border pt-10 md:grid-cols-3 md:gap-0">
          {COLUMNS.map((col, i) => (
            <div
              key={col.title}
              className={
                "md:px-8 " +
                (i === 0 ? "md:pl-0 " : "") +
                (i === 2 ? "md:pr-0 " : "") +
                (i > 0 ? "border-t border-border pt-10 md:border-t-0 md:border-l md:pt-0" : "")
              }
            >
              <h3 className="text-[19px] font-medium">{col.title}</h3>
              <p className="measure mt-3 text-card-foreground">{col.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Episode 1 */}
      <section id="episode-1" className="bg-tint py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-muted-foreground">Episode 1</p>
          <h2 className="mt-2 text-[26px] leading-tight tracking-[-0.01em] sm:text-[30px]">
            Building your own tools, and billing the VA
          </h2>
          <div className="mt-8 aspect-video w-full overflow-hidden rounded-xl ring-1 ring-border">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/RXUF8hLY6bw"
              title="Built to Care, episode 1: Building your own tools, and billing the VA"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="mt-6 font-medium text-foreground">
            Daniela Jonguitud, Founder and CEO, Chajinel Home Care Services — in
            conversation with host Abeer Raza.
          </p>
          <p className="measure mt-3 text-card-foreground">
            Daniela runs a home care agency and decided to build her own systems rather
            than take what was on the shelf. She walks through that decision, and what
            VA Community Care billing actually looks like from inside an agency.
          </p>
        </div>
      </section>

      {/* This season */}
      <section className="bg-card py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.7fr)] lg:gap-20">
          <div className="lg:sticky lg:top-12 lg:self-start">
            <p className="font-medium text-primary">Across the season</p>
            <h2 className="mt-2 text-[30px] leading-tight sm:text-[38px]">The business behind the care</h2>
            <p className="measure mt-5 text-card-foreground">
              Twelve to fourteen episodes with operators, association leaders, and the
              people who know the numbers.
            </p>
          </div>
          <ol className="grid border-t border-border sm:grid-cols-2 sm:gap-x-10">
            {THEMES.map(([title, detail], index) => (
              <li
                key={title}
                className="grid min-w-0 grid-cols-[2.25rem_minmax(0,1fr)] gap-3 border-b border-border py-6"
              >
                <span className="pt-0.5 text-sm font-medium text-primary" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[18px] leading-snug font-medium">{title}</h3>
                  <p className="mt-1 text-[16px] leading-relaxed text-card-foreground">{detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>


      {/* About the host */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[40%_1fr] md:items-start">
          <div>
            <img
              src={hostPhotoAsset.url}
              alt="Portrait of Abeer Raza, host of Built to Care"
              width={800}
              height={800}
              loading="lazy"
              className="mx-auto aspect-square w-[220px] rounded-full object-cover ring-4 ring-border sm:w-[300px] md:mx-0 md:w-full md:max-w-[340px]"
            />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-[26px] tracking-[-0.01em] sm:text-[30px]">Abeer Raza</h2>
              <a
                href="https://www.linkedin.com/in/abeerraza/"
                aria-label="Abeer Raza on LinkedIn"
                className="inline-flex text-primary transition-colors hover:text-primary-hover"
                target="_blank"
                rel="noopener"
              >
                <Linkedin size={22} strokeWidth={1.75} />
              </a>
            </div>
            <p className="mt-1 text-muted-foreground">Host, Built to Care</p>
            <div className="measure mt-6 space-y-4 text-card-foreground">
              <p>
                Abeer is a serial entrepreneur, keynote speaker, and growth advisor who
                writes on entrepreneurship and leadership for Entrepreneur and Forbes.
              </p>
              <p>
                He came to home-based care with the instinct to look at a business
                problem and ask what could solve it. But most of the painful parts of
                running an agency already have something handling them. Whether that
                makes it a technology problem or a systems problem is the question he
                keeps circling.
              </p>
              <p>
                He hosts every episode. The format is deliberately simple: one guest,
                forty minutes, and questions about the business of running an agency —
                asked by someone still working out the answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* One question */}
      <section className="bg-tint py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-[26px] tracking-[-0.01em] sm:text-[30px]">
            One question, if you run an agency
          </h2>
          <p className="measure mx-auto mt-4 text-card-foreground">
            What's the one part of running your agency that is still far more painful
            and manual than it has any right to be?
          </p>
          {/* TODO: point this at Abeer's email (mailto:) once confirmed; LinkedIn is
              the interim destination. */}
          <p className="mt-6">
            <a
              href="https://www.linkedin.com/in/abeerraza/"
              className="text-primary underline-offset-4 hover:text-primary-hover hover:underline"
              target="_blank"
              rel="noopener"
            >
              Tell Abeer
            </a>
          </p>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-12">
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            Built to Care · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </main>
  );
}
