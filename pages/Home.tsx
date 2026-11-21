import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Flower2,
  Gem,
  Infinity as InfinityIcon,
  Play,
  Sparkles,
  Users,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: <Flower2 className="w-9 h-9 text-[#5b3c7d] stroke-[1.4]" />,
      title: t.home.cards.balance.title,
      desc: t.home.cards.balance.desc,
    },
    {
      icon: <Gem className="w-9 h-9 text-[#5b3c7d] stroke-[1.4]" />,
      title: t.home.cards.protection.title,
      desc: t.home.cards.protection.desc,
    },
    {
      icon: <Users className="w-9 h-9 text-[#5b3c7d] stroke-[1.4]" />,
      title: t.home.cards.healing.title,
      desc: t.home.cards.healing.desc,
    },
    {
      icon: <InfinityIcon className="w-9 h-9 text-[#5b3c7d] stroke-[1.4]" />,
      title: t.home.cards.manifestation.title,
      desc: t.home.cards.manifestation.desc,
    },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section - Soft Oceanic Mood */}
      <section className="relative h-[95vh] flex items-center overflow-hidden bg-healing-aqua">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/home-hero.jpg"
            alt="Fabíola Piovesan | Inuá"
            className="w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-healing-aqua/60 via-teal-700/25 to-healing-aqua/10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 mb-8 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
              <Sparkles className="text-spiritual-lavender w-4 h-4" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">{t.home.heroTagline}</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-serif text-white leading-[0.95] mb-8 drop-shadow-lg">
              {t.home.heroTitle} <span className="text-spiritual-lavender italic text-glow">{t.home.heroTitleHighlight}</span>
            </h1>

            <div className="bg-[#dfc3df]/90 backdrop-blur-md p-8 rounded-3xl mb-12 max-w-xl shadow-xl">
              <h3 className="text-2xl font-serif text-purple-900 mb-2 italic">{t.home.heroSubtitleTitle}</h3>
              <p className="text-purple-900/80 font-light leading-relaxed">
                {t.home.heroSubtitleText} <span className="text-purple-900 font-medium underline decoration-purple-900/30">{t.home.heroSubtitleHighlight}</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/servicos"
                className="bg-white text-purple-900 px-10 py-5 rounded-full font-bold shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all duration-300 text-center"
              >
                {t.home.heroCtaPrimary}
              </Link>
              <Link
                to="/sobre"
                className="group flex items-center justify-center px-10 py-5 border border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                {t.home.heroCtaSecondary}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Halo Decoration - Samples Lavender from Image 4 */}
        <div className="absolute top-1/2 right-[-100px] w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      </section>

      {/* Unified Frequency & Video Showcase Section */}
      <section className="bg-gradient-to-b from-[#faf6fb] via-[#f7f4fa] to-[#f4eff8] py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Brand Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Fabíola Piovesan | Inuá"
                className="h-14 w-auto object-contain"
              />
              <div className="text-left">
                <p className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#3b1566] leading-none">
                  Fabíola Piovesan <span className="text-gold">| Inuá</span>
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="h-px w-6 bg-gold/80" />
                  <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.25em] uppercase text-[#5b3c7d]">
                    {t.footer.channelerSubtitle}
                  </span>
                  <span className="h-px w-6 bg-gold/80" />
                </div>
              </div>
            </div>
          </div>

          {/* 2-Column Main Content + Video Slot */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-4xl sm:text-5xl font-serif leading-[1.1] text-[#3b1566] font-normal">
                {t.home.frequencySection.title}{' '}
                <span className="italic block text-[#5b2a86]">
                  {t.home.frequencySection.titleHighlight}
                </span>
              </h2>

              <div className="w-56 h-[2px] bg-gradient-to-r from-gold via-gold/70 to-transparent rounded-full" />

              <p className="text-sm sm:text-base text-[#4a395c] leading-relaxed max-w-xl">
                {t.home.frequencySection.description}
              </p>
            </div>

            {/* Video Container (ready for video upload) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/15 border-4 border-white bg-[#2c0e52] aspect-video group">
                <img
                  src="/assets/exp-cta.jpg"
                  alt={t.home.frequencySection.titleHighlight}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#2c0e52]/25 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/30 backdrop-blur-md border-2 border-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white ml-1" />
                  </div>
                  <span className="mt-3 px-4 py-1 rounded-full bg-black/35 backdrop-blur-sm text-white text-[11px] tracking-wider uppercase font-medium">
                    {t.home.frequencySection.videoBadge}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-gold/45 pb-14">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#3b1566] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#4a395c] leading-snug max-w-[190px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>


      </section>
    </div>
  );
};

export default Home;