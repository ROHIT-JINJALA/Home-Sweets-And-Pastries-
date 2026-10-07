import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cakes, sizes } from '../data';

function CakeCard({ cake, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const scroll = () => {
    const el = document.querySelector('#order');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.article
      ref={ref}
      id={`cake-${cake.id}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 4) * 0.1, ease: 'easeOut' }}
      className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-60 sm:h-56 overflow-hidden bg-[#f5e9d8]">
        <img
          src={cake.image}
          alt={cake.name}
          loading="lazy"
          className="w-full h-full object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge */}
        <span
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${cake.badgeColor} backdrop-blur-sm shadow-sm`}
        >
          {cake.badge}
        </span>
        {/* Gradient bottom */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="text-xl font-bold text-[#6b3d2e] mb-2"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {cake.name}
        </h3>
        <p className="text-sm text-[#6b3d2e]/70 leading-relaxed flex-1 mb-4">{cake.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs text-[#a0614e] bg-[#fdf6ee] px-3 py-1 rounded-full border border-[#e8c070]/40">
            {cake.tag}
          </span>
          <button
            onClick={scroll}
            className="text-sm font-semibold text-white bg-[#d4614e] hover:bg-[#b84c3a] px-4 py-1.5 rounded-full active:scale-95 transition-all shadow-sm"
          >
            Order
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Menu() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const sizeRef = useRef(null);
  const sizeInView = useInView(sizeRef, { once: true });

  return (
    <section id="menu" className="py-24 bg-[#fdf6ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#f5e0b0] text-[#8b5e2a] text-xs font-semibold uppercase tracking-widest mb-4">
            Our Specialties
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#6b3d2e] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Signature Cake Collection
          </h2>
          <p className="text-[#6b3d2e]/70 max-w-2xl mx-auto text-base sm:text-lg">
            Each cake is a labour of love — layered, filled, and decorated by hand.
            Available from ~450g bento to 2+ kg celebration cakes.
          </p>
        </motion.div>

        {/* Size guide */}
        <motion.div
          ref={sizeRef}
          initial={{ opacity: 0, y: 20 }}
          animate={sizeInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          {sizes.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center gap-1 px-6 py-4 rounded-2xl bg-white border border-[#e8c070]/40 shadow-sm min-w-[90px]"
            >
              <span className="text-2xl">{s.emoji}</span>
              <span className="text-sm font-semibold text-[#6b3d2e]">{s.name}</span>
              <span className="text-xs text-[#a0614e]">{s.weight}</span>
            </div>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cakes.map((cake, i) => (
            <CakeCard key={cake.id} cake={cake} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
