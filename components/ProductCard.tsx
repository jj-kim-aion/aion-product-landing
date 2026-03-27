interface ProductCardProps {
  title: string;
  description: string;
  featured?: boolean;
}

export default function ProductCard({ title, description, featured = false }: ProductCardProps) {
  return (
    <div
      className={`
        relative rounded-2xl glass-morphism p-8 border-2 border-white/10 
        card-hover group overflow-hidden
        ${featured ? 'md:col-span-2 lg:col-span-3' : ''}
      `}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-electric/10 to-cyan-bright/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

      {/* Content */}
      <div className="relative z-10">
        {featured && (
          <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-electric bg-indigo-electric/10 rounded-full mb-4 border border-indigo-electric/30">
            Featured Product
          </span>
        )}

        <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-gradient transition-all">
          {title}
        </h3>

        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

        <button className="px-6 py-3 rounded-lg bg-gradient-indigo-violet text-white font-medium button-glow text-sm">
          Learn More →
        </button>
      </div>

      {/* Image placeholder for featured product */}
      {featured && (
        <div className="mt-8 h-64 bg-gradient-to-br from-indigo-electric/20 to-cyan-bright/20 rounded-xl flex items-center justify-center border border-white/10">
          <span className="text-gray-500">Product Visual</span>
        </div>
      )}
    </div>
  );
}
