import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Flower2,
  Hand,
  Hexagon,
  Infinity as InfinityIcon,
  Mountain,
  Sparkles,
  Target,
  Triangle,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CARD_MEDIA: Record<string, { image: string; icon: React.ReactNode }> = {
  'semente-vida': {
    image: '/assets/exp-semente-vida.jpg',
    icon: <Flower2 className="w-5 h-5 text-[#6b3fa0] shrink-0" />,
  },
  'semente-expansao': {
    image: '/assets/exp-semente-expansao.jpg',
    icon: <Sparkles className="w-5 h-5 text-[#6b3fa0] shrink-0" />,
  },
  arcturiano: {
    image: '/assets/exp-arcturiano.jpg',
    icon: <Triangle className="w-5 h-5 text-[#6b3fa0] shrink-0" />,
  },
  reiki: {
    image: '/assets/exp-reiki.jpg',
    icon: <Hand className="w-5 h-5 text-[#6b3fa0] shrink-0" />,
  },
  leituras: {
    image: '/assets/exp-leituras.jpg',
    icon: <BookOpen className="w-5 h-5 text-[#6b3fa0] shrink-0" />,
  },
  ativacoes: {
    image: '/assets/exp-ativacoes.jpg',
    icon: <Target className="w-5 h-5 text-[#6b3fa0] shrink-0" />,
  },
  limpeza: {
    image: '/assets/exp-limpeza.jpg',
    icon: <Hexagon className="w-5 h-5 text-[#6b3fa0] shrink-0" />,
  },
  retiros: {
    image: '/assets/exp-retiros.jpg',
    icon: <Mountain className="w-5 h-5 text-[#6b3fa0] shrink-0" />,
  },
};

const PILLAR_ICONS = [
  <Flower2 key="p1" className="w-8 h-8 text-gold stroke-[1.5]" />,
  <InfinityIcon key="p2" className="w-8 h-8 text-gold stroke-[1.5]" />,
  <Sparkles key="p3" className="w-8 h-8 text-gold stroke-[1.5]" />,
  <Hexagon key="p4" className="w-8 h-8 text-gold stroke-[1.5]" />,
];

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#faf6fc] via-[#fdfbfd] to-[#fdf6f0] overflow-hidden">
        {/* Background photo on left for desktop */}
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-[48%] h-72 sm:h-96 lg:h-auto relative">
          <img
            src="/assets/exp-hero.jpg"
            alt={t.services.eyebrow}
            className="w-full h-full object-cover object-center"
          />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-[#fcf9fd]/35 to-[#fcf9fd]" />
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#faf6fc]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:ml-auto lg:w-[56%] py-10 sm:py-14 lg:py-20">
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-[#5b3c7d] mb-3">
              {t.services.eyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-serif leading-[1.12] text-[#3b1566] mb-5">
              {t.services.title}{' '}
              <span className="italic font-normal text-[#6b3fa0] block">
                {t.services.titleHighlight}
              </span>
            </h1>
            <p className="text-sm sm:text-base text-[#4a395c] leading-relaxed max-w-xl mb-10">
              {t.services.subtitle}
            </p>

            {/* 4 Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 sm:divide-x divide-purple-200/80 pt-2">
              {t.services.pillars.map((label, idx) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center px-3 first:pl-0 last:pr-0"
                >
                  <div className="mb-2.5">{PILLAR_ICONS[idx]}</div>
                  <span className="text-xs font-medium text-[#3b1566] leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mis Experiencias Grid */}
      <section className="bg-gradient-to-b from-[#3b1566] via-[#451773] to-[#310f57] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-12 max-w-5xl mx-auto">
            <div className="h-px bg-white/30 flex-1" />
            <h2 className="text-3xl sm:text-4xl font-serif italic text-white font-normal tracking-wide text-center">
              {t.services.sectionTitle}
            </h2>
            <div className="h-px bg-white/30 flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((item) => {
              const media = CARD_MEDIA[item.id] ?? CARD_MEDIA['semente-vida'];
              return (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-purple-950/30 border border-white/20 flex flex-col group hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-44 w-full overflow-hidden bg-purple-100">
                    <img
                      src={media.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between relative pb-12">
                    <div>
                      <div className="flex items-start gap-2 mb-2">
                        <span className="mt-0.5">{media.icon}</span>
                        <h3 className="text-[1.15rem] font-serif font-bold text-[#3b1566] leading-snug">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <Link
                      to="/contato"
                      aria-label={item.title}
                      className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-[#3b1566]/35 flex items-center justify-center text-[#3b1566] hover:bg-[#3b1566] hover:text-white transition-colors"
                    >
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-[#fdfcfe] py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto rounded-[2rem] bg-gradient-to-r from-[#f3edf8] via-[#edf5fa] to-[#dbf2f6] p-6 sm:p-10 shadow-lg shadow-purple-900/5 border border-purple-100/60 relative overflow-hidden">
          {/* Subtle Sacred Geometry Watermark */}
          <svg
            aria-hidden="true"
            viewBox="0 0 200 200"
            className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-64 h-64 text-[#6b3fa0]/10 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <circle cx="100" cy="100" r="40" />
            <circle cx="100" cy="60" r="40" />
            <circle cx="100" cy="140" r="40" />
            <circle cx="65.4" cy="80" r="40" />
            <circle cx="134.6" cy="80" r="40" />
            <circle cx="65.4" cy="120" r="40" />
            <circle cx="134.6" cy="120" r="40" />
            <circle cx="100" cy="100" r="80" />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5">
              <img
                src="/assets/exp-cta.jpg"
                alt={t.services.bottomCta.title}
                className="w-full h-60 sm:h-68 object-cover rounded-2xl shadow-md"
              />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#5b3c7d]">
                {t.services.bottomCta.eyebrow}
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif italic text-[#3b1566] leading-tight font-normal">
                {t.services.bottomCta.title}
              </h2>
              <p className="text-sm sm:text-base text-[#4a395c] leading-relaxed max-w-xl">
                {t.services.bottomCta.description}
              </p>
              <div className="pt-2">
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#7f009e] to-[#6d28d9] text-white px-7 py-3.5 rounded-full text-sm font-medium shadow-lg shadow-purple-900/20 hover:shadow-xl hover:brightness-110 transition-all"
                >
                  <span>{t.services.bottomCta.button}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;