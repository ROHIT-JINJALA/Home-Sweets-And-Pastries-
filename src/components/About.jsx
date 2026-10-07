import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ownerImg = '/image_copy_20.png';

const highlights = [
  { icon: '🍰', title: 'Made to Order', desc: 'Every cake freshly baked just for you' },
  { icon: '🌿', title: 'Premium Ingredients', desc: 'Real butter, imported chocolate, fresh cream' },
  { icon: '🎨', title: 'Custom Designs', desc: 'Tailored to your theme, palette & occasion' },
];

export default function About() {
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { once: true, margin: '-80px' });
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true, margin: '-80px' });

  const scroll = () => {
    const el = document.querySelector('#order');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 bg-[#f5e9d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image column */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -50 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#e8c070]/30 to-[#d4614e]/20 blur-xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src={ownerImg}
                alt="Badya — Baker & Owner of Home Sweets"
                className="w-full h-full object-cover object-top"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3d1c0e]/50 via-transparent to-transparent" />
            </div>

            {/* Floating name card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={imgInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-5 -right-4 sm:-right-8 bg-white rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3"
            >
              <span className="text-3xl">👩🏻‍🍳</span>
              <div>
                <div className="font-bold text-[#6b3d2e] text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Badya
                </div>
                <div className="text-xs text-[#a0614e]">Baker & Owner</div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={imgInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -top-4 -left-4 sm:-left-8 bg-[#d4614e] text-white rounded-2xl px-4 py-3 shadow-lg text-xs font-semibold max-w-[160px] text-center"
            >
              🌸 Marshmallow Flowers & Edible Bouquets
            </motion.div>
          </motion.div>

          {/* Text column */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: 50 }}
            animate={textInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#e8c070]/40 text-[#8b5e2a] text-xs font-semibold uppercase tracking-widest mb-5">
              Our Story
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#6b3d2e] mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              A Kitchen Full of <em className="text-[#d4614e]">Sweet Passion</em>
            </h2>
            <div className="space-y-4 text-[#6b3d2e]/80 leading-relaxed text-base">
              <p>
                Hi, I'm <strong className="text-[#6b3d2e]">Badya</strong> 👩🏻‍🍳 — the heart and
                hands behind Home Sweets. What began as a love for baking in my own kitchen has
                blossomed into a little corner of sweetness right here in Saint John, NB 🇨🇦.
              </p>
              <p>
                Every cake is crafted from scratch using premium ingredients — real butter, fresh
                cream, imported chocolate. Each order receives my personal attention: from the
                first consultation to the final ribbon on the box.
              </p>
              <p>
                I believe desserts are more than food. They are milestones — birthdays,
                anniversaries, gender reveals, everyday joy. My mission is to make each one
                unforgettable.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 space-y-4">
              {highlights.map((h) => (
                <div key={h.title} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#e8c070]/30 flex items-center justify-center text-2xl flex-shrink-0">
                    {h.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-[#6b3d2e] text-sm">{h.title}</div>
                    <div className="text-[#a0614e] text-xs">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              id="about-order-btn"
              onClick={scroll}
              className="mt-10 px-8 py-3.5 rounded-full bg-[#d4614e] text-white font-semibold hover:bg-[#b84c3a] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#d4614e]/30"
            >
              Place a Custom Order →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
