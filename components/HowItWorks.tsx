export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Read our comprehensive eBook, browse skills marketplace, and explore platform capabilities.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Book a consultation call. Get a custom roadmap aligned with your business objectives.',
    },
    {
      number: '03',
      title: 'Implement',
      description: 'Deploy Agent OS, integrate with your systems, and configure autonomous workflows.',
    },
    {
      number: '04',
      title: 'Scale',
      description: 'Expand capabilities, automate more processes, and drive measurable business growth.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-void-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-electric/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-electric text-sm font-semibold tracking-wider uppercase mb-4">
            THE JOURNEY
          </p>
          <h2 className="text-display font-display font-bold mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From discovery to deployment — a clear path to autonomous intelligence
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector lines (desktop only) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-electric via-cyan-bright to-violet opacity-30"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step card */}
              <div className="glass-morphism rounded-2xl p-8 border-2 border-white/10 hover:border-indigo-electric/50 transition-all card-hover h-full">
                {/* Number badge */}
                <div className="w-16 h-16 rounded-full bg-gradient-indigo-violet flex items-center justify-center mb-6 shadow-lg shadow-indigo-electric/30 relative z-10">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
