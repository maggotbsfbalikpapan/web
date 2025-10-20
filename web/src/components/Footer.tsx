import { Worm } from "lucide-react";

export default function () {
  return (
    <footer className="bg-gradient-to-br from-green-800 via-green-900 to-green-950 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                <Worm className="h-7 w-7" />
              </div>
              <div>
                <span className="font-bold text-2xl">Maggot BSF</span>
                <p className="text-green-200 text-sm">Balikpapan</p>
              </div>
            </div>
            <p className="mb-6 max-w-md text-green-100 text-lg leading-relaxed">
              Solusi Biokonversi Limbah Organik Menjadi Pakan Berkualitas Tinggi
              untuk Ternak dan Perikanan
            </p>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-lg">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-green-100 transition-colors hover:text-white"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-green-100 transition-colors hover:text-white"
                >
                  Manfaat
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-green-100 transition-colors hover:text-white"
                >
                  Edukasi
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-green-100 transition-colors hover:text-white"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-green-100 transition-colors hover:text-white"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-lg">Informasi</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-green-100">Jam Operasional</p>
                <p className="text-green-200 text-sm">
                  Setiap hari: 06.00 - 00.00
                </p>
              </div>
              <div>
                <p className="font-medium text-green-100">Lokasi</p>
                <p className="text-green-200 text-sm">
                  Balikpapan, Kalimantan Timur
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-green-700/50 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-green-200 text-sm">
              © {new Date().getFullYear()} Maggot BSF Balikpapan. All rights
              reserved.
            </p>
            <p className="text-green-300 text-sm">
              Powered by KKN D1 Institut Teknologi Kalimantan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
