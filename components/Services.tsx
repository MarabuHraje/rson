import React from 'react';
import { Zap, Sun, CloudLightning, Plug, Scale, BookOpen, Ruler, Thermometer } from 'lucide-react';
import { ServiceItem } from '../types';

const serviceData: ServiceItem[] = [
  {
    id: 'fve',
    title: 'Fotovoltaika na klíč',
    description: 'Kompletní dodávka, montáž a instalace FVE, bateriových uložišť a SVR na klíč. Včetně projektové dokumentace a součinnosti se stavebním úřadem.',
    icon: Sun,
  },
  {
    id: 'cerpadla',
    title: 'Tepelná čerpadla',
    description: 'Dodávka a montáž moderních tepelných čerpadel pro úsporné vytápění vašich objektů.',
    icon: Thermometer,
  },
  {
    id: 'elektro',
    title: 'Elektroinstalace',
    description: 'Kompletní elektroinstalační práce, přípojky, hlavní a podružné rozvaděče pro domy i průmysl.',
    icon: Zap,
  },
  {
    id: 'hromosvody',
    title: 'Hromosvody',
    description: 'Instalace a revize hromosvodů pro zajištění bezpečnosti objektů před úderem blesku.',
    icon: CloudLightning,
  },
  {
    id: 'revize',
    title: 'Revize sítí a spotřebičů',
    description: 'Revize pro distribuční sítě ČEZ, PRE, EGD. Pravidelné revize elektrospotřebičů a zařízení.',
    icon: Plug,
  },
  {
    id: 'skoleni',
    title: 'Školení 250/2022 Sb.',
    description: 'Provádíme odborná školení z novely zákona 250/2022 Sb. o bezpečnosti práce v souvislosti s provozem technických zařízení.',
    icon: BookOpen,
  },
  {
    id: 'posudky',
    title: 'Soudní znalecké posudky',
    description: 'Vypracování odborných soudních znaleckých posudků v oboru elektrotechniky řešené soudním znalcem.',
    icon: Scale,
  },
  {
    id: 'mereni',
    title: 'Rekonstrukce měření',
    description: 'Rekonstrukce elektroměrových měření, včetně úprav pro potřeby fotovoltaických elektráren.',
    icon: Ruler,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-primary relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">Naše služby</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Vaše vize jsou pro nás zásadní</h3>
          <p className="text-text-muted text-lg">
            Jsme firma zabývající se kompletní dodávkou, montáží a instalací. Budeme vaše vize s vámi rádi konzultovat a uděláme maximum, abychom je splnili k Vaší spokojenosti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((service) => (
            <div 
              key={service.id} 
              className="bg-primary-card rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300 border border-border hover:border-accent/30 group flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-primary-light border border-border rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:border-accent transition-all duration-300 shadow-inner shrink-0">
                <service.icon className="text-accent w-6 h-6 group-hover:text-text-dark transition-colors duration-300" />
              </div>
              <h4 className="text-lg font-bold text-text-main mb-2 group-hover:text-accent transition-colors">{service.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed mb-4 group-hover:text-text-main transition-colors flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;