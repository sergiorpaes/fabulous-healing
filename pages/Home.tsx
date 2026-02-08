
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Heart, Star, Zap, Shield, Sun } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section - Soft Cosmic Mood */}
      <section className="relative h-[95vh] flex items-center overflow-hidden bg-purple-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000" 
            alt="Mountain Meditation"
            className="w-full h-full object-cover opacity-50 mix-blend-lighten"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-violet-800/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 mb-8 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
              <Sparkles className="text-spiritual-lavender w-4 h-4" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">Portal Fabulous Healing</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif text-white leading-[0.95] mb-8 drop-shadow-lg">
              Sente que algo te impede de <span className="text-spiritual-lavender italic text-glow">florescer?</span>
            </h1>
            
            <div className="bg-white/10 backdrop-blur-lg border-l-4 border-spiritual-lavender p-8 rounded-r-3xl mb-12 max-w-xl">
              <h3 className="text-2xl font-serif text-white mb-2 italic">Vibrational therapy is the key</h3>
              <p className="text-purple-50 font-light leading-relaxed">
                Não espere a vida se tornar insuportável. Se você sente que precisa de mudança, <span className="text-white font-medium underline decoration-spiritual-lavender/50">agora é o momento!</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/servicos"
                className="bg-white text-purple-900 px-10 py-5 rounded-full font-bold shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all duration-300 text-center"
              >
                Iniciar Evolução
              </Link>
              <Link
                to="/sobre"
                className="group flex items-center justify-center px-10 py-5 border border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Conheça Fabíola
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
              <div className="halo-glow max-w-md mx-auto">
                <div className="portal-border rounded-full p-4 bg-white/50 backdrop-blur-md shadow-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1000" 
                    alt="Espírito de Luz" 
                    className="rounded-full w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-violet-600 to-purple-700 text-white p-8 rounded-3xl shadow-2xl animate-float">
                <Sun className="w-8 h-8 mb-4 text-healing-aqua" />
                <p className="font-serif text-xl italic">Acesse sua luz original</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-7xl font-serif text-deep-violet mb-10 leading-tight">
                Reconecte-se com sua <span className="text-spiritual-lavender italic">frequência original</span>
              </h2>
              <p className="text-purple-800/80 text-lg leading-relaxed mb-10 font-light">
                Utilizamos o <span className="font-semibold text-deep-violet underline decoration-gold/30">Protocolo de Evolução com a Semente da Vida</span> para dissolver bloqueios e fortalecer os laços familiares e espirituais. Através da radiestesia e cura vibracional, devolvemos o equilíbrio ao seu campo bioenergético.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <Zap className="text-spiritual-lavender" />, title: 'Equilíbrio Energético', desc: 'Ajuste de chakras' },
                  { icon: <Shield className="text-spiritual-lavender" />, title: 'Proteção Áurica', desc: 'Limpeza de campo' },
                  { icon: <Heart className="text-spiritual-lavender" />, title: 'Cura Ancestral', desc: 'Laços familiares' },
                  { icon: <Star className="text-spiritual-lavender" />, title: 'Manifestação', desc: 'Poder criativo' }
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
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[4rem] p-12 md:p-20 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative z-10">
                <span className="text-spiritual-lavender font-bold tracking-widest text-xs uppercase mb-6 block">Protocolo Exclusivo</span>
                <h2 className="text-4xl md:text-6xl font-serif mb-8 italic text-glow">Fortalece los Lazos Familiares</h2>
                <p className="text-purple-100/70 text-lg leading-relaxed mb-10 font-light">
                  Conheça o protocolo de evolução para mães e filhos com a Semente da Vida. Uma jornada de cura sistêmica que utiliza a geometria sagrada para harmonizar relações e curar feridas ancestrais.
                </p>
                <Link to="/servicos" className="inline-block bg-white text-deep-violet px-12 py-5 rounded-full font-bold hover:bg-spiritual-lavender hover:text-white transition-all shadow-xl">
                  Saiba como funciona
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-healing-aqua/20 blur-[100px] rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
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
