import { ChevronDown, Worm } from "lucide-react";
import { useState } from "react";

export default function () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-green-500/20 border-b bg-green-600/95 text-white shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between py-3 lg:py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
              <Worm className="h-5 w-5" />
            </div>
            <div>
              <span className="font-bold text-lg lg:text-xl">Maggot BSF</span>
              <p className="hidden text-green-100 text-xs sm:block">
                Balikpapan
              </p>
            </div>
          </div>

          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative h-5 w-5">
              <span
                className={`absolute left-1/2 top-0 h-0.5 w-4 bg-white transition-all duration-300 transform -translate-x-1/2 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`absolute left-1/2 top-2 h-0.5 w-4 bg-white transition-all duration-300 transform -translate-x-1/2 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-1/2 top-4 h-0.5 w-4 bg-white transition-all duration-300 transform -translate-x-1/2 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1 lg:space-x-2">
              <li>
                <a
                  href="#home"
                  className="relative rounded-lg px-4 py-2 font-medium text-sm transition-all hover:bg-white/10 hover:text-green-200 lg:text-base"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="relative rounded-lg px-4 py-2 font-medium text-sm transition-all hover:bg-white/10 hover:text-green-200 lg:text-base"
                >
                  Manfaat
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="relative rounded-lg px-4 py-2 font-medium text-sm transition-all hover:bg-white/10 hover:text-green-200 lg:text-base"
                >
                  Edukasi
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="relative rounded-lg px-4 py-2 font-medium text-sm transition-all hover:bg-white/10 hover:text-green-200 lg:text-base"
                >
                  Tentang
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="relative rounded-lg px-4 py-2 font-medium text-sm transition-all hover:bg-white/10 hover:text-green-200 lg:text-base"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </nav>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-gray-100/90 px-5 py-2 font-semibold text-gray-800 shadow-sm transition-all hover:scale-105 hover:bg-gray-200/90 lg:flex"
          >
            <span>Hubungi Kami</span>
            <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
          </a>
        </div>

        {isMenuOpen && (
          <nav className="slide-in-from-top-2 mt-4 animate-in pb-4 duration-300 md:hidden">
            <div className="overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm">
              <ul className="flex flex-col">
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      document
                        ?.getElementById("home")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full border-white/10 border-b px-6 py-4 text-left transition last:border-b-0 hover:bg-white/10"
                  >
                    Beranda
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      document
                        ?.getElementById("benefits")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full border-white/10 border-b px-6 py-4 text-left transition last:border-b-0 hover:bg-white/10"
                  >
                    Manfaat
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      document
                        ?.getElementById("education")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full border-white/10 border-b px-6 py-4 text-left transition last:border-b-0 hover:bg-white/10"
                  >
                    Edukasi
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      document
                        ?.getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full border-white/10 border-b px-6 py-4 text-left transition last:border-b-0 hover:bg-white/10"
                  >
                    Tentang
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      document
                        ?.getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full px-6 py-4 text-left transition hover:bg-white/10"
                  >
                    Kontak
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
