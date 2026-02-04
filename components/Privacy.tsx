import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-primary min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto prose prose-invert prose-yellow">
          <h1 className="text-4xl font-bold text-white mb-8">Zásady ochrany osobních údajů</h1>
          
          <div className="text-text-muted space-y-6 leading-relaxed">
            <p>
              Společnost RSON (dále jen "Správce") zpracovává osobní údaje v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR).
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Jaké údaje zpracováváme</h3>
            <p>
              Zpracováváme pouze údaje nezbytné pro plnění smlouvy, poskytování služeb a komunikaci se zákazníky:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Jméno a příjmení</li>
              <li>Fakturační údaje (IČO, DIČ, adresa)</li>
              <li>Kontaktní údaje (e-mail, telefon)</li>
              <li>Technické údaje o místě instalace/revize</li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Účel zpracování</h3>
            <p>
              Údaje zpracováváme za účelem:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Vyřízení vaší poptávky a objednávky.</li>
              <li>Vystavení revizních zpráv (zákonná povinnost).</li>
              <li>Vedení účetnictví.</li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Doba uložení</h3>
            <p>
              Osobní údaje uchováváme po dobu nezbytnou k výkonu práv a povinností vyplývajících ze smluvního vztahu a dále po dobu vyplývající z obecně závazných právních předpisů (např. archivace revizních zpráv po dobu 10 let).
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Vaše práva</h3>
            <p>
              Máte právo požadovat od nás přístup k vašim osobním údajům, jejich opravu nebo výmaz, popřípadě omezení zpracování. Máte také právo vznést námitku proti zpracování.
            </p>

            <div className="bg-primary-card border border-border p-6 rounded-lg mt-8">
              <p className="mb-0 text-sm">
                Pro uplatnění vašich práv nás kontaktujte na: <br />
                <a href="mailto:info@rson.cz" className="text-accent font-bold hover:underline">info@rson.cz</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;