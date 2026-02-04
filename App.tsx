import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Career from './components/Career';
import Certificates from './components/Certificates';
import Privacy from './components/Privacy';

type Page = 'home' | 'career' | 'certificates' | 'privacy';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-primary text-text-main font-sans selection:bg-accent selection:text-text-dark">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <Services />
            <About />
            <Contact />
          </>
        )}
        
        {currentPage === 'career' && <Career />}
        {currentPage === 'certificates' && <Certificates />}
        {currentPage === 'privacy' && <Privacy />}
      </main>

      {/* Only show Contact section on subpages if it's not the home page (where it's already included) */}
      {currentPage !== 'home' && (
         <div className="border-t border-border">
           <Contact />
         </div>
      )}

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;