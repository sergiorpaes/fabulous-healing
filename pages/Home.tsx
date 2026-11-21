
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Heart, Star, Zap, Shield, Sun } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

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

      {/* Philosophy Section - Luminous White and Violet */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="halo-glow max-w-lg mx-auto">
                <div className="portal-border rounded-[4rem] p-4 bg-white/50 backdrop-blur-md shadow-xl overflow-hidden aspect-[3/4]">
                  <img
                    src="/assets/philosophy-pendulum.jpg"
                    alt="Mesa Radiónica e Pêndulo"
                    className="rounded-[3.5rem] w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700 shadow-inner"
                  />
                </div>
              </div>
              <div className="absolute top-48 -left-12 bg-gradient-to-br from-violet-600 to-purple-700 text-white p-6 rounded-3xl shadow-2xl animate-float z-20">
                <Sun className="w-8 h-8 mb-4 text-healing-aqua" />
                <p className="font-serif text-xl italic">{t.home.philosophyBadge}</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-7xl font-serif text-deep-violet mb-10 leading-tight">
                {t.home.philosophyTitle} <span className="text-spiritual-lavender italic">{t.home.philosophyTitleHighlight}</span>
              </h2>
              <p className="text-purple-800/80 text-lg leading-relaxed mb-10 font-light">
                {t.home.philosophyText} <span className="font-semibold text-deep-violet underline decoration-gold/30">{t.home.philosophyTextHighlight}</span>{t.home.philosophyTextEnd}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <Zap className="text-spiritual-lavender" />, title: t.home.cards.balance.title, desc: t.home.cards.balance.desc },
                  { icon: <Shield className="text-spiritual-lavender" />, title: t.home.cards.protection.title, desc: t.home.cards.protection.desc },
                  { icon: <Heart className="text-spiritual-lavender" />, title: t.home.cards.healing.title, desc: t.home.cards.healing.desc },
                  { icon: <Star className="text-spiritual-lavender" />, title: t.home.cards.manifestation.title, desc: t.home.cards.manifestation.desc }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="bg-purple-50 p-3 rounded-2xl border border-purple-100">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-deep-violet">{item.title}</h4>
                      <p className="text-sm text-purple-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service - Violet and Aqua Glow */}
      <section className="py-24 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#c3dfdf] rounded-[4rem] p-12 md:p-20 overflow-hidden relative shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative z-10">
                <span className="text-purple-700 font-bold tracking-widest text-xs uppercase mb-6 block">{t.home.featuredTagline}</span>
                <h2 className="text-4xl md:text-6xl font-serif mb-8 italic text-deep-violet">{t.home.featuredTitle}</h2>
                <p className="text-deep-violet/80 text-lg leading-relaxed mb-10 font-light whitespace-pre-line">
                  {t.home.featuredText}
                </p>
                <Link to="/servicos" className="inline-block bg-deep-violet text-white px-12 py-5 rounded-full font-bold hover:bg-spiritual-lavender hover:text-white transition-all shadow-xl">
                  {t.home.featuredCta}
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-healing-aqua/20 blur-[100px] rounded-full"></div>
                <img
                  src="/assets/featured-protocol.jpg"
                  alt="Protocolo de Evolução"
                  className="rounded-[3rem] shadow-2xl relative z-10 border-4 border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
