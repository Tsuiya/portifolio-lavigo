import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import './VideoPortfolio.css';

const videos = [
  {
    id: 1,
    title: 'Clínica Tramontina',
    category: 'Saúde',
    src: 'https://res.cloudinary.com/drczznkji/video/upload/v1776289409/AirFlow_Legendado_ndqzhs.mp4',
    thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776289409/AirFlow_Legendado_ndqzhs.jpg',
  },
  {
    id: 2,
    title: 'Casa Cambuí',
    category: 'Imobiliário',
    src: 'https://res.cloudinary.com/drczznkji/video/upload/v1776289409/CasaCambui_legendado_kj2cqz.mp4',
    thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776289409/CasaCambui_legendado_kj2cqz.jpg',
  },
  {
    id: 3,
    title: 'Bordado Expo',
    category: 'Eventos',
    src: 'https://res.cloudinary.com/drczznkji/video/upload/v1776289409/Expo_bordado_legendado_gnzvl6.mp4',
    thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776289409/Expo_bordado_legendado_gnzvl6.jpg',
  },
  {
    id: 4,
    title: 'Agência Formato',
    category: 'Conteúdo',
    src: 'https://res.cloudinary.com/drczznkji/video/upload/v1776289409/agencia_formato_autoral_hzrvnh.mp4',
    thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776289409/agencia_formato_autoral_hzrvnh.jpg',
  },
  {
    id: 5,
    title: 'Bebê Gourmet',
    category: 'Comercial',
    src: 'https://res.cloudinary.com/drczznkji/video/upload/v1776289410/bebe_gourmet_final_zp6hj9.mp4',
    thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776289410/bebe_gourmet_final_zp6hj9.jpg',
  },
  {
    id: 6,
    title: 'FAQ Institucional',
    category: 'Institucional',
    src: 'https://res.cloudinary.com/drczznkji/video/upload/v1776289410/Faq_30s_ekkxl1.mp4',
    thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776289410/Faq_30s_ekkxl1.jpg',
  }
];

const VideoCard = ({ video, index }: { video: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented", e));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div 
      className="video-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="video-wrapper">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className={`video-thumbnail ${isHovered ? 'hidden' : ''}`}
          loading="lazy"
        />
        <video 
          ref={videoRef}
          src={video.src}
          className={`video-player ${isHovered ? 'visible' : ''}`}
          muted
          loop
          playsInline
          preload="none"
        />
        <div className="video-overlay">
          <div className="play-icon-wrapper">
            <Play fill="white" size={24} />
          </div>
          <div className="video-info">
            <span className="video-category">{video.category}</span>
            <h3 className="video-title">{video.title}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const VideoPortfolio: React.FC = () => {
  return (
    <section className="video-portfolio section-padding">
      <div className="container">
        <div className="section-header text-center flex flex-col items-center">
          <h2 className="section-title">Portfólio em Movimento</h2>
          <p className="section-subtitle">
            Vídeos verticais de alta retenção projetados para impactar sua audiência no primeiro segundo.
          </p>
        </div>

        <div className="video-grid">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/projetos" className="btn btn-outline">Ver todos os vídeos</Link>
        </div>
      </div>
    </section>
  );
};

export default VideoPortfolio;
