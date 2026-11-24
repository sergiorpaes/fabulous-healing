import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Flower2,
  Gem,
  Infinity as InfinityIcon,
  Play,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoAspect, setVideoAspect] = useState<number>(9 / 16);

  useEffect(() => {
    if (!isVideoModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsVideoModalOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVideoModalOpen]);

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

            {/* Video Trigger Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/15 border-4 border-white bg-[#2c0e52] aspect-video group">
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  aria-label={t.home.frequencySection.titleHighlight}
                  className="relative w-full h-full block cursor-pointer focus:outline-none"
                >
                  <img
                    src="/assets/exp-cta.jpg"
                    alt={t.home.frequencySection.titleHighlight}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2c0e52]/55 via-[#2c0e52]/20 to-transparent flex flex-col items-center justify-center transition-colors group-hover:bg-[#2c0e52]/30">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute inset-0 rounded-full bg-white/35 animate-ping opacity-60" />
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/30 backdrop-blur-md border-2 border-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-white/40 transition-all duration-300">
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </div>
                </button>
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

      {/* Video Popup Modal (rendered in document.body to bypass .animate-fadeIn transform context) */}
      {isVideoModalOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={t.home.frequencySection.titleHighlight}
            onClick={() => setIsVideoModalOpen(false)}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-[#180630]/85 backdrop-blur-md animate-[backdropIn_0.25s_ease-out_forwards]"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: `min(90vw, calc(86vh * ${videoAspect}), 1100px)`,
                aspectRatio: `${videoAspect}`,
              }}
              className="relative flex flex-col items-center animate-[modalIn_0.35s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            >
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                aria-label="Close video"
                className="absolute -top-4 -right-4 z-10 w-11 h-11 rounded-full bg-[#2c0e52]/95 hover:bg-[#4a1c82] text-white border border-gold/60 flex items-center justify-center shadow-xl backdrop-blur-sm transition-all duration-200 hover:scale-110 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-white/30 shadow-[0_25px_70px_-15px_rgba(167,139,250,0.45)] bg-[#140526]">
                <video
                  src="/assets/session-video.mp4"
                  controls
                  autoPlay
                  playsInline
                  onLoadedMetadata={(e) => {
                    const v = e.currentTarget;
                    if (v.videoWidth && v.videoHeight) {
                      setVideoAspect(v.videoWidth / v.videoHeight);
                    }
                  }}
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Home;