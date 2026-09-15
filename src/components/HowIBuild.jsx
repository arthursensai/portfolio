const steps = [
  {
    number: "01",
    title: "Understand",
    description: "I start with the problem, not the technology.",
  },
  {
    number: "02",
    title: "Design",
    description: "I think about data, architecture, and user flow.",
  },
  {
    number: "03",
    title: "Build",
    description: "I turn the idea into a working product.",
  },
  {
    number: "04",
    title: "Test",
    description: "I test the important paths instead of assuming they work.",
  },
  {
    number: "05",
    title: "Iterate",
    description: "I ship, learn, and improve.",
  },
];

const HowIBuild = () => {
  return (
    <section id="how-i-build" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-blue-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
              Process
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            How I Build
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="font-serif text-3xl text-blue-200">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIBuild;
