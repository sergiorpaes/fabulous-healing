import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Flower2,
  Infinity as InfinityIcon,
  Laptop,
  Triangle,
  Users,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const COURSE_IMAGES: Record<string, string> = {
  usui: '/assets/exp-reiki.jpg',
  cosmo: '/assets/exp-hero.jpg',
  arcanjos: '/assets/featured-protocol.jpg',
  kuanyin: '/assets/exp-semente-expansao.jpg',
  elmorya: '/assets/about-pillars-bg.jpg',
  cigana: '/assets/exp-leituras.jpg',
  ouro: '/assets/exp-ativacoes.jpg',
  kundalini: '/assets/exp-limpeza.jpg',
};

const FEATURE_ICONS = [
  <Laptop key="f1" className="w-7 h-7 text-gold stroke-[1.5] shrink-0" />,
  <Award key="f2" className="w-7 h-7 text-gold stroke-[1.5] shrink-0" />,
  <InfinityIcon key="f3" className="w-7 h-7 text-gold stroke-[1.5] shrink-0" />,
  <Users key="f4" className="w-7 h-7 text-gold stroke-[1.5] shrink-0" />,
  <Flower2 key="f5" className="w-7 h-7 text-gold stroke-[1.5] shrink-0" />,
];

const Courses: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-fadeIn bg-[#fdfcfe]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#faf6fc] via-[#fdfbfd] to-[#f4f8fa] overflow-hidden">
        {/* Right-side scenic photo on desktop */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[56%] h-72 sm:h-96 lg:h-auto relative">
          <img
            src="/assets/course-hero.jpg"
            alt={t.courses.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-l from-transparent via-[#faf6fc]/45 to-[#faf6fc]" />
          <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#faf6fc]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-[54%] py-10 sm:py-14 lg:py-20">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-serif leading-[1.1] text-[#3b1566] mb-2">
              {t.courses.title}
            </h1>
            <p className="text-2xl sm:text-3xl font-serif italic text-healing-aqua leading-snug mb-5">
              {t.courses.subtitle}
            </p>

            {/* Lotus Divider */}
            <div className="flex items-center gap-3 max-w-xs mb-5">
              <span className="h-px flex-1 bg-gold/60" />
              <Flower2 className="w-5 h-5 text-gold shrink-0" />
              <span className="h-px flex-1 bg-gold/60" />
            </div>

            <p className="text-sm sm:text-base text-[#4a395c] leading-relaxed max-w-md">
              {t.courses.description}
            </p>
          </div>
        </div>
      </section>

      {/* 5-Feature Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 mb-14">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-purple-100 shadow-lg shadow-purple-900/5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-purple-100">
          {t.courses.features.map((feat, idx) => (
            <div
              key={feat.title}
              className="flex items-center justify-center gap-3 px-4 py-4 text-left"
            >
              {FEATURE_ICONS[idx]}
              <div>
                <p className="text-xs sm:text-sm font-semibold text-[#3b1566] leading-tight">
                  {feat.title}
                </p>
                <p className="text-[11px] sm:text-xs text-gray-600 leading-tight mt-0.5">
                  {feat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Available Trainings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex items-center justify-center gap-6 mb-10 max-w-5xl mx-auto">
          <div className="h-px bg-gold/40 flex-1" />
          <h2 className="text-3xl sm:text-4xl font-serif text-[#3b1566] font-normal tracking-wide text-center">
            {t.courses.sectionTitle}
          </h2>
          <div className="h-px bg-gold/40 flex-1" />
        </div>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {t.courses.items.map((course) => (
            <article
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md shadow-purple-900/5 border border-purple-100/80 flex flex-col group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-44 w-full overflow-hidden bg-purple-50">
                <img
                  src={COURSE_IMAGES[course.id] ?? '/assets/exp-reiki.jpg'}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between relative pb-12">
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2.5 text-center">
                    <Flower2 className="w-4 h-4 text-gold shrink-0" />
                    <h3 className="text-lg font-serif font-bold text-[#3b1566] leading-snug">
                      {course.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed pr-6">
                    {course.description}
                  </p>
                </div>

                <Link
                  to="/contato"
                  aria-label={course.title}
                  className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-gold/60 flex items-center justify-center text-[#3b1566] hover:bg-[#3b1566] hover:border-[#3b1566] hover:text-white transition-colors"
                >
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Featured Horizontal Card: Arcturian Multidimensional Healing System */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-md shadow-purple-900/5 border border-purple-100/80 grid grid-cols-1 lg:grid-cols-12 items-center relative">
          <div className="lg:col-span-5 h-56 lg:h-60 overflow-hidden bg-purple-950">
            <img
              src="/assets/exp-arcturiano.jpg"
              alt={t.courses.featured.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 lg:pr-16 relative">
            <div className="flex items-start gap-3 mb-3">
              <Triangle className="w-8 h-8 text-[#6b3fa0] stroke-[1.5] shrink-0 mt-1" />
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#3b1566] leading-tight">
                {t.courses.featured.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
              {t.courses.featured.description}
            </p>

            <Link
              to="/contato"
              aria-label={t.courses.featured.title}
              className="mt-5 lg:mt-0 lg:absolute lg:bottom-6 lg:right-6 w-9 h-9 rounded-full border border-gold/60 inline-flex items-center justify-center text-[#3b1566] hover:bg-[#3b1566] hover:border-[#3b1566] hover:text-white transition-colors"
            >
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Coastal Sunrise CTA */}
      <section className="relative pt-14 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#fdfcfe] via-[#f6f1fa] to-[#efe7f6]">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-serif italic text-[#3b1566] font-normal mb-6">
            {t.courses.bottomCta.question}
          </h2>
          <Link
            to="/contato"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-healing-aqua to-[#188890] text-white px-8 py-3.5 rounded-full text-sm sm:text-base font-medium shadow-lg shadow-healing-aqua/25 hover:shadow-xl hover:brightness-105 transition-all"
          >
            <span>{t.courses.bottomCta.button}</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Courses;