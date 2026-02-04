import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-primary relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="lg:w-5/12">
            <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">Kontakt</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Napište nám</h3>
            <p className="text-text-muted mb-8 text-lg leading-relaxed">
              Pokud máte jakýkoliv dotaz nebo potřebujete naši pomoc, neváhejte nás kontaktovat. Rádi Vám pomůžeme s jakýmkoliv problémem. Vaše spokojenost je pro nás na prvním místě. Snažíme se být naprosto objektivní a najít vhodné řešení.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-card border border-border rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <div className="text-sm text-text-muted font-medium uppercase mb-1">Máte rychlý dotaz?</div>
                  <div className="text-text-main text-sm mb-1">Neváhejte a volejte. Pokud budeme vědět, rádi hned odpovíme.</div>
                  <a href="tel:+420608033014" className="text-2xl font-bold text-white hover:text-accent transition-colors">+420 608 033 014</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-card border border-border rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <div className="text-sm text-text-muted font-medium uppercase mb-1">E-mail</div>
                  <a href="mailto:info@rson.cz" className="text-xl font-bold text-white hover:text-accent transition-colors">info@rson.cz</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-7/12 bg-primary-light border border-border rounded-2xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <MessageSquare className="text-accent" />
              Kontaktní formulář
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-main mb-2">Jméno a příjmení</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-primary-card border border-border text-white placeholder-text-muted/50 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="Jan Novák"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-main mb-2">Telefon</label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg bg-primary-card border border-border text-white placeholder-text-muted/50 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="+420 608 033 014"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-main mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-primary-card border border-border text-white placeholder-text-muted/50 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  placeholder="vas@email.cz"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-text-main mb-2">Mám zájem o</label>
                <select 
                  id="service"
                  className="w-full px-4 py-3 rounded-lg bg-primary-card border border-border text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                >
                  <option value="" className="bg-primary-card">Vyberte službu</option>
                  <option value="fve" className="bg-primary-card">FVE a Bateriová uložiště</option>
                  <option value="elektro" className="bg-primary-card">Elektroinstalace</option>
                  <option value="revize" className="bg-primary-card">Revize</option>
                  <option value="posudky" className="bg-primary-card">Soudní posudky</option>
                  <option value="jine" className="bg-primary-card">Jiné / Dotaz</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-main mb-2">Zpráva</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-primary-card border border-border text-white placeholder-text-muted/50 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Popište stručně váš požadavek..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-text-dark font-bold py-4 rounded-lg transition-all text-lg shadow-[0_0_15px_rgba(244,176,0,0.2)] hover:shadow-[0_0_25px_rgba(244,176,0,0.4)] transform hover:-translate-y-0.5"
              >
                Odeslat poptávku
              </button>
              
              <p className="text-xs text-text-muted text-center">
                Odesláním formuláře souhlasíte se zpracováním osobních údajů.
              </p>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;