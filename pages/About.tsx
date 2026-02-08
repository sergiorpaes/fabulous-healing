
import React from 'react';
import { Sparkles, Star, Sun, Shield, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Founder Hero - Lavender Luminous Theme */}
      <section className="py-24 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="w-full lg:w-1/2 relative">
              <div className="halo-glow">
                <div className="portal-border rounded-full bg-white/80 backdrop-blur-md relative z-10 overflow-hidden aspect-square flex items-center justify-center">
                  <img
                    src="/images/fabiola.jpg"
                    alt="Fabíola - Fabulous Healing"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-spiritual-lavender/10 mix-blend-soft-light pointer-events-none"></div>
                </div>
              </div>

              <div className="absolute -top-10 -left-10 w-32 h-32 border-2 border-spiritual-lavender/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-0 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-purple-50 hidden md:block z-20">
                <p className="text-deep-violet font-serif italic text-2xl">Fabíola</p>
                <p className="text-[10px] text-purple-400 uppercase tracking-widest font-bold">Guardiã de Frequências</p>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center space-x-2 text-spiritual-lavender font-bold tracking-widest text-xs uppercase mb-8">
                <Sparkles size={14} />
                <span>Nossa Guardiã</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif text-deep-violet leading-[0.9] mb-10">
                Luz e <span className="text-spiritual-lavender italic">Propósito</span>
              </h1>
              <p className="text-xl text-purple-800/70 mb-8 leading-relaxed font-light">
                Eu sou Fabíola, e minha missão é ser o canal para que você reencontre sua frequência mais elevada. A Fabulous Healing nasceu da necessidade de curar as raízes para que a alma possa finalmente florescer livre de amarras ancestrais.
              </p>
              <p className="text-lg text-purple-700/60 leading-relaxed mb-12 italic">
                Através da minha própria jornada de despertar, aprendi que a verdadeira cura acontece quando alinhamos a biologia com a vibração universal. O uso de cristais mestres, a radiestesia e a geometria sagrada são apenas as chaves para o portal que já existe dentro de você.
              </p>

              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h4 className="text-4xl font-serif font-bold text-deep-violet mb-1">15+</h4>
                  <p className="text-xs text-spiritual-lavender uppercase tracking-[0.2em] font-bold">Anos de Prática</p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif font-bold text-deep-violet mb-1">10k+</h4>
                  <p className="text-xs text-spiritual-lavender uppercase tracking-[0.2em] font-bold">Vidas Tocadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Sampled from Image 4's Background */}
      <section className="py-24 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-20 italic text-deep-violet">Valores do Portal</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: <Sun className="w-10 h-10 text-spiritual-lavender mb-6 mx-auto" />, title: 'Consciência', text: 'O despertar para a verdade que reside além dos véus da matéria.' },
              { icon: <Star className="w-10 h-10 text-spiritual-lavender mb-6 mx-auto" />, title: 'Sintonização', text: 'Ajustar sua vibração para as oitavas superiores de amor e luz.' },
              { icon: <Shield className="w-10 h-10 text-spiritual-lavender mb-6 mx-auto" />, title: 'Proteção', text: 'Blindar seu campo energético contra frequências dissonantes.' },
              { icon: <Heart className="w-10 h-10 text-spiritual-lavender mb-6 mx-auto" />, title: 'Unidade', text: 'Reconhecer que somos todos parte da mesma Semente Divina.' }
            ].map((v, i) => (
              <div key={i} className="group p-8 rounded-[3rem] bg-white/60 backdrop-blur-md border border-purple-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="transform group-hover:scale-110 transition-transform duration-500">{v.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-deep-violet mb-4">{v.title}</h3>
                <p className="text-purple-400 text-sm leading-relaxed font-light">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
