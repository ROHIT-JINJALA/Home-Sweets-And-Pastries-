import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { galleryImages } from '../data';

export default function Gallery() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const thumbsRef = useRef(null);

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = galleryImages.length;

  const go = useCallback((idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent((idx + total) % total);
  }, [current, total]);

  const prev = () => go(current - 1);
  const next = () => go(current + 1);

  // Scroll ONLY the thumbnail strip horizontally — never scrolls the page window
  useEffect(() => {
    const container = thumbsRef.current;
    if (!container) return;
    const activeEl = container.children[current];
    if (activeEl) {
      const targetLeft =
        activeEl.offsetLeft - container.offsetWidth / 2 + activeEl.offsetWidth / 2;
      container.scrollTo({
        left: targetLeft,
        behavior: 'smooth',
      });
    }
  }, [current]);

  // Auto-play
  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % total);
    }, 4500);
    return () => clearInterval(id);
  }, [total]);

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  // Visible slides (current - 1, current, current + 1 for desktop grid feel)
  const getIdx = (offset) => (current + offset + total) % total;

  return (
    <section id="gallery" className="py-24 bg-[#fdf6ee] overflow-hidden">
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
            Our Portfolio
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#6b3d2e] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            A Feast for the <em className="text-[#d4614e]">Eyes</em>
          </h2>
          <p className="text-[#6b3d2e]/70 max-w-xl mx-auto">
            Swipe through our gallery of handcrafted cakes, cake pops, marshmallow designs, and edible art.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative" id="gallery-carousel">
          {/* Main slide */}
          <div className="relative rounded-3xl overflow-hidden h-[380px] sm:h-[480px] md:h-[540px] shadow-2xl bg-[#3d2015]">
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="absolute inset-0 flex items-center justify-center overflow-hidden"
              >
                {/* Ambient blurred backdrop */}
                <img
                  src={galleryImages[current].src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-50 brightness-75 select-none"
                />

                {/* Sharp main image */}
                <img
                  src={galleryImages[current].src}
                  alt={galleryImages[current].alt}
                  className="relative z-10 max-h-full max-w-full object-contain p-2 sm:p-4 drop-shadow-xl"
                />

                {/* Caption bar */}
                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 sm:p-8">
                  <p
                    className="text-white text-xl sm:text-2xl font-semibold drop-shadow"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {galleryImages[current].caption}
                  </p>
                  <p className="text-amber-200/80 text-xs sm:text-sm mt-1 font-medium">
                    {current + 1} of {total} creations
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav buttons */}
            <button
              id="gallery-prev"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur hover:bg-white/40 text-white flex items-center justify-center transition-all hover:scale-110"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              id="gallery-next"
              onClick={next}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur hover:bg-white/40 text-white flex items-center justify-center transition-all hover:scale-110"
            >
              <FiChevronRight size={20} />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div
            ref={thumbsRef}
            className="mt-4 flex gap-2.5 overflow-x-auto pb-1 px-1 scroll-smooth no-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden transition-all duration-200 cursor-pointer ${i === current
                    ? 'ring-2 ring-[#d4614e] scale-105 shadow-md'
                    : 'opacity-50 hover:opacity-100'
                  }`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Dot indicators */}
          <div id="carousel-dots" className="flex justify-center gap-2 mt-5">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${i === current
                    ? 'w-6 h-2 bg-[#d4614e]'
                    : 'w-2 h-2 bg-[#d4614e]/30 hover:bg-[#d4614e]/60'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
