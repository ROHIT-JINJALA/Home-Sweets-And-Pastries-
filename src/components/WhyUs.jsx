import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { whyItems } from '../data';

export default function WhyUs() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 bg-[#6b3d2e] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#c9973d]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#d4614e]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#c9973d]/20 text-[#e8c070] text-xs font-semibold uppercase tracking-widest mb-4">
            Why Home Sweets
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            The Sweet <em className="text-[#e8c070]">Difference</em>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyItems.map((item, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: '-60px' });
            return (
              <motion.div
                key={item.id}
                id={`why-${item.id}`}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="group p-7 rounded-3xl bg-white/8 border border-white/10 hover:bg-white/14 hover:border-[#c9973d]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#c9973d]/20 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
