import { Link } from '@tanstack/react-router';

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center  px-6 py-5">
        <Link to="/" aria-label="Built to Care home" className="shrink-0">
          <img src="/built-to-care-logo.png" alt="Built to Care" width={120} height={63} className="h-auto w-[100px] sm:w-[120px]" />
        </Link>
      </div>
    </header>
  );
}