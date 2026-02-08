
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
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
              Dedicados ao despertar da consciência e à cura através de frequências elevadas e amor incondicional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-deep-violet font-semibold mb-6">Navegação</h4>
            <ul className="space-y-4 text-sm text-purple-700/60">
              <li><Link to="/sobre" className="hover:text-spiritual-lavender transition-colors">Sobre Nós</Link></li>
              <li><Link to="/servicos" className="hover:text-spiritual-lavender transition-colors">Serviços</Link></li>
              <li><Link to="/produtos" className="hover:text-spiritual-lavender transition-colors">Produtos Digitais</Link></li>
              <li><Link to="/blog" className="hover:text-spiritual-lavender transition-colors">Blog & Artigos</Link></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-deep-violet font-semibold mb-6">Suporte</h4>
            <ul className="space-y-4 text-sm text-purple-700/60">
              <li><Link to="/contato" className="hover:text-spiritual-lavender transition-colors">Fale Conosco</Link></li>
              <li><a href="#" className="hover:text-spiritual-lavender transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-spiritual-lavender transition-colors">Termos de Uso</a></li>
              <li><Link to="/comunidade" className="hover:text-spiritual-lavender transition-colors">Comunidade</Link></li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-deep-violet font-semibold mb-6">Conecte-se</h4>
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
          <p>© 2024 Fabulous Healing. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0 italic">Desenvolvido com intenção e amor.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
