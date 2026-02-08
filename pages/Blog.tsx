import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const articles = [
    {
      title: '5 Maneiras de Proteger sua Energia no Dia a Dia',
      category: 'Proteção Energética',
      date: '12 de Julho, 2024',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'A Ciência por trás das Frequências de Cura',
      category: 'Consciência',
      date: '08 de Julho, 2024',
      image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Como a Meditação pode Transformar seu Subconsciente',
      category: 'Mindfulness',
      date: '02 de Julho, 2024',
      image: 'https://images.unsplash.com/photo-1499209974431-9dac3adaf471?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="animate-fadeIn">
      <section className="py-24 bg-gradient-to-b from-purple-50 to-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-serif text-purple-950 mb-6 italic">Conteúdos para sua Evolução</h1>
          <p className="text-xl text-purple-800/70 font-light">Sabedoria e práticas para nutrir sua jornada espiritual.</p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {articles.map((art, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-80 overflow-hidden rounded-[3rem] mb-8 shadow-xl shadow-purple-900/5 border-4 border-white">
                <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-purple-400">
                  {art.category}
                </div>
              </div>
              <div className="flex items-center space-x-6 text-xs text-purple-300 mb-4">
                <span className="flex items-center"><Calendar size={14} className="mr-2" /> {art.date}</span>
                <span className="flex items-center"><User size={14} className="mr-2" /> Fabíola</span>
              </div>
              <h3 className="text-3xl font-serif font-bold text-purple-950 mb-4 group-hover:text-purple-400 transition-colors leading-tight">
                {art.title}
              </h3>
              <p className="text-purple-800/60 text-sm mb-8 leading-relaxed font-light line-clamp-2">
                Descubra técnicas fundamentais para manter seu equilíbrio emocional mesmo em ambientes desafiadores e estressantes.
              </p>
              <button className="flex items-center text-purple-400 font-bold uppercase tracking-widest text-[10px] hover:translate-x-2 transition-transform">
                Ler Artigo <ArrowRight size={14} className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;