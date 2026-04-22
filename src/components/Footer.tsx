import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Video, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="logo footer-logo">
              <span className="logo-lavigo">LAVIGO</span>
              <span className="logo-studios">STUDIOS</span>
            </Link>
            <p className="footer-desc">
              Produtora de conteúdos especializada em branding e posicionamento de marca.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram"><Camera size={20} /></a>
              <a href="#" className="social-link" aria-label="YouTube"><Video size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">Links Rápidos</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projetos">Portfólio</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">Serviços</h4>
            <ul className="footer-links">
              <li><Link to="/projetos">Vídeos Verticais</Link></li>
              <li><Link to="/projetos">Vídeos Institucionais</Link></li>
              <li><Link to="/projetos">Cobertura Fotográfica</Link></li>
              <li><Link to="/projetos">Casamentos</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">Contato</h4>
            <ul className="footer-contact">
              <li><Phone size={18} /> <span>(16) 99160-9339</span></li>
              <li><Mail size={18} /> <span>daniel@lavigo.com.br</span></li>
              <li><MapPin size={18} /> <span>Atendimento em todo o Brasil</span></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Lavigo Studios. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
