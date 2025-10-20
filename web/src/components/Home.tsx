export default function () {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800 pt-12 pb-20 md:pt-20 md:pb-32 lg:pt-24 lg:pb-40"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-white/10 blur-xl" />
        <div className="absolute top-40 right-20 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute bottom-20 left-1/3 h-24 w-24 rounded-full bg-white/10 blur-lg" />
        <div className="absolute right-1/4 bottom-40 h-36 w-36 rounded-full bg-white/5 blur-xl" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-96 w-96 rounded-full bg-gradient-to-r from-green-400/20 to-green-500/20 blur-3xl" />
      </div>

      <div className="container relative mx-auto animate-fade-in px-6">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h1 className="mb-6 font-black text-4xl leading-tight md:text-6xl lg:text-7xl">
            Maggot BSF
            <span className="block text-green-200">Balikpapan</span>
          </h1>
          <p className="mx-auto mb-12 max-w-3xl font-light text-green-100 text-lg leading-relaxed md:text-xl lg:text-2xl">
            Solusi Biokonversi Limbah Organik Menjadi Pakan Berkualitas Tinggi
            untuk Ternak dan Perikanan
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#benefits"
              className="group relative overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-green-700 text-lg transition-all hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Pelajari Lebih Lanjut</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-white/50 bg-transparent px-8 py-4 font-semibold text-lg text-white transition-all hover:scale-105 hover:border-white hover:bg-white/10"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>

      <div className="-translate-x-1/2 absolute bottom-8 left-1/2 animate-bounce-gentle">
        <svg
          className="h-6 w-6 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          role="img"
          aria-label="Scroll down"
        >
          <title>Scroll down</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
