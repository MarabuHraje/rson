import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string, isHash: boolean) => {
    e.preventDefault();
    
    if (isHash) {
      // It's a scroll link like #services
      if (currentPage !== 'home') {
        // If we are on a subpage, go home first, then try to scroll
        onNavigate('home');
        // Small timeout to allow render
        setTimeout(() => {
          const element = document.querySelector(target);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // We are already home, just scroll
        const element = document.querySelector(target);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // It's a page link like 'career'
      onNavigate(target);
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="bg-primary-card/80 text-text-muted py-2 text-sm hidden md:block border-b border-border">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:+420608033014" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} />
              <span>+420 608 033 014</span>
            </a>
            <a href="mailto:info@rson.cz" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={14} />
              <span>info@rson.cz</span>
            </a>
          </div>
          <div className="text-text-muted/80 text-xs uppercase tracking-wider font-semibold">
            VIZE I REVIZE ELEKTRO
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-primary/95 backdrop-blur-md shadow-lg shadow-black/20 py-3 border-b border-border' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" onClick={(e) => handleNavClick(e, 'home', false)} className="flex items-center gap-2 group">
            <div className="bg-accent text-text-dark font-bold text-2xl w-10 h-10 flex items-center justify-center rounded-lg group-hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20">
              R
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">RSON</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#home"
              onClick={(e) => handleNavClick(e, 'home', false)}
              className={`text-sm uppercase tracking-wide font-medium transition-colors hover:text-accent hover:drop-shadow-[0_0_8px_rgba(244,176,0,0.3)] ${currentPage === 'home' ? 'text-white' : 'text-text-main'}`}
            >
              Domů
            </a>
            <a 
              href="#services"
              onClick={(e) => handleNavClick(e, '#services', true)}
              className="text-text-main font-medium hover:text-accent transition-colors text-sm uppercase tracking-wide hover:drop-shadow-[0_0_8px_rgba(244,176,0,0.3)]"
            >
              Služby
            </a>
            <a 
              href="#about"
              onClick={(e) => handleNavClick(e, '#about', true)}
              className="text-text-main font-medium hover:text-accent transition-colors text-sm uppercase tracking-wide hover:drop-shadow-[0_0_8px_rgba(244,176,0,0.3)]"
            >
              Bateriová uložiště
            </a>
            <a 
              href="#"
              onClick={(e) => handleNavClick(e, 'career', false)}
              className={`text-sm uppercase tracking-wide font-medium transition-colors hover:text-accent hover:drop-shadow-[0_0_8px_rgba(244,176,0,0.3)] ${currentPage === 'career' ? 'text-accent' : 'text-text-main'}`}
            >
              Kariéra
            </a>
            
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact', true)}
              className="bg-accent hover:bg-accent-hover text-text-dark px-6 py-2.5 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(244,176,0,0.2)] hover:shadow-[0_0_25px_rgba(244,176,0,0.4)] transform hover:-translate-y-0.5 text-sm"
            >
              Nezávazná poptávka
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text-main p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-primary-card border-t border-border absolute w-full shadow-xl">
            <nav className="flex flex-col p-4 gap-2">
              <a 
                href="#home"
                onClick={(e) => handleNavClick(e, 'home', false)}
                className="text-text-main py-3 px-4 hover:bg-primary-light rounded-lg font-medium"
              >
                Domů
              </a>
              <a 
                href="#services"
                onClick={(e) => handleNavClick(e, '#services', true)}
                className="text-text-main py-3 px-4 hover:bg-primary-light rounded-lg font-medium"
              >
                Služby
              </a>
              <a 
                href="#about"
                onClick={(e) => handleNavClick(e, '#about', true)}
                className="text-text-main py-3 px-4 hover:bg-primary-light rounded-lg font-medium"
              >
                Bateriová uložiště
              </a>
              <a 
                href="#"
                onClick={(e) => handleNavClick(e, 'career', false)}
                className="text-text-main py-3 px-4 hover:bg-primary-light rounded-lg font-medium"
              >
                Kariéra
              </a>
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact', true)}
                className="bg-accent text-text-dark py-3 px-4 rounded-lg font-bold text-center mt-2"
              >
                Nezávazná poptávka
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;