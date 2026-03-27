'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background - Aurora Gradient Effect */}
      <div className="absolute inset-0 bg-void-black">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-electric/20 via-void-navy to-cyan-bright/10 animate-aurora"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-violet/20 via-transparent to-indigo-electric/20 animate-aurora" style={{ animationDelay: '2s' }}></div>
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in">
          {/* Eyebrow */}
          <p className="text-cyan-bright text-sm font-semibold tracking-wider uppercase mb-6">
            Renaissance Workshop Model
          </p>

          {/* Main Headline */}
          <h1 className="text-hero font-display font-extrabold mb-6">
            We Build <span className="text-gradient">Autonomous Intelligence</span>
            <br />
            That Builds Your Business
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Renaissance Workshop model — where AI agents, strategy, and craft converge to transform enterprise operations
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#products"
              className="px-8 py-4 rounded-lg bg-gradient-indigo-violet text-white font-semibold text-lg button-glow inline-block"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg glass-morphism text-white font-semibold text-lg hover:bg-white/10 transition-all inline-block"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
