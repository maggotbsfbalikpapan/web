import { NAV_LINKS } from "../constants";

export default function () {
  return (
    <footer className="border-muted/20 border-t bg-paper py-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-2 md:hidden">
          <ul className="flex justify-center gap-4 text-muted text-sm">
            {NAV_LINKS.slice(0, 2).map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-deep">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex justify-center gap-4 text-muted text-sm">
            {NAV_LINKS.slice(2).map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-deep">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center justify-between gap-4 md:flex">
          <ul className="flex gap-4 text-muted text-sm">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-deep">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="text-muted text-sm">
            <p>© {new Date().getFullYear()} Maggot BSF Balikpapan</p>
            <p>Powered by KKN D1 Institut Teknologi Kalimantan</p>
          </div>
        </div>

        <div className="mt-3 text-center text-muted text-sm md:hidden">
          <p>© {new Date().getFullYear()} Maggot BSF Balikpapan</p>
          <p>Powered by KKN D1 Institut Teknologi Kalimantan</p>
        </div>
      </div>
    </footer>
  );
}
