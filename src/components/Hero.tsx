import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="hero-title">
              Vídeos que transformam <span className="highlight">atenção</span> em clientes
            </h1>
            <p className="hero-subtitle">
              Especialistas em produção audiovisual de alto padrão. 
              Posicione sua marca com sofisticação e converta mais através de conteúdo estratégico.
            </p>
            
            <div className="hero-actions">
              <Link to="/projetos" className="btn btn-primary hero-btn">
                Ver projetos
              </Link>
              <Link to="/contato" className="btn btn-outline hero-btn flex items-center gap-2">
                <Play size={18} />
                Solicitar orçamento
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="hero-visual">
          <motion.div 
            className="video-mockup"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="mockup-frame">
              {/* This simulates a vertical video player */}
              <video 
                src="https://res.cloudinary.com/drczznkji/video/upload/v1776289409/agencia_formato_autoral_hzrvnh.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                preload="none"
                className="mockup-video"
              />
            </div>
            
            {/* Floating decorative elements */}
            <motion.div 
              className="floating-badge badge-1"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              Qualidade Premium
            </motion.div>
            
            <motion.div 
              className="floating-badge badge-2"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              Alto Impacto
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
