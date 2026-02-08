
import React from 'react';
import { Sparkles, Zap, Activity, Heart, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Activity className="w-12 h-12 text-spiritual-lavender" />,
      title: 'Protocolo Semente da Vida',
      description: 'Uma ferramenta poderosa de cura sistêmica focada em mães e filhos. Trabalhamos a limpeza de memórias uterinas e o fortalecimento de laços ancestrais através da radiestesia.',
      benefits: ['Harmonia familiar profunda', 'Cura de traumas hereditários', 'Alinhamento de propósitos'],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: <Zap className="w-12 h-12 text-spiritual-lavender" />,
      title: 'Reprogramação Energética com Cristais',
      description: 'Ajuste fino da sua frequência utilizando cristais mestres e geometrias sagradas para dissolver bloqueios físicos e emocionais instalados no campo bioenergético.',
      benefits: ['Vitalidade e disposição', 'Proteção contra energias densas', 'Clareza e foco mental'],
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: <Sparkles className="w-12 h-12 text-spiritual-lavender" />,
      title: 'Portal de Manifestação e Consciência',
      description: 'Mentoria vibracional personalizada para quem deseja cocriar uma nova realidade, alinhando pensamentos, sentimentos e ações na frequência da abundância.',
      benefits: ['Expansão de consciência', 'Poder de manifestação', 'Paz interior inabalável'],
      image: 'https://images.unsplash.com/photo-1499209974431-9dac3adaf471?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="animate-fadeIn pb-24">
      <section className="py-32 bg-gradient-to-r from-purple-800 to-violet-900 text-center text-white relative">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-6xl md:text-8xl font-serif mb-8 italic text-glow">Caminhos de Luz</h1>
          <p className="text-xl text-purple-200 font-light tracking-[0.3em] uppercase">Transformação através da frequência.</p>
        </div>
        <div className="absolute inset-0 bg-healing-aqua/10 pointer-events-none"></div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-40">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}>
              <div className="w-full md:w-1/2">
                <div className="mb-8 p-4 bg-purple-50 inline-block rounded-3xl border border-purple-100">{service.icon}</div>
                <h2 className="text-4xl md:text-6xl font-serif text-deep-violet mb-8 leading-tight italic">{service.title}</h2>
                <p className="text-purple-800/70 leading-relaxed mb-10 text-xl font-light">{service.description}</p>
                <div className="space-y-4 mb-12">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm p-5 rounded-3xl shadow-sm border border-purple-50">
                      <Heart className="text-spiritual-lavender w-5 h-5 fill-current" />
                      <span className="font-medium text-purple-900/80">{b}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-12 py-5 rounded-full font-bold shadow-xl shadow-purple-200/50 hover:-translate-y-1 transition-all">
                  Marcar minha jornada
                </button>
              </div>
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute -inset-6 bg-spiritual-lavender/30 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img src={service.image} alt={service.title} className="relative rounded-[4rem] shadow-2xl w-full h-[650px] object-cover border-8 border-white group-hover:scale-[1.02] transition-transform duration-700" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
