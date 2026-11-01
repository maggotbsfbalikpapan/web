export const NAV_LINKS = [
  { id: "home", label: "Beranda" },
  { id: "benefits", label: "Manfaat" },
  { id: "about", label: "Tentang" },
  { id: "education", label: "Edukasi" },
  { id: "contact", label: "Kontak" },
] as const;

export const WHATSAPP_PHONE = "6281325595775";
export const WHATSAPP_BASE = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=`;
export const SECTION_CLASS = "border-muted/20 border-t bg-paper py-12 md:py-14";
