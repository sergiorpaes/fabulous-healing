import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Flower2,
  GraduationCap,
  Infinity as InfinityIcon,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PATH_ICONS = [
  <GraduationCap key="g" className="w-7 h-7 text-gold stroke-[1.5] shrink-0" />,
  <BookOpen key="b" className="w-7 h-7 text-gold stroke-[1.5] shrink-0" />,
  <Flower2 key="f" className="w-7 h-7 text-gold stroke-[1.5] shrink-0" />,
  <InfinityIcon key="i" className="w-7 h-7 text-gold stroke-[1.5] shrink-0" />,
];

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

      {/* My Path Section */}
      <section className="bg-[#fdfcfe] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#5b3c7d] mb-2">
              {t.about.path.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif italic text-[#3b1566] font-normal">
              {t.about.path.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <img
                src="/assets/exp-hero.jpg"
                alt={t.about.path.title}
                className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-lg border border-purple-100/60"
              />
            </div>

            <div className="lg:col-span-7 space-y-5">
              {t.about.path.items.map((item, idx) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="mt-1">{PATH_ICONS[idx]}</div>
                  <div>
                    <h3 className="text-base sm:text-lg font-sans font-bold text-[#3b1566]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4a395c] leading-relaxed mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;