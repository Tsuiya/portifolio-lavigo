import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const differentials = [
    "Foco em conversão e resultados reais",
    "Estética cinematográfica de alto padrão",
    "Atendimento para todo o Brasil",
    "Processo criativo ágil e profissional"
  ];

  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1605371924599-2d0365da26f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Lavigo Studios Bastidores" 
              className="about-img"
              loading="lazy"
            />
            <div className="about-badge">
              <span className="badge-number">+5</span>
              <span className="badge-text">Anos de<br/>Experiência</span>
            </div>
          </motion.div>

          <div className="about-content">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nós somos a <span className="highlight">Lavigo Studios</span>
            </motion.h2>
            
            <motion.p 
              className="about-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Muito além de vídeos bonitos. Somos especialistas em transformar a atenção do seu público em desejo e ação. Criamos narrativas visuais que posicionam marcas como líderes de mercado.
            </motion.p>
            
            <motion.p 
              className="about-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Com uma abordagem premium e um olhar clínico para o digital, desenvolvemos conteúdos verticais, institucionais e coberturas fotográficas que geram resultados extraordinários.
            </motion.p>

            <motion.ul 
              className="about-list"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {differentials.map((item, index) => (
                <li key={index} className="about-list-item">
                  <CheckCircle2 className="about-icon" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
