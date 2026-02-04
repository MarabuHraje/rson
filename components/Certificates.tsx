import React from 'react';
import { Award, ShieldCheck, FileCheck } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-primary min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Certifikáty a Oprávnění</h1>
          <p className="text-xl text-text-muted mb-12 border-l-4 border-accent pl-6">
            Odbornost a bezpečnost jsou u nás na prvním místě. Disponujeme všemi potřebnými oprávněními pro provádění revizí a elektroinstalačních prací.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cert 1 */}
            <div className="bg-primary-card border border-border p-6 rounded-xl flex flex-col items-center text-center hover:border-accent/50 transition-all">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4 text-accent">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">TIČR Oprávnění</h3>
              <p className="text-text-muted text-sm mb-4">
                Oprávnění Technické inspekce České republiky k provádění revizí vyhrazených elektrických zařízení.
              </p>
              <span className="mt-auto inline-block bg-primary-light px-3 py-1 rounded text-xs text-text-muted border border-border">Ev. č: 1234/56/78</span>
            </div>

            {/* Cert 2 */}
            <div className="bg-primary-card border border-border p-6 rounded-xl flex flex-col items-center text-center hover:border-accent/50 transition-all">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4 text-accent">
                <FileCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Vyhláška 194/2022 Sb.</h3>
              <p className="text-text-muted text-sm mb-4">
                (Dříve vyhl. 50/1978 Sb.) Osvědčení o odborné způsobilosti v elektrotechnice pro řízení činnosti.
              </p>
              <span className="mt-auto inline-block bg-primary-light px-3 py-1 rounded text-xs text-text-muted border border-border">§ 8 - Řízení činnosti</span>
            </div>

            {/* Cert 3 */}
            <div className="bg-primary-card border border-border p-6 rounded-xl flex flex-col items-center text-center hover:border-accent/50 transition-all">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4 text-accent">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Montáž FVE</h3>
              <p className="text-text-muted text-sm mb-4">
                Profesní kvalifikace Elektromontér fotovoltaických systémů (26-014-H).
              </p>
              <span className="mt-auto inline-block bg-primary-light px-3 py-1 rounded text-xs text-text-muted border border-border">MPO Certifikace</span>
            </div>
          </div>

          <div className="mt-16 bg-primary-light/50 p-8 rounded-2xl border border-dashed border-border text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Potřebujete doložit naši kvalifikaci?</h3>
            <p className="text-text-muted mb-6">
              Kopie našich oprávnění a certifikátů přikládáme automaticky ke každé revizní zprávě a smluvní dokumentaci. 
              Na vyžádání vám je rádi zašleme e-mailem.
            </p>
            <a href="mailto:info@rson.cz" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 rounded-lg font-semibold transition-colors">
              Vyžádat dokumenty
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;