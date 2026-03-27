export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Full-bleed gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-electric via-violet to-indigo-electric bg-200 animate-gradient-shift"></div>
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-display font-display font-bold mb-6 text-white">
          Ready to Build the Future?
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Join the Renaissance. Let autonomous intelligence transform your operations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#"
            className="px-8 py-4 rounded-lg bg-white text-indigo-electric font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all inline-block"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-md text-white font-semibold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all inline-block"
          >
            Download eBook
          </a>
          <a
            href="#"
            className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-md text-white font-semibold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all inline-block"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
