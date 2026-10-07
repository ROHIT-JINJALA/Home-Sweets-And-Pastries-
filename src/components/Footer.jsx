import { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Order Now', href: '#order' },
];

const flavours = [
  'Red Velvet', 'Snickers-Inspired', 'Bounty-Inspired',
  'Raffaello-Inspired', 'Ferrero-Inspired', 'Banana Caramel',
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-[#3d1c0e]" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => scroll('#home')} className="flex items-center gap-2.5 mb-4">
              <span className="text-2xl">🍰</span>
              <div>
                <div
                  className="font-bold text-[#e8c070] text-lg"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  HOME SWEETS
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">In every sweet moment</div>
              </div>
            </button>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Artisan cakes, marshmallow flowers & bento delights — handcrafted with love in
              Saint John, NB 🇨🇦
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/home.sweets.ca"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#d4614e] text-white flex items-center justify-center transition-all hover:scale-110"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/home.sweets.ca"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#d4614e] text-white flex items-center justify-center transition-all hover:scale-110"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[#e8c070] font-semibold mb-5 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scroll(l.href)}
                    className="text-white/50 hover:text-white text-sm transition-colors text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Flavours */}
          <div>
            <h4 className="text-[#e8c070] font-semibold mb-5 text-sm uppercase tracking-widest">
              Our Flavours
            </h4>
            <ul className="space-y-2.5">
              {flavours.map((f) => (
                <li key={f}>
                  <button
                    onClick={() => scroll('#order')}
                    className="text-white/50 hover:text-white text-sm transition-colors text-left"
                  >
                    {f}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[#e8c070] font-semibold mb-5 text-sm uppercase tracking-widest">
              Stay Sweet 🍰
            </h4>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Subscribe for seasonal specials, new flavours & sweet inspiration.
            </p>
            {subscribed ? (
              <div className="text-[#e8c070] text-sm font-semibold">
                🎉 You're subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2" id="newsletter-form">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#c9973d]/50 text-sm"
                />
                <button
                  type="submit"
                  id="newsletter-submit"
                  className="w-full py-2.5 rounded-xl bg-[#d4614e] hover:bg-[#b84c3a] text-white text-sm font-semibold transition-all active:scale-95"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <span>© 2024 Home Sweets · Saint John, NB, Canada · Made with 💛 by Badya</span>
          <a href="tel:+15068997693" className="hover:text-white transition-colors">
            +1 506-899-7693
          </a>
        </div>
      </div>
    </footer>
  );
}
