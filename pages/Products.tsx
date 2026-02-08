import React from 'react';
import { PlayCircle, BookOpen, Monitor, Download } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <section className="py-24 bg-gradient-to-b from-purple-50 to-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-serif text-purple-950 mb-6 italic">Cursos e Produtos Digitais</h1>
          <p className="text-xl text-purple-800/70 font-light">Leve a cura para onde você estiver e aprenda no seu próprio ritmo.</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Online Courses */}
          <div className="bg-white/60 backdrop-blur-md p-10 rounded-[3rem] shadow-xl shadow-purple-900/5 border border-purple-100/50 flex flex-col items-center text-center group hover:bg-white transition-all duration-500">
            <div className="w-20 h-20 bg-purple-50 rounded-3xl flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 transition-transform">
              <Monitor size={40} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-purple-900 mb-4">Cursos Online</h2>
            <p className="text-purple-800/60 mb-8 leading-relaxed font-light">
              Formações completas sobre cura energética, manifestação e desenvolvimento espiritual avançado.
            </p>
            <button className="mt-auto flex items-center text-purple-400 font-bold uppercase tracking-widest text-[10px] border-b border-purple-100 pb-1 hover:text-purple-600 hover:border-purple-400 transition-all">
              Acessar conteúdos <Download className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* Audio Meditations */}
          <div className="bg-white/60 backdrop-blur-md p-10 rounded-[3rem] shadow-xl shadow-purple-900/5 border border-purple-100/50 flex flex-col items-center text-center group hover:bg-white transition-all duration-500">
            <div className="w-20 h-20 bg-purple-50 rounded-3xl flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 transition-transform">
              <PlayCircle size={40} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-purple-900 mb-4">Meditações em Áudio</h2>
            <p className="text-purple-800/60 mb-8 leading-relaxed font-light">
              Uma biblioteca de áudios exclusivos com frequências binaurais para relaxamento e cura diária.
            </p>
            <button className="mt-auto flex items-center text-purple-400 font-bold uppercase tracking-widest text-[10px] border-b border-purple-100 pb-1 hover:text-purple-600 hover:border-purple-400 transition-all">
              Acessar conteúdos <Download className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* E-books */}
          <div className="bg-white/60 backdrop-blur-md p-10 rounded-[3rem] shadow-xl shadow-purple-900/5 border border-purple-100/50 flex flex-col items-center text-center group hover:bg-white transition-all duration-500">
            <div className="w-20 h-20 bg-purple-50 rounded-3xl flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 transition-transform">
              <BookOpen size={40} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-purple-900 mb-4">E-books Exclusivos</h2>
            <p className="text-purple-800/60 mb-8 leading-relaxed font-light">
              Guias práticos de autoconhecimento, rituais diários e desenvolvimento pessoal e espiritual.
            </p>
            <button className="mt-auto flex items-center text-purple-400 font-bold uppercase tracking-widest text-[10px] border-b border-purple-100 pb-1 hover:text-purple-600 hover:border-purple-400 transition-all">
              Acessar conteúdos <Download className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;