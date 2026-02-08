import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Instagram, Youtube, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-purple-50/50 border-t border-purple-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-6 h-6 text-spiritual-lavender" />
              <span className="text-xl font-serif font-bold tracking-tight text-deep-violet">
                Fabulous <span className="text-gold">Healing</span>
              </span>
            </Link>
            <p className="text-purple-800/60 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-deep-violet font-semibold mb-6">{t.footer.navigation}</h4>
            <ul className="space-y-4 text-sm text-purple-700/60">
              <li><Link to="/sobre" className="hover:text-spiritual-lavender transition-colors">{t.footer.about}</Link></li>
              <li><Link to="/servicos" className="hover:text-spiritual-lavender transition-colors">{t.footer.services}</Link></li>
              <li><Link to="/produtos" className="hover:text-spiritual-lavender transition-colors">{t.footer.products}</Link></li>
              <li><Link to="/blog" className="hover:text-spiritual-lavender transition-colors">{t.footer.blog}</Link></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-deep-violet font-semibold mb-6">{t.footer.support}</h4>
            <ul className="space-y-4 text-sm text-purple-700/60">
              <li><Link to="/contato" className="hover:text-spiritual-lavender transition-colors">{t.footer.contact}</Link></li>
              <li><a href="#" className="hover:text-spiritual-lavender transition-colors">{t.footer.privacy}</a></li>
              <li><a href="#" className="hover:text-spiritual-lavender transition-colors">{t.footer.terms}</a></li>
              <li><Link to="/comunidade" className="hover:text-spiritual-lavender transition-colors">{t.footer.community}</Link></li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-deep-violet font-semibold mb-6">{t.footer.connect}</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-300 hover:text-spiritual-lavender hover:bg-purple-50 transition-all border border-purple-50">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-300 hover:text-spiritual-lavender hover:bg-purple-50 transition-all border border-purple-50">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-300 hover:text-spiritual-lavender hover:bg-purple-50 transition-all border border-purple-50">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-100 flex flex-col md:flex-row justify-between items-center text-purple-300 text-xs">
          <p>{t.footer.rights}</p>
          <p className="mt-4 md:mt-0 italic">{t.footer.developedBy}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
