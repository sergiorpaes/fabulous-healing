import React from 'react';
import { PlayCircle, BookOpen, Monitor, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Products: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-fadeIn">
      <section className="py-24 bg-gradient-to-b from-purple-50 to-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-serif text-purple-950 mb-6 italic">
            {t.products.title} <span className="text-spiritual-lavender">{t.products.titleHighlight}</span>
          </h1>
          <p className="text-xl text-purple-800/70 font-light">{t.products.subtitle}</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Online Courses */}
          <div className="bg-white/60 backdrop-blur-md p-10 rounded-[3rem] shadow-xl shadow-purple-900/5 border border-purple-100/50 flex flex-col items-center text-center group hover:bg-white transition-all duration-500">
            <div className="w-20 h-20 bg-purple-50 rounded-3xl flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 transition-transform">
              <Monitor size={40} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-purple-900 mb-4">{t.products.items.meditation.title}</h2>
            <p className="text-purple-800/60 mb-8 leading-relaxed font-light">
              {t.products.items.meditation.description}
            </p>
            <button className="mt-auto flex items-center text-purple-400 font-bold uppercase tracking-widest text-[10px] border-b border-purple-100 pb-1 hover:text-purple-600 hover:border-purple-400 transition-all">
              {t.products.cta} <Download className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* Audio Meditations */}
          <div className="bg-white/60 backdrop-blur-md p-10 rounded-[3rem] shadow-xl shadow-purple-900/5 border border-purple-100/50 flex flex-col items-center text-center group hover:bg-white transition-all duration-500">
            <div className="w-20 h-20 bg-purple-50 rounded-3xl flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 transition-transform">
              <PlayCircle size={40} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-purple-900 mb-4">{t.products.items.audio.title}</h2>
            <p className="text-purple-800/60 mb-8 leading-relaxed font-light">
              {t.products.items.audio.description}
            </p>
            <button className="mt-auto flex items-center text-purple-400 font-bold uppercase tracking-widest text-[10px] border-b border-purple-100 pb-1 hover:text-purple-600 hover:border-purple-400 transition-all">
              {t.products.cta} <Download className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* E-books */}
          <div className="bg-white/60 backdrop-blur-md p-10 rounded-[3rem] shadow-xl shadow-purple-900/5 border border-purple-100/50 flex flex-col items-center text-center group hover:bg-white transition-all duration-500">
            <div className="w-20 h-20 bg-purple-50 rounded-3xl flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 transition-transform">
              <BookOpen size={40} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-purple-900 mb-4">{t.products.items.ebook.title}</h2>
            <p className="text-purple-800/60 mb-8 leading-relaxed font-light">
              {t.products.items.ebook.description}
            </p>
            <button className="mt-auto flex items-center text-purple-400 font-bold uppercase tracking-widest text-[10px] border-b border-purple-100 pb-1 hover:text-purple-600 hover:border-purple-400 transition-all">
              {t.products.cta} <Download className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;