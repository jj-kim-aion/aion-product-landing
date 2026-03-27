import ProductCard from './ProductCard';

export default function ProductGrid() {
  const products = [
    {
      title: 'Agent OS Platform',
      description: 'Enterprise-grade agentic operating system. Deploy autonomous AI agents that execute complex workflows, integrate with your stack, and scale operations without limits.',
      featured: true,
    },
    {
      title: 'Strategic Intelligence Platform',
      description: 'AI decision support for C-suite executives. Real-time analytics, market intelligence, and strategic recommendations powered by autonomous agents.',
      featured: false,
    },
    {
      title: 'Customer Success Platform',
      description: 'Retention and expansion automation. Proactive customer intelligence, churn prediction, and automated expansion opportunities.',
      featured: false,
    },
    {
      title: 'Building Super Agents eBook',
      description: '12,000+ words of battle-tested patterns, frameworks, and strategies for building production-grade AI agent systems.',
      featured: false,
    },
    {
      title: 'Digital Products',
      description: 'Skills, certifications, and quick-start packages. Everything you need to deploy autonomous intelligence in your organization.',
      featured: false,
    },
  ];

  return (
    <section id="products" className="py-24 bg-void-navy/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-bright text-sm font-semibold tracking-wider uppercase mb-4">
            OUR PRODUCTS
          </p>
          <h2 className="text-display font-display font-bold mb-6">
            Complete Platform <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From enterprise platforms to educational resources — everything you need to build, deploy, and scale autonomous intelligence.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              featured={product.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
