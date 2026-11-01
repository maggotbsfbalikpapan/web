import { Worm } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "../constants";

export default function () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-muted/20 border-b bg-paper text-ink">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between py-4 lg:py-5">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center bg-deep text-paper">
              <Worm className="h-5 w-5" />
            </div>
            <div>
              <span className="font-display text-xl tracking-tight lg:text-2xl">
                Maggot BSF
              </span>
              <p className="hidden text-muted text-sm sm:block">Balikpapan</p>
            </div>
          </a>

          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center border border-muted/30 transition-all hover:bg-muted/10 focus-visible:outline-2 focus-visible:outline-deep focus-visible:outline-offset-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative h-5 w-5">
              <span
                aria-hidden="true"
                className={`-translate-x-1/2 absolute top-0 left-1/2 h-0.5 w-4 transform bg-ink transition-all duration-300 ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                aria-hidden="true"
                className={`-translate-x-1/2 absolute top-2 left-1/2 h-0.5 w-4 transform bg-ink transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                aria-hidden="true"
                className={`-translate-x-1/2 absolute top-4 left-1/2 h-0.5 w-4 transform bg-ink transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {NAV_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-base text-muted transition-colors hover:text-ink"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#contact"
            className="hidden items-center gap-2.5 bg-signal px-5 py-2 font-bold text-paper text-xl transition-all hover:bg-deep lg:flex"
          >
            <span>Kontak</span>
            <svg
              viewBox="5 8 14 8"
              preserveAspectRatio="none"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-2 w-[14px] shrink-0 translate-y-[1px]"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </div>

        {isMenuOpen && (
          <nav className="pb-4 md:hidden">
            <div className="overflow-hidden border border-muted/20 bg-paper">
              <ul className="flex flex-col">
                {NAV_LINKS.map(({ id, label }, index, arr) => (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => {
                        setIsMenuOpen(false);
                        document
                          .getElementById(id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`w-full px-6 py-4 text-left text-base transition hover:bg-muted/10 ${
                        index < arr.length - 1 ? "border-muted/20 border-b" : ""
                      }`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
