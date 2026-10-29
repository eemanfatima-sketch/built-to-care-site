import { Link } from '@tanstack/react-router';

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <Link to="/" aria-label="Built to Care home" className="shrink-0">
          <img src="/built-to-care-logo.png" alt="Built to Care" width={120} height={63} className="h-auto w-[100px] sm:w-[120px]" />
        </Link>
        <nav aria-label="Main navigation" className="text-right text-[15px]">
          <Link to="/where-the-week-goes" activeOptions={{ exact: true }} activeProps={{ className: 'text-primary underline underline-offset-8', 'aria-current': 'page' }} inactiveProps={{ className: 'text-card-foreground' }} className="transition-colors hover:text-primary">Where the week goes</Link>
        </nav>
      </div>
    </header>
  );
}