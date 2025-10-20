export default function () {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <iframe
            title="GMaps: Maggot BSF Balikpapan"
            className="mx-auto h-80 w-full max-w-2xl rounded-lg border-2 border-green-600 md:h-96"
            src="https://maps.google.com/maps?hl=en&amp;q=+(Maggot%20BSF%20Balikpapan)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/collections/personal-trackers/">
              GMaps: Maggot BSF Balikpapan
            </a>
          </iframe>

          <div className="mt-12 md:mt-0 md:w-1/2">
            <h2 className="mb-4 font-bold text-3xl text-gray-800 md:text-4xl">
              Tentang Kami
            </h2>
            <div className="mb-6 h-1 w-16 bg-green-600" />
            <p className="mb-4 text-gray-600 text-lg">
              Maggot BSF Balikpapan adalah usaha yang bergerak dalam budidaya
              black soldier fly untuk mengolah limbah organik menjadi pakan
              hewan berkualitas tinggi.
            </p>
            <p className="mb-6 text-gray-600 text-lg">
              Kami berkomitmen untuk memberikan solusi berkelanjutan bagi
              pengelolaan limbah organik sekaligus menyediakan alternatif pakan
              ternak yang ekonomis dan bernutrisi tinggi.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="text-center">
                <div className="font-bold text-3xl text-green-600">2+</div>
                <div className="text-gray-500">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-3xl text-green-600">500+</div>
                <div className="text-gray-500">Pelanggan Puas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
