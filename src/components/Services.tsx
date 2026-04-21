'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import {
  AlignCenter,
  Baby,
  Sparkles,
  Star,
  Shield,
  Zap,
} from 'lucide-react';

const SERVICES_BG = '#F7F9FC';
const CARD_BORDER = '#E8EEF4';
const PRIMARY = '#6DBFAA';
const ACCENT = '#D4AF6A';
const TEXT_DARK = '#1A2331';
const TEXT_MUTED = '#6B7B8D';

const services = [
  {
    icon: AlignCenter,
    title: 'Invisalign Aligners',
    desc: 'Custom clear aligners designed for your smile using 3D scanning technology and precision engineering.',
    href: '/invisalign',
    featured: true,
  },
  {
    icon: Baby,
    title: 'Pediatric Dentistry',
    desc: 'Gentle, child-friendly dental care that builds positive associations with oral health from early on.',
    href: '/pediatric',
  },
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    desc: 'Professional-grade whitening treatments delivering 6–8 shades brighter results in a single session.',
    href: '/services',
  },
  {
    icon: Star,
    title: 'Smile Makeover',
    desc: 'Comprehensive smile transformation combining veneers, whitening, and alignment correction.',
    href: '/services',
  },
  {
    icon: Shield,
    title: 'Dental Implants',
    desc: 'Permanent tooth replacement solutions using titanium implants that look, feel, and function naturally.',
    href: '/services',
  },
  {
    icon: Zap,
    title: 'Orthodontics',
    desc: 'Traditional and modern orthodontic solutions to correct misalignment and achieve a balanced bite.',
    href: '/services',
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  hover: { y: -6 },
};

function SectionHeader() {
  return (
    <div className="text-center mb-14">
      <p className="uppercase tracking-widest text-sm text-[#6DBFAA] text-xs">
        What We Offer
      </p>

      <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1A2331]">
        Treatments Designed Around You
      </h2>

      <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-[#6B7B8D]">
        From precision Invisalign to compassionate pediatric care — every treatment is tailored, every outcome is measured.
      </p>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="py-28 px-6" style={{ background: SERVICES_BG }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map(({ icon: Icon, title, desc, href, featured }) => (
            <motion.div
              key={title}
              variants={card}
              whileHover="hover"
              className="relative bg-white rounded-2xl p-7 cursor-pointer shadow-sm hover:shadow-lg transition-shadow"
              style={{
                border: `1px solid ${CARD_BORDER}`,
                borderTop: featured
                  ? `3px solid ${ACCENT}`
                  : `1px solid ${CARD_BORDER}`,
              }}
            >
              {featured && (
                <div
                  className="absolute top-4 right-4 text-[10px] uppercase font-medium px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: '#FFF8E7',
                    color: ACCENT,
                    letterSpacing: '0.06em',
                  }}
                >
                  Most Popular
                </div>
              )}

              <div
                className="w-10 h-10 flex items-center justify-center rounded-full mb-5"
                style={{ backgroundColor: '#EAF7F3' }}
              >
                <Icon size={18} color={PRIMARY} strokeWidth={1.5} />
              </div>

              <h3
                className="font-medium mb-2.5"
                style={{ fontSize: 16, color: TEXT_DARK }}
              >
                {title}
              </h3>

              <p
                className="leading-relaxed mb-5 line-clamp-3"
                style={{ fontSize: 14, color: TEXT_MUTED }}
              >
                {desc}
              </p>

              <Link
                href={href}
                className="text-sm font-medium transition-opacity hover:opacity-80"
                style={{ color: PRIMARY }}
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}