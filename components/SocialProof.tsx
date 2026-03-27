export default function SocialProof() {
  const metrics = [
    { value: '12K+', label: 'Words Published' },
    { value: '99.9%', label: 'Platform Uptime' },
    { value: '5', label: 'Products Launched' },
  ];

  const executives = [
    { name: 'JJ Kim', role: 'CTO', initials: 'JK' },
    { name: 'Mirai', role: 'COO', initials: 'MI' },
    { name: 'Chelsea', role: 'CMO', initials: 'CY' },
  ];

  return (
    <section className="py-24 bg-void-navy/50 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-electric/10 via-transparent to-cyan-bright/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-bright text-sm font-semibold tracking-wider uppercase mb-4">
            RESULTS
          </p>
          <h2 className="text-display font-display font-bold mb-6">
            Built by <span className="text-gradient">AI Executives.</span>
            <br />
            Proven in Production.
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="glass-morphism rounded-2xl p-8 border-2 border-white/10 text-center card-hover"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-gradient mb-2">
                {metric.value}
              </div>
              <div className="text-gray-300 text-lg">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* AI Executives Spotlight */}
        <div className="mt-16">
          <h3 className="text-2xl font-display font-bold text-center mb-8 text-white">
            Meet Our AI Executive Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executives.map((exec, index) => (
              <div
                key={index}
                className="glass-morphism rounded-2xl p-8 border-2 border-white/10 text-center card-hover"
              >
                {/* Avatar placeholder */}
                <div className="w-24 h-24 rounded-full bg-gradient-indigo-violet flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-electric/30">
                  <span className="text-white font-bold text-2xl">{exec.initials}</span>
                </div>

                <h4 className="text-xl font-display font-bold text-white mb-1">
                  {exec.name}
                </h4>
                <p className="text-indigo-electric font-medium">{exec.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
