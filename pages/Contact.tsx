import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(t.contact.form.topics[0]);
  const [message, setMessage] = useState('');
  const [botField, setBotField] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    setTopic(t.contact.form.topics[0]);
  }, [language, t.contact.form.topics]);

  const buildWhatsappUrl = () => {
    const text = [
      `Olá Fabíola, envio esta mensagem através do site:`,
      `*${t.contact.form.name}:* ${name}`,
      `*${t.contact.form.email}:* ${email}`,
      `*${t.contact.form.topic}:* ${topic}`,
      `*${t.contact.form.message}:* ${message}`,
    ].join('\n');
    return `https://wa.me/34607373858?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const params = new URLSearchParams();
      params.append('form-name', 'contact');
      params.append('bot-field', botField);
      params.append('name', name);
      params.append('email', email);
      params.append('topic', topic);
      params.append('message', message);

      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setTopic(t.contact.form.topics[0]);
    setMessage('');
    setStatus('idle');
  };

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
              <h4 className="text-purple-900 font-bold mb-6 uppercase tracking-widest text-xs">Siga a nossa jornada:</h4>
              <div className="flex space-x-8">
                <a href="https://www.instagram.com/fabiola.inua/" target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-700/60 hover:text-purple-400 transition-colors">
                  <Instagram size={24} className="mr-3" /> @fabiola.inua
                </a>
                <a href="https://www.youtube.com/@fabiola_inua" target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-700/60 hover:text-purple-400 transition-colors">
                  <Youtube size={24} className="mr-3" /> Fabíola Piovesan | Inuá
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-xl p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-purple-900/5 border border-purple-100/50">
            {status === 'success' ? (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 text-deep-violet flex items-center justify-center mx-auto">
                  <CheckCircle2 size={34} />
                </div>
                <h3 className="text-3xl font-serif text-deep-violet italic">
                  {t.contact.form.successTitle}
                </h3>
                <p className="text-purple-900/75 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                  {t.contact.form.successText}
                </p>
                <div className="pt-2 flex flex-col items-center gap-4">
                  <a
                    href={buildWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all"
                  >
                    <span>{t.contact.form.whatsappButton}</span>
                    <ArrowRight size={18} />
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-medium text-purple-500 hover:text-deep-violet underline transition-colors"
                  >
                    {t.contact.form.sendAnother}
                  </button>
                </div>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out:
                    <input name="bot-field" value={botField} onChange={(e) => setBotField(e.target.value)} />
                  </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-purple-400 mb-3 ml-2">{t.contact.form.name}</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-6 py-4 rounded-3xl bg-purple-50/30 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                      placeholder={t.contact.form.name}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-purple-400 mb-3 ml-2">{t.contact.form.email}</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-4 rounded-3xl bg-purple-50/30 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                      placeholder={t.contact.form.email}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-purple-400 mb-3 ml-2">{t.contact.form.topic}</label>
                  <select
                    name="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-6 py-4 rounded-3xl bg-purple-50/30 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all text-purple-900"
                  >
                    {t.contact.form.topics.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-purple-400 mb-3 ml-2">{t.contact.form.message}</label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-6 py-4 rounded-3xl bg-purple-50/30 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                    placeholder={t.contact.form.message}
                  />
                </div>

                {status === 'error' && (
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm text-center space-y-3">
                    <p>{t.contact.form.errorText}</p>
                    <a
                      href={buildWhatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-semibold"
                    >
                      <span>{t.contact.form.whatsappButton}</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full btn-luminous py-5 rounded-full font-bold disabled:opacity-60"
                >
                  {status === 'submitting' ? t.contact.form.sending : t.contact.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;