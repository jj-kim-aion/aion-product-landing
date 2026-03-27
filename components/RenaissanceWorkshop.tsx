'use client';

export default function RenaissanceWorkshop() {
  const forces = [
    { name: 'Agency', description: 'Strategic consulting' },
    { name: 'Agent OS', description: 'Platform technology' },
    { name: 'AI Execs', description: 'Autonomous leadership' },
    { name: 'Media', description: 'Content & distribution' },
    { name: 'Intellectual Work', description: 'Research & IP' },
  ];

  return (
    <section className="py-24 bg-void-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-navy/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-electric text-sm font-semibold tracking-wider uppercase mb-4">
            OUR MODEL
          </p>
          <h2 className="text-display font-display font-bold mb-6">
            Five Forces. <span className="text-gradient">One Mission.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are not a typical agency or SaaS. We're a Renaissance Workshop — a convergence of strategic thinking, technological innovation, and autonomous execution.
          </p>
        </div>

        {/* Orbital Diagram */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-32 h-32 rounded-full bg-gradient-indigo-violet flex items-center justify-center shadow-lg shadow-indigo-electric/50">
              <span className="text-white font-bold text-lg">AION</span>
            </div>
          </div>

          {/* Orbital Circles */}
          <div className="relative h-[600px] flex items-center justify-center">
            {forces.map((force, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180); // Pentagon layout
              const radius = 250;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    animationDelay: `${index * 0.6}s`,
                  }}
                >
                  <div className="group">
                    {/* Connection Line */}
                    <svg
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20"
                      width={Math.abs(x) * 2}
                      height={Math.abs(y) * 2}
                      style={{
                        transform: `translate(-50%, -50%) rotate(${(angle * 180) / Math.PI}deg)`,
                      }}
                    >
                      <line
                        x1="0"
                        y1="50%"
                        x2="100%"
                        y2="50%"
                        stroke="url(#gradient)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.5" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Force Card */}
                    <div className="w-40 h-40 rounded-2xl glass-morphism p-6 flex flex-col items-center justify-center text-center card-hover border-2 border-indigo-electric/20 group-hover:border-indigo-electric/50 transition-all">
                      <h3 className="font-display font-bold text-lg mb-2 text-white">
                        {force.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{force.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
