import { Hammer, GraduationCap, TrendingUp, MapPin } from "lucide-react";

const items = [
  {
    icon: Hammer,
    label: "Building",
    value: "Waraq",
  },
  {
    icon: GraduationCap,
    label: "Learning",
    value: "AI / RAG / LLM applications",
  },
  {
    icon: TrendingUp,
    label: "Improving",
    value: "Software architecture, testing, production engineering",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Fès, Morocco",
  },
];

const Currently = () => {
  return (
    <section id="currently" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-blue-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
              Right Now
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            Currently
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Icon size={18} />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                {label}
              </div>
              <p className="text-gray-800 font-medium leading-snug">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Currently;
