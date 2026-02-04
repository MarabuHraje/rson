import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string, isHash: boolean) => {
    e.preventDefault();
    if (isHash) {
       onNavigate('home');
       setTimeout(() => {
          const element = document.querySelector(target);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
       }, 100);
    } else {
      onNavigate(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-light text-text-muted pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-accent text-text-dark font-bold text-xl w-8 h-8 flex items-center justify-center rounded">
                R
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">RSON</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-text-muted">
              Váš spolehlivý partner pro revize a technickou správu. Bezpečnost a kvalita jsou naší prioritou již od roku 2008.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Rychlé odkazy</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home', false)} className="hover:text-accent transition-colors">Domů</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services', true)} className="hover:text-accent transition-colors">Služby</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about', true)} className="hover:text-accent transition-colors">O nás</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'career', false)} className="hover:text-accent transition-colors">Kariéra</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact', true)} className="hover:text-accent transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Služby</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" onClick={(e) => handleLinkClick(e, '#services', true)} className="hover:text-accent transition-colors">Revize elektro</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, '#services', true)} className="hover:text-accent transition-colors">Revize plynu</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, '#services', true)} className="hover:text-accent transition-colors">Tlakové nádoby</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, '#services', true)} className="hover:text-accent transition-colors">Požární bezpečnost</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Legislativa</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Obchodní podmínky</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'privacy', false)} className="hover:text-accent transition-colors">Ochrana osobních údajů</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'certificates', false)} className="hover:text-accent transition-colors">Certifikáty</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} RSON. Všechna práva vyhrazena.
          </p>
          <p className="text-sm text-text-muted">
            Profesionální revizní služby.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;