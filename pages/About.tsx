import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Gem,
  Hexagon,
  Music,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PILLAR_MEDIA: Record<string, { image: string; icon: React.ReactNode }> = {
  sound: {
    image: '/assets/exp-reiki.jpg',
    icon: <Music className="w-8 h-8 text-[#5b3c7d] stroke-[1.5]" />,
  },
  geometry: {
    image: '/assets/exp-semente-vida.jpg',
    icon: <Hexagon className="w-8 h-8 text-[#5b3c7d] stroke-[1.5]" />,
  },
  crystals: {
    image: '/assets/exp-hero.jpg',
    icon: <Gem className="w-8 h-8 text-[#5b3c7d] stroke-[1.5]" />,
  },
  team: {
    image: '/assets/exp-arcturiano.jpg',
    icon: <Sparkles className="w-8 h-8 text-[#5b3c7d] stroke-[1.5]" />,
  },
};

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-fadeIn">
      {/* Founder Hero - Lavender Luminous Theme */}
      <section className="py-24 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="w-full lg:w-1/2 relative">
              <div className="halo-glow">
                <div className="portal-border rounded-full bg-white/80 backdrop-blur-md relative z-10 overflow-hidden aspect-square flex items-center justify-center">
                  <img
                    src="/images/fabiola.jpg"
                    alt={t.about.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-spiritual-lavender/10 mix-blend-soft-light pointer-events-none"></div>
                </div>
              </div>

              <div className="absolute -top-10 -left-10 w-32 h-32 border-2 border-spiritual-lavender/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-0 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-purple-50 hidden md:block z-20">
                <p className="text-deep-violet font-serif italic text-2xl">{t.about.name}</p>
                <p className="text-[10px] text-purple-400 uppercase tracking-widest font-bold">{t.about.role}</p>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center space-x-2 text-spiritual-lavender font-bold tracking-widest text-xs uppercase mb-8">
                <Sparkles size={14} />
                <span>{t.about.badge}</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif text-deep-violet leading-[0.9] mb-10">
                {t.about.title} <span className="text-spiritual-lavender italic">{t.about.titleHighlight}</span>
              </h1>
              <p className="text-xl text-purple-800/70 mb-8 leading-relaxed font-light">
                {t.about.bio1}
              </p>
              <p className="text-lg text-purple-700/60 leading-relaxed mb-12 italic">
                {t.about.bio2}
              </p>

              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h4 className="text-4xl font-serif font-bold text-deep-violet mb-1">{t.about.stats.experience.value}</h4>
                  <p className="text-xs text-spiritual-lavender uppercase tracking-[0.2em] font-bold">{t.about.stats.experience.label}</p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif font-bold text-deep-violet mb-1">{t.about.stats.lives.value}</h4>
                  <p className="text-xs text-spiritual-lavender uppercase tracking-[0.2em] font-bold">{t.about.stats.lives.label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section (Deep Violet Banner + Pastel Aqua/Lavender Card) */}
      <section className="bg-gradient-to-b from-[#3b1566] via-[#451773] to-[#310f57] py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-r from-[#eef5fb] via-[#eaf6fa] to-[#dff3f7] p-6 sm:p-10 shadow-2xl border border-white/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#5b3c7d]">
              {t.about.purpose.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif italic text-[#3b1566] leading-tight font-normal">
              {t.about.purpose.title}
            </h2>
            <p className="text-sm sm:text-base text-[#4a395c] leading-relaxed">
              {t.about.purpose.description}
            </p>
            <div className="pt-2">
              <Link
                to="/servicos"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#7f009e] to-[#6d28d9] text-white px-7 py-3.5 rounded-full text-sm font-medium shadow-lg shadow-purple-900/20 hover:shadow-xl hover:brightness-110 transition-all"
              >
                <span>{t.about.purpose.button}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img
              src="/assets/exp-cta.jpg"
              alt={t.about.purpose.title}
              className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Frequency Reconnection Banner + Work Pillars */}
      <section className="relative bg-gradient-to-br from-[#eef5fa] via-[#f7f4fb] to-[#fdf6f4] overflow-hidden">
        {/* Top Split Banner */}
        <div className="relative lg:min-h-[480px] flex flex-col lg:flex-row lg:items-center">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[48%] h-96 sm:h-[28rem] lg:h-full relative">
            <img
              src="/images/fabiola-praia.jpg"
              alt={t.about.frequencyBanner.titleHighlight}
              className="w-full h-full object-cover object-top"
            />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#f3f2f9] via-[#f3f2f9]/30 to-transparent" />
            <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#f3f2f9] via-transparent to-transparent" />
          </div>

          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:w-[50%] py-12 sm:py-16 lg:py-20 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif leading-[1.12] text-[#3b1566] font-normal">
                {t.about.frequencyBanner.title}{' '}
                <span className="italic block text-[#5b2a86]">
                  {t.about.frequencyBanner.titleHighlight}
                </span>
              </h2>

              <div className="w-24 h-px bg-gold/70" />

              <p className="text-sm sm:text-base text-[#4a395c] leading-relaxed max-w-md">
                {t.about.frequencyBanner.description}
              </p>

              <div className="pt-2">
                <Link
                  to="/servicos"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-[#d169ab] text-white px-7 py-3 rounded-full text-sm font-medium shadow-lg shadow-gold/25 hover:shadow-xl hover:brightness-105 transition-all"
                >
                  <span>{t.about.frequencyBanner.button}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Work Pillars (4 Cards) */}
        <div className="bg-[#fdfcfe]/90 border-t border-purple-100/70 py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-6 mb-10 max-w-4xl mx-auto">
              <div className="h-px bg-gold/40 flex-1" />
              <h2 className="text-3xl sm:text-4xl font-serif italic text-[#3b1566] font-normal text-center">
                {t.about.workPillars.title}
              </h2>
              <div className="h-px bg-gold/40 flex-1" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.about.workPillars.items.map((pillar) => {
                const media = PILLAR_MEDIA[pillar.id] ?? PILLAR_MEDIA.sound;
                return (
                  <article
                    key={pillar.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-md shadow-purple-900/5 border border-purple-100/80 flex flex-col justify-between text-center group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-6 pb-4">
                      <div className="flex justify-center mb-3">{media.icon}</div>
                      <h3 className="text-xl font-serif font-bold text-[#3b1566] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#4a395c] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="h-36 w-full overflow-hidden relative mt-2">
                      <img
                        src={media.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;