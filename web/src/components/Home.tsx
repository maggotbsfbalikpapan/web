import { WHATSAPP_BASE } from "../constants";

export default function () {
  const defaultText =
    "Hallo, saya menemukan nomor Bapak dari website maggotbsfbalikpapan.com, saya ingin bertanya terkait ";
  const whatsappUrl = `${WHATSAPP_BASE}${encodeURIComponent(defaultText)}`;

  return (
    <section id="home" className="bg-paper pt-12 pb-10 md:pt-14 md:pb-12">
      <div className="container mx-auto px-6">
        <h1 className="text-balance font-display text-5xl text-ink leading-[1.05] tracking-tight md:text-6xl">
          Biokonversi limbah organik jadi pakan berkualitas
        </h1>
        <p className="mt-4 max-w-2xl text-muted text-xl leading-relaxed">
          Kami mengolah limbah organik menjadi pakan ternak dan ikan berkualitas
          tinggi. Hubungi kami untuk konsultasi dan pemesanan.
        </p>
        <div className="mt-5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-signal px-8 py-4 font-bold text-paper text-xl transition-colors hover:bg-deep"
          >
            Chat WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
