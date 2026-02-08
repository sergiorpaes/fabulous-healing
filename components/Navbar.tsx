
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Comunidade', path: '/comunidade' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/60 backdrop-blur-xl border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <Sparkles className="w-8 h-8 text-spiritual-lavender group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-2xl font-serif font-semibold tracking-tight text-deep-violet">
                Fabulous <span className="text-gold">Healing</span>
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive(link.path) ? 'text-deep-violet border-b-2 border-gold pb-1' : 'text-purple-700/70 hover:text-deep-violet'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/servicos"
              className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-purple-200/50"
            >
              Agendar Sessão
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
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
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive(link.path) ? 'bg-purple-50 text-deep-violet' : 'text-purple-700/70 hover:bg-purple-50'
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
              Agendar Sessão
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
