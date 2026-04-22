import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <span className="logo-lavigo">LAVIGO</span>
          <span className="logo-studios">STUDIOS</span>
        </Link>

        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/projetos" className={location.pathname.includes('/projetos') ? 'active' : ''}>Projetos</Link></li>
            <li><Link to="/contato" className={location.pathname === '/contato' ? 'active' : ''}>Contato</Link></li>
          </ul>
          <Link to="/contato" className="btn btn-primary nav-cta">Orçamento</Link>
        </nav>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projetos">Projetos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
        <div className="mobile-menu-footer">
          <Link to="/contato" className="btn btn-primary">Solicitar Orçamento</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
