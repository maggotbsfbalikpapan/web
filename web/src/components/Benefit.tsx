import { Leaf, Recycle, Worm } from "lucide-react";
import { SECTION_CLASS } from "../constants";

export default function () {
  const items = [
    {
      icon: Recycle,
      title: "Pengelolaan Limbah",
      desc: "Larva BSF mengonsumsi limbah organik dengan cepat, mengubah sampah menjadi sumber daya bernilai tinggi.",
    },
    {
      icon: Worm,
      title: "Pakan Berkualitas",
      desc: "Larva kaya protein dan lemak esensial, ideal untuk pakan unggas, ikan, dan hewan ternak.",
    },
    {
      icon: Leaf,
      title: "Ramah Lingkungan",
      desc: "Proses budidaya minim emisi dan mengurangi dampak pengelolaan limbah konvensional.",
    },
  ];

  return (
    <section id="benefits" className={SECTION_CLASS}>
      <div className="container mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-5xl text-ink leading-tight tracking-tight md:text-6xl">
              Manfaat
              <br />
              Maggot BSF
            </h2>
            <p className="mt-4 text-lg text-muted">
              Keunggulan dalam pengelolaan limbah organik dan produksi pakan
              berkualitas tinggi.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-muted/20 border-muted/20 border-y">
              {items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="grid gap-x-4 gap-y-2 py-4 md:grid-cols-12"
                  >
                    <div className="md:col-span-1">
                      <span className="tabular font-display text-3xl text-deep">
                        0{index + 1}
                      </span>
                    </div>
                    <div className="md:col-span-5">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-deep" />
                        <h3 className="font-display text-2xl text-ink">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg text-muted md:col-span-6">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
