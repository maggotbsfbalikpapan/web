import { SiInstagram } from "@icons-pack/react-simple-icons";
import { MapPin, Phone } from "lucide-react";
import { type FormEvent, useState } from "react";
import { SECTION_CLASS, WHATSAPP_BASE } from "../constants";

export default function () {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = formData.name.trim();
    const message = formData.message.trim();
    if (!name || !message) return;

    const text = `Hallo, saya ${name}, saya menemukan nomor Bapak dari website maggotbsfbalikpapan.com\n\n${message}`;

    const link = document.createElement("a");
    link.href = `${WHATSAPP_BASE}${encodeURIComponent(text)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();

    setFormData({ name: "", message: "" });
  };

  return (
    <section id="contact" className={SECTION_CLASS}>
      <div className="container mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-5xl text-ink leading-tight tracking-tight md:text-6xl">
              Kontak Kami
            </h2>
            <p className="mt-4 text-lg text-muted">
              Tertarik dengan produk kami atau memiliki pertanyaan?
              <br />
              Hubungi langsung via WhatsApp.
            </p>
            <div className="mt-6 space-y-3 text-lg text-muted">
              <a
                href={`${WHATSAPP_BASE}${encodeURIComponent("Hallo, saya menemukan nomor Bapak dari website maggotbsfbalikpapan.com, saya ingin bertanya terkait ")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-deep"
              >
                <Phone className="mt-[4.5px] h-5 w-5" /> +62 813-2559-5775
              </a>
              <a
                href="https://www.instagram.com/maggotbsfbalikpapan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-deep"
              >
                <SiInstagram className="mt-[6.5px] h-5 w-5" />{" "}
                @maggotbsfbalikpapan
              </a>
              <a
                href="https://maps.app.goo.gl/1kZe5HmQXoSHX3ZKA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-deep"
              >
                <MapPin className="mt-[4.5px] h-5 w-5" /> Jl. Prapatan Dalam,
                <br />
                Kel. Telaga Sari RT 02 No. 62,
                <br />
                Balikpapan Kota, Kalimantan Timur
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 lg:flex lg:flex-col">
            <form
              onSubmit={handleSubmit}
              className="flex flex-1 flex-col space-y-4 lg:pt-[11px]"
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-1 block font-medium text-base text-ink"
                >
                  Nama Lengkap
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  maxLength={100}
                  className="w-full border border-muted/30 bg-paper px-4 py-3 text-ink focus:border-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-deep/50"
                  placeholder="Nama Anda"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-1 flex-col">
                <label
                  htmlFor="message"
                  className="mb-1 block font-medium text-base text-ink"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  required
                  maxLength={1000}
                  className="w-full flex-1 border border-muted/30 bg-paper px-4 py-3 text-ink focus:border-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-deep/50"
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
                className="w-full bg-signal px-4 py-3 font-bold text-paper text-xl transition-colors hover:bg-deep"
                aria-label="Kirim pesan"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
