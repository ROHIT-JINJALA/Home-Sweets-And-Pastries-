import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMapPin, FiPhone, FiClock, FiTruck } from 'react-icons/fi';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const contactItems = [
  { icon: <FiMapPin />, label: 'Location', value: 'Saint John, NB, Canada 🇨🇦' },
  { icon: <FiPhone />, label: 'Phone / WhatsApp', value: '+1 506-899-7693', href: 'tel:+15068997693' },
  { icon: <FiClock />, label: 'Business Hours', value: 'Mon–Sat: 9 AM – 7 PM' },
  { icon: <FiTruck />, label: 'Delivery & Pickup', value: 'Local delivery + In-store collection' },
];

export default function OrderForm() {
  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: '-60px' });
  const rightRef = useRef(null);
  const rightInView = useInView(rightRef, { once: true, margin: '-60px' });

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', occasion: '', flavor: '', size: '', date: '', message: '',
  });

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls =
    'w-full px-4 py-3 rounded-xl border border-[#e8c070]/50 bg-white text-[#3d2b1f] placeholder:text-[#a0614e]/40 focus:outline-none focus:ring-2 focus:ring-[#d4614e]/40 focus:border-[#d4614e] transition-all text-sm';

  const selectCls =
    'w-full px-4 py-3 rounded-xl border border-[#e8c070]/50 bg-white text-[#3d2b1f] focus:outline-none focus:ring-2 focus:ring-[#d4614e]/40 focus:border-[#d4614e] transition-all text-sm appearance-none cursor-pointer';

  return (
    <section id="order" className="py-24 bg-[#fdf6ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — Info */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -40 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#f5e0b0] text-[#8b5e2a] text-xs font-semibold uppercase tracking-widest mb-5">
              Get in Touch
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#6b3d2e] mb-5 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Place Your <em className="text-[#d4614e]">Sweet Order</em>
            </h2>
            <p className="text-[#6b3d2e]/70 mb-10 leading-relaxed">
              Ready to make your celebration unforgettable? Fill out the form and I'll get back
              to you within 24 hours to confirm details and pricing.
            </p>

            {/* Contact items */}
            <div className="space-y-5">
              {contactItems.map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#e8c070]/30 flex items-center justify-center text-[#c9973d] flex-shrink-0 text-lg">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-[#a0614e] font-medium uppercase tracking-wide">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="text-[#6b3d2e] font-semibold hover:text-[#d4614e] transition-colors text-sm">
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-[#6b3d2e] font-semibold text-sm">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-10">
              <a
                href="https://www.facebook.com/home.sweets.ca"
                target="_blank"
                rel="noopener noreferrer"
                id="social-facebook"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-[#6b3d2e] text-white hover:bg-[#d4614e] flex items-center justify-center transition-all hover:scale-110"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/home.sweets.ca"
                target="_blank"
                rel="noopener noreferrer"
                id="social-instagram"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-[#6b3d2e] text-white hover:bg-[#d4614e] flex items-center justify-center transition-all hover:scale-110"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 40 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-10 shadow-xl text-center flex flex-col items-center gap-4"
                id="form-success"
              >
                <div className="text-6xl">🎉</div>
                <h3
                  className="text-3xl font-bold text-[#6b3d2e]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Thank You!
                </h3>
                <p className="text-[#6b3d2e]/70">
                  Your order request has been received. I'll be in touch within 24 hours to
                  discuss your perfect cake!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-6 py-2.5 rounded-full bg-[#d4614e] text-white text-sm font-semibold hover:bg-[#b84c3a] transition-all"
                >
                  Send Another Request
                </button>
              </motion.div>
            ) : (
              <form
                id="order-form"
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 shadow-xl space-y-5"
                noValidate
              >
                <h3
                  className="text-2xl font-bold text-[#6b3d2e] mb-1"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  🎂 Custom Cake Request
                </h3>

                {/* Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-[#6b3d2e] uppercase tracking-wide">
                      Your Name *
                    </label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="Jane Smith"
                      className={inputCls}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-[#6b3d2e] uppercase tracking-wide">
                      Email *
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="jane@example.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-[#6b3d2e] uppercase tracking-wide">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="phone" name="phone" type="tel" required
                      value={form.phone} onChange={handleChange}
                      placeholder="+1 506-000-0000"
                      className={inputCls}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="occasion" className="text-xs font-semibold text-[#6b3d2e] uppercase tracking-wide">
                      Occasion *
                    </label>
                    <select id="occasion" name="occasion" required value={form.occasion} onChange={handleChange} className={selectCls}>
                      <option value="">Select…</option>
                      {['Birthday','Anniversary','Wedding','Gender Reveal','Baby Shower','Graduation','Corporate Event','Gift / Just Because','Other'].map(o => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="flavor" className="text-xs font-semibold text-[#6b3d2e] uppercase tracking-wide">
                      Cake Flavour *
                    </label>
                    <select id="flavor" name="flavor" required value={form.flavor} onChange={handleChange} className={selectCls}>
                      <option value="">Select…</option>
                      {['Red Velvet','Snickers-Inspired','Bounty-Inspired','Raffaello-Inspired','Ferrero-Inspired','Banana Caramel','Not sure — suggest for me'].map(f => (
                        <option key={f}>{f}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="size" className="text-xs font-semibold text-[#6b3d2e] uppercase tracking-wide">
                      Cake Size *
                    </label>
                    <select id="size" name="size" required value={form.size} onChange={handleChange} className={selectCls}>
                      <option value="">Select…</option>
                      {['Bento (~450–500g)','Classic (1 kg)','Medium (1.5 kg)','Grand (2+ kg)'].map(s => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="date" className="text-xs font-semibold text-[#6b3d2e] uppercase tracking-wide">
                    Preferred Date *
                  </label>
                  <input
                    id="date" name="date" type="date" required
                    value={form.date} onChange={handleChange}
                    className={inputCls}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-[#6b3d2e] uppercase tracking-wide">
                    Special Requests / Design Details
                  </label>
                  <textarea
                    id="message" name="message" rows={4}
                    value={form.message} onChange={handleChange}
                    placeholder="Tell me about your dream cake — colours, theme, inscription, dietary needs…"
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  id="form-submit-btn"
                  className="w-full py-4 rounded-2xl bg-[#d4614e] text-white font-semibold text-base hover:bg-[#b84c3a] active:scale-95 transition-all shadow-lg shadow-[#d4614e]/30"
                >
                  Send My Order Request 🎂
                </button>
                <p className="text-center text-xs text-[#a0614e]">
                  I'll reply within 24 hours with pricing and availability.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
