import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#order' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#fdf6ee]/95 backdrop-blur-md shadow-md shadow-amber-100/60'
            : 'bg-transparent'
        }`}
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNav('#home')}
              className="flex items-center gap-2.5 group cursor-pointer"
              id="nav-logo"
              aria-label="Home Sweets Home"
            >
              <span className="text-2xl drop-shadow">🍰</span>
              <div className="flex flex-col leading-tight text-left">
                <span
                  className={`font-heading text-lg font-bold tracking-wide transition-colors ${
                    scrolled
                      ? 'text-[#6b3d2e] group-hover:text-[#c9973d]'
                      : 'text-white drop-shadow-md group-hover:text-[#e8c070]'
                  }`}
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  HOME SWEETS
                </span>
                <span
                  className={`text-[10px] uppercase tracking-widest hidden sm:block transition-colors ${
                    scrolled ? 'text-[#a0614e]/70' : 'text-white/80 drop-shadow-sm'
                  }`}
                >
                  In every sweet moment
                </span>
              </div>
            </button>

            {/* Desktop links */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className={`px-3.5 py-1.5 text-sm font-medium transition-all rounded-full cursor-pointer ${
                      scrolled
                        ? 'text-[#6b3d2e]/85 hover:text-[#c9973d] hover:bg-amber-50'
                        : 'text-white/95 drop-shadow-sm hover:text-[#e8c070] hover:bg-white/15'
                    }`}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li className="ml-3">
                <button
                  onClick={() => handleNav('#order')}
                  id="nav-order-btn"
                  className="px-5 py-2 rounded-full text-sm font-semibold bg-[#d4614e] text-white hover:bg-[#b84c3a] active:scale-95 transition-all shadow-md shadow-[#d4614e]/30 cursor-pointer"
                >
                  Order Now
                </button>
              </li>
            </ul>

            {/* Hamburger */}
            <button
              onClick={() => setOpen((p) => !p)}
              id="hamburger"
              aria-label="Toggle menu"
              aria-expanded={open}
              className={`lg:hidden p-2 rounded-full transition-colors cursor-pointer ${
                scrolled
                  ? 'hover:bg-amber-50 text-[#6b3d2e]'
                  : 'hover:bg-white/15 text-white drop-shadow'
              }`}
            >
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#fdf6ee]/97 backdrop-blur-lg flex flex-col"
            id="mobile-menu"
          >
            <div className="flex items-center justify-between px-6 h-16">
              <button onClick={() => handleNav('#home')} className="flex items-center gap-2">
                <span className="text-2xl">🍰</span>
                <span className="font-bold text-[#6b3d2e]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  HOME SWEETS
                </span>
              </button>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-amber-100 text-[#6b3d2e]"
                aria-label="Close menu"
              >
                <FiX size={24} />
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center flex-1 gap-2 px-6">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="w-full text-center"
                >
                  <button
                    onClick={() => handleNav(l.href)}
                    className="w-full py-3 text-xl font-medium text-[#6b3d2e] hover:text-[#c9973d] transition-colors"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {l.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 w-full text-center"
              >
                <button
                  onClick={() => handleNav('#order')}
                  className="w-full max-w-xs py-3 rounded-full text-lg font-semibold bg-[#d4614e] text-white hover:bg-[#b84c3a] active:scale-95 transition-all shadow-lg"
                >
                  Order Now 🍰
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
