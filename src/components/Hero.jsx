import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const heroBg = '/hero_cakes_banner.jpg';

export default function Hero() {
  const scroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Artisan cakes flat lay"
          className="w-full h-full object-cover object-center"
        />
        {/* Layered overlays for that warm, editorial feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3d1c0e]/70 via-[#3d1c0e]/50 to-[#2a1208]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3d1c0e]/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Badge pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#c9973d]/60 bg-[#c9973d]/10 backdrop-blur-sm text-[#e8c070] text-xs font-semibold tracking-widest uppercase">
            ✦ &nbsp; Home Bakery · Saint John, NB, Canada &nbsp; ✦
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Crafted with Love,
          <br />
          <em className="text-[#e8c070]">Tasted in Every Bite</em>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Artisan cakes, marshmallow flowers & bento delights — made fresh just for you.
          Available in Bento (~450g), 1 kg, 1.5 kg & 2+ kg sizes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button
            id="hero-browse-btn"
            onClick={() => scroll('#menu')}
            className="group px-8 py-4 rounded-full bg-[#d4614e] text-white font-semibold text-base sm:text-lg shadow-xl shadow-[#d4614e]/40 hover:bg-[#b84c3a] hover:shadow-[#b84c3a]/50 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Browse Menu
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button
            id="hero-order-btn"
            onClick={() => scroll('#order')}
            className="px-8 py-4 rounded-full border-2 border-white/60 text-white font-semibold text-base sm:text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Order a Cake 🎂
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-10"
        >
          {[
            { num: '6+', label: 'Signature Flavours' },
            { num: '4', label: 'Size Options' },
            { num: '🚚', label: 'Local Delivery' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold text-[#e8c070]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {s.num}
              </div>
              <div className="text-xs text-white/60 uppercase tracking-widest mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scroll('#menu')}
        id="hero-scroll-btn"
        aria-label="Scroll to menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-white/90 transition-colors group"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
