import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Modal from './Modal';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <footer className="relative overflow-hidden text-white">
      {/* Cosmic Banner + Wave Footer */}
      <div
        className="relative bg-cover bg-center pt-12 pb-8 sm:pt-16 sm:pb-10"
        style={{ backgroundImage: "url('/assets/footer-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a0e4d]/35 via-[#2a0e4d]/25 to-[#220a3f]/90 pointer-events-none" />

        {/* Centered Brand Showcase */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pb-10 sm:pb-12">
          <Link to="/" className="inline-flex flex-col items-center group">
            <img
              src="/logo.png"
              alt="Fabíola Piovesan | Inuá"
              className="h-24 sm:h-28 w-auto object-contain mb-4 drop-shadow-[0_0_24px_rgba(255,255,255,0.4)] group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(24,8,48,0.85)]">
              Fabíola Piovesan <span className="italic text-gold">| Inuá</span>
            </span>
          </Link>

          <div className="mt-3 flex items-center justify-center gap-3 max-w-md mx-auto">
            <span className="h-px flex-1 bg-gold/80" />
            <span className="text-[11px] sm:text-xs font-medium tracking-[0.28em] uppercase text-white/95 drop-shadow">
              {t.footer.channelerSubtitle}
            </span>
            <span className="h-px flex-1 bg-gold/80" />
          </div>
        </div>

        {/* Bottom Purple-to-Aqua Bar */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#2c0e52]/90 via-[#431978]/90 to-[#186884]/90 backdrop-blur-md border border-healing-aqua/40 shadow-[0_0_35px_rgba(36,169,178,0.25)] px-6 py-5 sm:px-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            {/* Centered Brand */}
            <Link to="/" className="flex flex-col sm:flex-row items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Fabíola Piovesan | Inuá"
                className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="text-center sm:text-left">
                <p className="text-xl sm:text-2xl font-serif font-semibold tracking-tight text-white leading-tight">
                  Fabíola Piovesan <span className="text-gold">| Inuá</span>
                </p>
                <p className="text-[10px] sm:text-[11px] tracking-[0.26em] uppercase text-purple-100/85 mt-0.5">
                  {t.footer.channelerSubtitle}
                </p>
              </div>
            </Link>

            {/* Centered Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/fabiola.inua/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
              >
                <Instagram size={22} />
              </a>

              <a
                href="https://www.youtube.com/@fabiola_inua"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-11 h-11 rounded-xl bg-[#e62117] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
              >
                <Youtube size={22} />
              </a>

              <a
                href="https://wa.me/34607373858"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-xl bg-[#25D366] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.344 5l-1.406 5.156 5.281-1.375c1.469.797 3.109 1.219 4.75 1.219 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.813 14.125c-.25.703-1.438 1.344-1.984 1.422-.516.078-1.156.109-1.875-.125-.438-.141-.984-.328-1.703-.641-2.984-1.297-4.938-4.313-5.094-4.516-.141-.203-1.219-1.625-1.219-3.094s.766-2.188 1.047-2.484c.281-.297.609-.375.813-.375.203 0 .406 0 .578.016.188.016.438-.078.688.531.25.609.859 2.094.938 2.25.078.156.125.344.031.547-.109.203-.156.328-.313.516-.156.188-.328.406-.469.547-.156.156-.313.328-.141.625.172.297.781 1.297 1.688 2.109 1.156 1.031 2.141 1.359 2.438 1.5.297.141.469.125.641-.078.172-.203.75-.875.953-1.172.203-.297.406-.25.672-.156.266.094 1.703.813 2 .953.297.141.484.219.563.344.078.125.078.719-.172 1.422z" />
                </svg>
              </a>

              <a
                href="mailto:the.fabulous.healing@gmail.com"
                aria-label="Email"
                className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white shadow-md hover:bg-white/25 hover:scale-110 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Strip */}
      <div className="bg-[#1e0939] border-t border-white/10 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-purple-200/75 text-xs">
          <p>{t.footer.rights}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-gold transition-colors"
            >
              {t.footer.privacy}
            </button>
            <span className="text-white/25">|</span>
            <button
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-gold transition-colors"
            >
              {t.footer.terms}
            </button>
            {t.footer.developedBy && (
              <>
                <span className="text-white/25">|</span>
                <span className="italic">{t.footer.developedBy}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title={t.footer.legal?.privacyTitle || ''}
      >
        {t.footer.legal?.privacyContent}
      </Modal>

      <Modal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title={t.footer.legal?.termsTitle || ''}
      >
        {t.footer.legal?.termsContent}
      </Modal>
    </footer>
  );
};

export default Footer;