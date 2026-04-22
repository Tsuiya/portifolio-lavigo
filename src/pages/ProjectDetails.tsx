import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import './ProjectDetails.css';

import { projects } from './Projects';

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();

  // Fetch data based on the slug
  const project = projects.find(p => p.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="project-details-page section-padding text-center">
        <div className="container">
          <h2>Projeto não encontrado</h2>
          <Link to="/projetos" className="btn btn-primary mt-4">
            Voltar para Projetos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-details-page section-padding">
      <div className="container">
        <Link to="/projetos" className="back-link flex items-center gap-2 mb-8">
          <ArrowLeft size={20} />
          <span>Voltar para Projetos</span>
        </Link>

        <div className="project-header">
          <motion.div 
            className="project-title-area"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="project-category-badge">{project.category}</span>
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-client-name">Cliente: {project.client}</p>
          </motion.div>
        </div>

        <div className="project-content-grid">
          <motion.div 
            className="project-media"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.media ? (
              <div className="project-media-gallery">
                {project.media.map((item, index) => (
                  <div key={index} className="project-media-item mb-8">
                    {item.type === 'video' ? (
                      <video 
                        src={item.src} 
                        controls 
                        poster={(item as any).thumbnail} 
                        className="project-main-video" 
                        preload="metadata"
                      />
                    ) : (
                      <img 
                        src={item.src} 
                        alt={`${project.title} ${index + 1}`} 
                        className="project-main-image rounded-xl w-full object-cover" 
                        loading="lazy"
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="project-video-container">
                <video 
                  src={project.videoSrc} 
                  controls 
                  poster={project.thumbnail}
                  className="project-main-video"
                  preload="metadata"
                />
              </div>
            )}
          </motion.div>

          <motion.div 
            className="project-info-panel"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="info-block">
              <h3>Sobre o Projeto</h3>
              <p>{project.description}</p>
            </div>
            
            <div className="info-block">
              <h3>Objetivo</h3>
              <p>{project.objective}</p>
            </div>
            
            <div className="info-block highlight-block">
              <h3>Resultado</h3>
              <p>{project.result}</p>
            </div>
            
            <div className="project-cta-area mt-8">
              <p className="mb-4">Quer resultados parecidos para sua marca?</p>
              <Link to="/contato" className="btn btn-primary w-full text-center">
                Solicitar Orçamento
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
