import React from 'react';
import { motion } from 'framer-motion';
import './Brands.css';

import logoCasaCasual from '../assets/logos/casa_casual.jpg';
import logoIgorTramontina from '../assets/logos/igor_tramontina.png';
import logoJoaoDeBarro from '../assets/logos/joaodebarro.webp';
import logoRaGroup from '../assets/logos/ra-group.png';
import logoSoberano from '../assets/logos/soberano-muaythai.png';

const brands = [
  { name: 'Casa Casual', logo: logoCasaCasual },
  { name: 'Igor Tramontina', logo: logoIgorTramontina },
  { name: 'João de Barro', logo: logoJoaoDeBarro },
  { name: 'RA Group', logo: logoRaGroup },
  { name: 'Soberano Muay Thai', logo: logoSoberano },
];

const Brands: React.FC = () => {
  return (
    <section className="brands-section section-padding">
      <div className="container">
        <div className="brands-header text-center mb-10">
          <h2 className="section-title text-2xl md:text-3xl font-bold">Marcas que confiam em nós</h2>
          <p className="section-subtitle mt-2 text-gray-500">Parceiros que transformaram sua comunicação visual conosco.</p>
        </div>

        <div className="brands-grid">
          {brands.map((brand, index) => (
            <motion.div 
              key={index}
              className="brand-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={brand.logo} alt={brand.name} className="brand-logo" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
