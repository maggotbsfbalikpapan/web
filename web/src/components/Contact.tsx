import { SiInstagram } from "@icons-pack/react-simple-icons";
import { MapPin, Phone, Send } from "lucide-react";
import { type SyntheticEvent, useState } from "react";

export default function () {
  const whatsappURI = "https://api.whatsapp.com/send?phone=6281325595775&text=";

  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleSubmit = (e: unknown) => {
    (e as SyntheticEvent<HTMLElement>).preventDefault();

    setFormData({ name: "", message: "" });

    const win = window.open(
      encodeURI(
        `${whatsappURI}Hallo, saya ${formData.name}, saya menemukan nomor Bapak dari website maggotbsfbalikpapan.com\n\n${formData.message}`,
      ),
    );
    win?.focus();
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl text-gray-800 md:text-4xl">
            Kontak Kami
          </h2>
          <div className="mx-auto h-1 w-24 bg-green-600" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-lg">
            Tertarik dengan produk kami atau memiliki pertanyaan? Jangan ragu
            untuk menghubungi kami
          </p>
        </div>

        <div className="mx-auto max-w-4xl px-4 md:px-0">
          <div className="overflow-hidden rounded-xl bg-white shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-green-600 p-6 text-white md:p-8">
                <h3 className="mb-6 font-bold text-xl md:text-2xl">
                  Informasi Kontak
                </h3>

                <div className="space-y-4 md:space-y-6">
                  <address className="not-italic">
                    <a
                      className="flex items-center gap-4 rounded-md p-3 transition-colors hover:bg-green-500"
                      href={`${whatsappURI}${encodeURI("Hallo, saya menemukan nomor Bapak dari website maggotbsfbalikpapan.com, saya ingin bertanya terkait ")}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex-shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-sm md:text-base">
                          Telepon
                        </p>
                        <p className="break-words text-green-100 text-sm underline md:text-base lg:no-underline">
                          +62 813-2559-5775
                        </p>
                      </div>
                    </a>

                    <a
                      className="flex items-center gap-4 rounded-md p-3 transition-colors hover:bg-green-500"
                      href="https://www.instagram.com/maggotbsfbalikpapan"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex-shrink-0">
                        <SiInstagram className="h-6 w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-sm md:text-base">
                          Instagram
                        </p>
                        <p className="break-words text-green-100 text-sm underline md:text-base lg:no-underline">
                          @maggotbsfbalikpapan
                        </p>
                      </div>
                    </a>

                    <a
                      className="flex items-center gap-4 rounded-md p-3 transition-colors hover:bg-green-500"
                      href="https://maps.app.goo.gl/1kZe5HmQXoSHX3ZKA"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex-shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-sm md:text-base">
                          Alamat
                        </p>
                        <p className="break-words text-green-100 text-sm leading-relaxed underline md:text-base lg:no-underline">
                          Jl. Prapatan Dalam, Kelurahan Telaga Sari, RT 02, No.
                          62, Balikpapan Kota, Kalimantan Timur
                        </p>
                      </div>
                    </a>
                  </address>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-1 block font-medium text-gray-700 text-sm"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Nama Anda"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1 block font-medium text-gray-700 text-sm"
                    >
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                      rows={4}
                      placeholder="Tulis pesan Anda..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 font-medium text-white transition hover:bg-green-700"
                    aria-label="Kirim pesan"
                  >
                    <Send className="h-4 w-4" /> Kirim Pesan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
