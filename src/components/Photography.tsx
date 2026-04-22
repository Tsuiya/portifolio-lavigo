import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Photography.css';

const photos = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/drczznkji/image/upload/v1776883920/LR-166_l3shfu.jpg',
    title: 'Editorial Casamento',
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/drczznkji/image/upload/v1776883921/LR-526_ftq6pv.jpg',
    title: 'Detalhes',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/drczznkji/image/upload/v1776883920/LR-177_fvwywr.jpg',
    title: 'Emoção',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/drczznkji/image/upload/v1776883921/LR-184_lwzz6p.jpg',
    title: 'Casal',
    colSpan: 2,
    rowSpan: 1,
  }
];

const Photography: React.FC = () => {
  return (
    <section className="photography-section section-padding">
      <div className="container">
        <div className="photography-header">
          <div className="photography-text">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Histórias em cada frame
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Fotografia de casamento e editorial. Capturamos a essência e a emoção do seu momento com uma estética atemporal e sofisticada.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/projetos" className="btn btn-primary">Ver galeria completa</Link>
          </motion.div>
        </div>

        <div className="photography-gallery">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className={`gallery-item span-col-${photo.colSpan} span-row-${photo.rowSpan}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <img src={photo.url} alt={photo.title} className="gallery-img" loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-title">{photo.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photography;
