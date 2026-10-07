import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { reviews } from '../data';

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#c9973d] text-sm mb-3">
      {[...Array(5)].map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

function ReviewCard({ review, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      id={`review-${review.id}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.12 }}
      className="bg-white rounded-3xl p-7 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <Stars />
      <p className="text-[#6b3d2e]/80 text-sm leading-relaxed italic flex-1 mb-6">
        {review.text}
      </p>
      <div className="flex items-center gap-3 mt-auto">
        <div
          className={`w-10 h-10 rounded-full ${review.avatarBg} flex items-center justify-center font-bold text-[#6b3d2e] text-sm flex-shrink-0`}
        >
          {review.initial}
        </div>
        <div>
          <div className="font-semibold text-[#6b3d2e] text-sm">{review.name}</div>
          <div className="text-xs text-[#a0614e]">{review.label}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Reviews() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="reviews" className="py-24 bg-[#f5e9d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#e8c070]/40 text-[#8b5e2a] text-xs font-semibold uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#6b3d2e]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            What Our Customers Say
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={review.id} review={review} index={i} />
          ))}
        </div>

        {/* Follow us nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-[#6b3d2e]/60 text-sm">
            Follow us on{' '}
            <a
              href="https://www.instagram.com/home.sweets.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4614e] font-semibold hover:underline"
            >
              @home.sweets.ca
            </a>{' '}
            for more sweet moments 🌸
          </p>
        </motion.div>
      </div>
    </section>
  );
}
