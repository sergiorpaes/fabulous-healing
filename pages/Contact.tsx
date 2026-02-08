import React from 'react';
import { Mail, MapPin, Phone, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-fadeIn pb-24">
      <section className="py-24 bg-gradient-to-b from-purple-50 to-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-serif text-purple-950 mb-6 italic">
            {t.contact.title} <span className="text-spiritual-lavender">{t.contact.titleHighlight}</span>
          </h1>
          <p className="text-xl text-purple-800/70 font-light">{t.contact.subtitle}</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-4xl font-serif text-purple-950 mb-10 italic">{t.contact.infoTitle}</h2>
            <div className="space-y-10 mb-16">
              <div className="flex items-center group">
                <div className="w-16 h-16 bg-white border border-purple-100 rounded-3xl shadow-sm flex items-center justify-center text-purple-400 mr-8 group-hover:bg-purple-50 transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-purple-300 mb-1">{t.contact.email.title}</p>
                  <p className="text-purple-900 font-medium text-lg">{t.contact.email.text}</p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="w-16 h-16 bg-white border border-purple-100 rounded-3xl shadow-sm flex items-center justify-center text-purple-400 mr-8 group-hover:bg-purple-50 transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-purple-300 mb-1">{t.contact.phone.title}</p>
                  <p className="text-purple-900 font-medium text-lg">{t.contact.phone.text}</p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="w-16 h-16 bg-white border border-purple-100 rounded-3xl shadow-sm flex items-center justify-center text-purple-400 mr-8 group-hover:bg-purple-50 transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-purple-300 mb-1">{t.contact.address.title}</p>
                  <p className="text-purple-900 font-medium text-lg">{t.contact.address.text}</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50/50 p-8 rounded-[2.5rem] border border-purple-100/50">
              <h4 className="text-purple-900 font-bold mb-6 uppercase tracking-widest text-xs">Siga nossa jornada:</h4>
              <div className="flex space-x-8">
                <a href="#" className="flex items-center text-purple-700/60 hover:text-purple-400 transition-colors">
                  <Instagram size={24} className="mr-3" /> @fabuloushealing
                </a>
                <a href="#" className="flex items-center text-purple-700/60 hover:text-purple-400 transition-colors">
                  <Youtube size={24} className="mr-3" /> Fabulous Healing TV
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-xl p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-purple-900/5 border border-purple-100/50">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-purple-400 mb-3 ml-2">{t.contact.form.name}</label>
                  <input type="text" className="w-full px-6 py-4 rounded-3xl bg-purple-50/30 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all" placeholder={t.contact.form.name} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-purple-400 mb-3 ml-2">{t.contact.form.email}</label>
                  <input type="email" className="w-full px-6 py-4 rounded-3xl bg-purple-50/30 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all" placeholder={t.contact.form.email} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-purple-400 mb-3 ml-2">Assunto</label>
                <select className="w-full px-6 py-4 rounded-3xl bg-purple-50/30 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all text-purple-900">
                  <option>Agendamento de Sessão</option>
                  <option>Dúvidas sobre Cursos</option>
                  <option>Suporte à Comunidade</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-purple-400 mb-3 ml-2">{t.contact.form.message}</label>
                <textarea rows={5} className="w-full px-6 py-4 rounded-3xl bg-purple-50/30 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all" placeholder={t.contact.form.message}></textarea>
              </div>
              <button className="w-full btn-luminous py-5 rounded-full font-bold">
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;