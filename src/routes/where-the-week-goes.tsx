import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { calculateWeek, DEFAULT_INPUTS, TASKS, validNumber, type WeekInputs } from '@/lib/week-calculator';

const TITLE = 'Where the week goes — Built to Care';
const DESCRIPTION = 'Work out what manual admin actually costs your home care agency — scheduling, authorizations, EVV exceptions, claims and documentation, converted into hours and dollars a year.';
const ARTWORK = 'https://built-to-care-site.lovable.app/built-to-care-logo.png';
const whole = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
const number = new Intl.NumberFormat('en-US', { maximumFractionDigits: 10 });
const dollars = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export const Route = createFileRoute('/where-the-week-goes')({
  component: WeekCalculator,
  head: () => ({
    meta: [
      { title: TITLE }, { name: 'description', content: DESCRIPTION },
      { property: 'og:title', content: TITLE }, { property: 'og:description', content: DESCRIPTION },
      { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'og:image', content: ARTWORK }, { name: 'twitter:image', content: ARTWORK },
    ],
  }),
});

function WeekCalculator() {
  const [inputs, setInputs] = useState<WeekInputs>(DEFAULT_INPUTS);
  const result = calculateWeek(inputs);
  const largestHours = result.breakdown[0]?.hours ?? 0;
  function update(id: keyof WeekInputs, value: string) {
    setInputs(current => ({ ...current, [id]: value }));
  }

  return (
    <>
      <main className="week-calculator mx-auto max-w-[728px] px-6 pt-14 pb-16 sm:pt-20">
        <h1 className="font-display text-[36px] leading-tight font-light sm:text-[48px]">Where the week goes</h1>
        <p className="mt-6">Referrals arrive, caregivers need scheduling, authorizations need tracking, visits need verifying, and claims need to turn into cash. Almost none of it shows up as a line on the P&amp;L. This works out what it costs you.</p>

        <section className="mt-[52px]" aria-labelledby="office-heading">
          <h2 id="office-heading" className="font-display text-[26px] font-normal sm:text-[30px]">Your office week</h2>
          <p className="mt-3 border-b border-border pb-6 text-[14px] text-muted-foreground">Hours a week your whole office spends on each, added up across everyone. The figures below are a starting point from a typical mid-size agency, not your numbers — drag each one to match.</p>
          {TASKS.map(task => (
            <div key={task.id} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-5 border-b border-border py-6">
              <div className="min-w-0">
                <label htmlFor={`${task.id}-hours`} className="text-[15px] font-semibold text-foreground sm:text-[16px]">{task.label}</label>
                <p id={`${task.id}-description`} className="mt-1 text-[13px] text-muted-foreground">{task.description}</p>
              </div>
              <div className="flex items-baseline gap-2">
                <input id={`${task.id}-hours`} type="number" min="0" step="1" inputMode="decimal" value={inputs[task.id]} onChange={event => update(task.id, event.target.value)} aria-describedby={`${task.id}-description`} className="week-number w-[64px]" />
                <span className="text-[12px] text-muted-foreground">hrs</span>
              </div>
              <input type="range" min="0" max="40" step="1" value={Math.min(validNumber(inputs[task.id]), 40)} onChange={event => update(task.id, event.target.value)} aria-label={`${task.label} hours slider`} aria-describedby={`${task.id}-description`} className="week-slider col-span-2 w-full" />
            </div>
          ))}
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border py-7">
            <div>
              <label htmlFor="hourly-rate" className="text-[15px] font-semibold text-foreground sm:text-[16px]">Loaded hourly cost of office staff</label>
              <p id="rate-description" className="mt-1 text-[13px] text-muted-foreground">Wage plus payroll taxes and benefits</p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-muted-foreground">$</span>
              <input id="hourly-rate" type="number" min="0" step="any" inputMode="decimal" value={inputs.hourlyRate} onChange={event => update('hourlyRate', event.target.value)} aria-describedby="rate-description" className="week-number w-[64px]" />
              <span className="text-[12px] text-muted-foreground">/hr</span>
            </div>
          </div>
        </section>

        <section className="mt-[52px] rounded-[14px] bg-tint px-6 py-9 text-center sm:px-10 sm:py-10" aria-live="polite" aria-atomic="true" aria-label="Annual admin cost">
          <p className="text-[14px] text-muted-foreground">Manual admin work costs you</p>
          <p className="week-total mt-2 font-display font-light text-foreground">{dollars.format(result.annualCost)}</p>
          <p className="text-[14px] text-muted-foreground">a year</p>
          <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-5 border-t border-border pt-6 sm:gap-x-10">
            {[
              [whole.format(result.annualHours), 'hours a year'],
              [result.fte.toFixed(1), 'full-time office staff'],
              [number.format(result.weeklyHours), 'hours a week'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-[25px] text-foreground">{value}</p>
                <p className="text-[12px] text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[14px]">{result.sentence}</p>
        </section>

        <section className="mt-[52px]" aria-labelledby="breakdown-heading">
          <h2 id="breakdown-heading" className="font-display text-[26px] sm:text-[30px]">What it splits into</h2>
          <ol className="mt-5">
            {result.breakdown.map(task => (
              <li key={task.id} className="border-b border-border py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[14px]">
                  <span className="text-foreground">{task.label}</span>
                  <span className="shrink-0 text-[12px] text-muted-foreground">{number.format(task.hours)} hrs · {result.weeklyHours ? Math.round(task.hours / result.weeklyHours * 100) : 0}%</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-[4px] bg-pill" aria-hidden="true">
                  <div className="week-bar h-full rounded-[4px] bg-primary" style={{ width: `${largestHours ? task.hours / largestHours * 100 : 0}%` }} />
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <footer className="mx-auto max-w-6xl px-6 py-12"><div className="border-t border-border pt-8"><p className="text-sm text-muted-foreground">Built to Care · © {new Date().getFullYear()}</p></div></footer>
    </>
  );
}