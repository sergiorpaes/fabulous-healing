import React from 'react';
import { Users, Shield, MessageSquare, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Community: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-fadeIn">
      <section className="py-24 bg-gradient-to-b from-purple-50 via-white to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center text-purple-400 mx-auto mb-10 border border-purple-100 shadow-sm">
            <Users size={32} />
          </div>
          <h1 className="text-6xl font-serif text-purple-950 mb-8 leading-tight italic">
            {t.community.title} <span className="text-spiritual-lavender">{t.community.titleHighlight}</span>
          </h1>
          <p className="text-xl text-purple-800/70 leading-relaxed font-light mb-12">
            {t.community.subtitle}
          </p>
          <button className="btn-luminous px-12 py-5 rounded-full font-bold">
            {t.community.join}
          </button>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-12 rounded-[3.5rem] bg-white border border-purple-50 shadow-xl shadow-purple-900/5 text-center group hover:-translate-y-2 transition-all duration-500">
            <div className="text-purple-300 mb-8 flex justify-center group-hover:scale-110 transition-transform"><Shield size={48} /></div>
            <h3 className="text-2xl font-serif font-bold text-purple-900 mb-4">{t.community.items.telegram.title}</h3>
            <p className="text-purple-800/60 text-sm leading-relaxed font-light">
              {t.community.items.telegram.description}
            </p>
          </div>
          <div className="p-12 rounded-[3.5rem] bg-white border border-purple-50 shadow-xl shadow-purple-900/5 text-center group hover:-translate-y-2 transition-all duration-500">
            <div className="text-purple-300 mb-8 flex justify-center group-hover:scale-110 transition-transform"><MessageSquare size={48} /></div>
            <h3 className="text-2xl font-serif font-bold text-purple-900 mb-4">{t.community.items.mentorship.title}</h3>
            <p className="text-purple-800/60 text-sm leading-relaxed font-light">
              {t.community.items.mentorship.description}
            </p>
          </div>
          <div className="p-12 rounded-[3.5rem] bg-white border border-purple-50 shadow-xl shadow-purple-900/5 text-center group hover:-translate-y-2 transition-all duration-500">
            <div className="text-purple-300 mb-8 flex justify-center group-hover:scale-110 transition-transform"><Heart size={48} /></div>
            <h3 className="text-2xl font-serif font-bold text-purple-900 mb-4">{t.community.items.events.title}</h3>
            <p className="text-purple-800/60 text-sm leading-relaxed font-light">
              {t.community.items.events.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;