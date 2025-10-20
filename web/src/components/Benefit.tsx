import { Leaf, Recycle, Worm } from "lucide-react";

export default function () {
  return (
    <section
      id="benefits"
      className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32"
    >
      <div className="container mx-auto animate-slide-up px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-black text-3xl text-gray-800 md:text-4xl lg:text-5xl">
            Manfaat Maggot BSF
          </h2>
          <div className="mx-auto h-2 w-24 rounded-full bg-gradient-to-r from-green-500 to-green-600" />
          <p className="mx-auto mt-6 max-w-3xl text-gray-600 text-lg leading-relaxed md:text-xl">
            Maggot BSF menawarkan berbagai keunggulan dalam pengelolaan limbah
            organik dan produksi pakan berkualitas tinggi
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group hover:-translate-y-2 relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-green-100 to-green-200 p-4 transition-transform group-hover:scale-110">
                <Recycle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-4 font-bold text-gray-800 text-xl md:text-2xl">
                Pengelolaan Limbah
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mengurangi limbah organik melalui konsumsi cepat larva BSF,
                mengubah sampah menjadi sumber daya bernilai tinggi.
              </p>
            </div>
          </div>

          <div className="group hover:-translate-y-2 relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-green-100 to-green-200 p-4 transition-transform group-hover:scale-110">
                <Worm className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-4 font-bold text-gray-800 text-xl md:text-2xl">
                Pakan Berkualitas
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Larva BSF kaya protein dan lemak esensial, ideal untuk pakan
                unggas, ikan, dan hewan ternak lainnya.
              </p>
            </div>
          </div>

          <div className="group hover:-translate-y-2 relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all hover:shadow-2xl md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-green-100 to-green-200 p-4 transition-transform group-hover:scale-110">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-4 font-bold text-gray-800 text-xl md:text-2xl">
                Ramah Lingkungan
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Proses budidaya BSF minim emisi dan mengurangi dampak lingkungan
                dari pengelolaan limbah konvensional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
