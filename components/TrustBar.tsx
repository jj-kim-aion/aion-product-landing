export default function TrustBar() {
  const logos = [
    'Enterprise A',
    'Enterprise B',
    'Enterprise C',
    'Enterprise D',
    'Enterprise E',
    'Enterprise F',
  ];

  return (
    <section className="py-12 bg-void-navy/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-sm mb-8">
          Trusted by leading enterprises
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-16 flex items-center justify-center bg-white/5 rounded-lg border border-white/10 hover:border-indigo-electric/50 transition-colors"
            >
              <span className="text-gray-500 font-medium text-sm">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
