import { SECTION_CLASS } from "../constants";

export default function () {
  const yearsExperience = Math.max(6, new Date().getFullYear() - 2020);

  return (
    <section id="about" className={SECTION_CLASS}>
      <div className="container mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl text-ink leading-tight tracking-tight md:text-6xl">
              Tentang Kami
            </h2>
            <p className="mt-4 text-lg text-muted">
              Maggot BSF Balikpapan adalah usaha yang bergerak dalam budidaya
              black soldier fly untuk mengolah limbah organik menjadi pakan
              hewan berkualitas tinggi.
            </p>
            <p className="mt-4 text-lg text-muted">
              Kami berkomitmen memberikan solusi berkelanjutan bagi pengelolaan
              limbah organik sekaligus menyediakan alternatif pakan ternak yang
              ekonomis dan bernutrisi tinggi.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 border-deep border-l-2 pl-4">
              <span className="tabular font-display text-3xl text-deep leading-none">
                {yearsExperience}+
              </span>
              <span className="text-lg text-muted">Tahun Pengalaman</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden border border-muted/20">
              <iframe
                title="GMaps: Maggot BSF Balikpapan"
                className="h-72 w-full md:h-80"
                src="https://maps.google.com/maps?hl=id&amp;q=+(Maggot%20BSF%20Balikpapan)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/collections/personal-trackers/">
                  GMaps: Maggot BSF Balikpapan
                </a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
