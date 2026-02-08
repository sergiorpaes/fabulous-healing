import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../utils/translations';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { name: t.navbar.home, path: '/' },
    { name: t.navbar.about, path: '/sobre' },
    { name: t.navbar.services, path: '/servicos' },
    { name: t.navbar.products, path: '/produtos' },
    { name: t.navbar.blog, path: '/blog' },
    { name: t.navbar.community, path: '/comunidade' },
    { name: t.navbar.contact, path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/60 backdrop-blur-xl border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <img src="/logo.png" alt="Fabulous Healing" className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
              <span className="text-2xl font-serif font-semibold tracking-tight text-deep-violet">
                Fabulous <span className="text-gold">Healing</span>
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${isActive(link.path) ? 'text-deep-violet border-b-2 border-gold pb-1' : 'text-purple-700/70 hover:text-deep-violet'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center space-x-2 border-l border-purple-200 pl-4">
              <button
                onClick={() => setLanguage('pt')}
                className={`text-xs font-bold px-2 py-1 rounded transition-colors ${language === 'pt' ? 'bg-purple-100 text-deep-violet' : 'text-purple-400 hover:text-deep-violet'}`}
              >
                PT
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`text-xs font-bold px-2 py-1 rounded transition-colors ${language === 'es' ? 'bg-purple-100 text-deep-violet' : 'text-purple-400 hover:text-deep-violet'}`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs font-bold px-2 py-1 rounded transition-colors ${language === 'en' ? 'bg-purple-100 text-deep-violet' : 'text-purple-400 hover:text-deep-violet'}`}
              >
                EN
              </button>
            </div>

            <Link
              to="/servicos"
              className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-purple-200/50"
            >
              {t.navbar.bookSession}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <button onClick={() => setLanguage('pt')} className={`text-xs font-bold ${language === 'pt' ? 'text-deep-violet' : 'text-purple-300'}`}>PT</button>
              <span className="text-purple-200">|</span>
              <button onClick={() => setLanguage('es')} className={`text-xs font-bold ${language === 'es' ? 'text-deep-violet' : 'text-purple-300'}`}>ES</button>
              <span className="text-purple-200">|</span>
              <button onClick={() => setLanguage('en')} className={`text-xs font-bold ${language === 'en' ? 'text-deep-violet' : 'text-purple-300'}`}>EN</button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-deep-violet hover:text-gold transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-purple-50 py-4 px-4 space-y-1 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive(link.path) ? 'bg-purple-50 text-deep-violet' : 'text-purple-700/70 hover:bg-purple-50'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-4">
            <Link
              to="/servicos"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-purple-500 to-violet-600 text-white py-3 rounded-full font-medium"
            >
              {t.navbar.bookSession}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
