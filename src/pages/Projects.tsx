import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';

const projects = [
  {
    id: 'casamento-larissa-rodolfo',
    title: 'Casamento Larissa e Rodolfo',
    client: 'Larissa e Rodolfo',
    category: 'Casamentos',
    thumbnail: 'https://res.cloudinary.com/drczznkji/image/upload/v1776883920/LR-166_l3shfu.jpg',
    videoSrc: '', // No main video, but we use media array
    type: 'Fotografia',
    description: 'Cobertura fotográfica emocionante e inesquecível do Casamento de Larissa e Rodolfo.',
    objective: 'Eternizar os melhores momentos e os detalhes mais importantes desta data tão especial.',
    result: 'Um álbum completo cheio de sorrisos e momentos espontâneos.',
    media: [
      { type: 'image', src: 'https://res.cloudinary.com/drczznkji/image/upload/v1776883920/LR-166_l3shfu.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/drczznkji/image/upload/v1776883921/LR-184_lwzz6p.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/drczznkji/image/upload/v1776883920/LR-177_fvwywr.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/drczznkji/image/upload/v1776883921/LR-526_ftq6pv.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/drczznkji/image/upload/v1776883921/LR-531_opfumk.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/drczznkji/image/upload/v1776883921/LR-519_xd4ihm.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/drczznkji/image/upload/v1776883921/LR-524_vmqaoa.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/drczznkji/image/upload/v1776883920/LR-517_iq69yj.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/drczznkji/image/upload/v1776883920/LR-239_scwv3m.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/drczznkji/image/upload/v1776883920/LR-510_qql2js.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/drczznkji/image/upload/v1776883920/LR-236_ckaomh.jpg' }
    ]
  },
  {
    id: 'vila-dos-sonhos',
    title: 'Anúncios Vila dos Sonhos',
    client: 'Vila dos Sonhos',
    category: 'Comercial',
    thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776882128/video02_fpyegg.jpg',
    videoSrc: 'https://res.cloudinary.com/drczznkji/video/upload/v1776882128/video02_fpyegg.mp4',
    type: 'Vídeo',
    description: 'Série de anúncios em vídeo produzidos para a Vila dos Sonhos.',
    objective: 'Atrair clientes potenciais através de mídias pagas utilizando vídeos de alta conversão.',
    result: 'Aumento significativo na taxa de cliques e geração de leads.',
    media: [
      { type: 'video', src: 'https://res.cloudinary.com/drczznkji/video/upload/v1776289417/video01_uoet4m.mp4', thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776289417/video01_uoet4m.jpg' },
      { type: 'video', src: 'https://res.cloudinary.com/drczznkji/video/upload/v1776289415/video04_bsa751.mp4', thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776289415/video04_bsa751.jpg' },
      { type: 'video', src: 'https://res.cloudinary.com/drczznkji/video/upload/v1776882128/video02_fpyegg.mp4', thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776882128/video02_fpyegg.jpg' },
      { type: 'video', src: 'https://res.cloudinary.com/drczznkji/video/upload/v1776882127/video03_n6jpez.mp4', thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776882127/video03_n6jpez.jpg' }
    ]
  },
  {
    id: 'deusa-sex-shop',
    title: 'Conteúdo para Redes Sociais',
    client: 'Deusa Sex Shop',
    category: 'Social Media',
    thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776884669/Loja_ru4q6i.jpg',
    videoSrc: 'https://res.cloudinary.com/drczznkji/video/upload/v1776884669/Loja_ru4q6i.mp4',
    type: 'Vídeo',
    description: 'Conteúdos curtos e dinâmicos para Reels e TikTok focados em apresentação de produtos.',
    objective: 'Engajar a audiência nas redes sociais e direcionar tráfego para a loja.',
    result: 'Vídeos com milhares de visualizações orgânicas e maior interação nos comentários.',
    media: [
      { type: 'video', src: 'https://res.cloudinary.com/drczznkji/video/upload/v1776884669/Loja_ru4q6i.mp4', thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776884669/Loja_ru4q6i.jpg' },
      { type: 'video', src: 'https://res.cloudinary.com/drczznkji/video/upload/v1776885112/Chamada_beckxm.mp4', thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776885112/Chamada_beckxm.jpg' }
    ]
  },
  {
    id: 'clinica-tramontina',
    title: 'Clínica Tramontina',
    client: 'Igor Tramontina',
    category: 'Saúde',
    thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776289409/AirFlow_Legendado_ndqzhs.jpg',
    videoSrc: 'https://res.cloudinary.com/drczznkji/video/upload/v1776289409/AirFlow_Legendado_ndqzhs.mp4',
    type: 'Vídeo',
    description: 'Vídeo focado em atrair a atenção com cortes dinâmicos e mostrar o profissionalismo da Clínica Tramontina.',
    objective: 'Aumentar autoridade e gerar consultas na clínica de saúde.',
    result: 'Crescimento no número de agendamentos e forte presença digital.'
  },
  {
    id: 'casa-cambui',
    title: 'Casa Cambuí',
    client: 'RA Construtora',
    category: 'Imobiliário',
    thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776289409/CasaCambui_legendado_kj2cqz.jpg',
    videoSrc: 'https://res.cloudinary.com/drczznkji/video/upload/v1776289409/CasaCambui_legendado_kj2cqz.mp4',
    type: 'Vídeo',
    description: 'Apresentação imobiliária de alto padrão da Casa Cambuí.',
    objective: 'Destacar o luxo e exclusividade do imóvel para potenciais compradores.',
    result: 'Atração de leads qualificados e alto engajamento.'
  },
  {
    id: 'bordado-expo',
    title: 'Bordado Expo',
    client: 'Prefeitura de Ibitinga',
    category: 'Eventos',
    thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776289409/Expo_bordado_legendado_gnzvl6.jpg',
    videoSrc: 'https://res.cloudinary.com/drczznkji/video/upload/v1776289409/Expo_bordado_legendado_gnzvl6.mp4',
    type: 'Vídeo',
    description: 'Cobertura em vídeo para a Bordado Expo, captando a essência do evento.',
    objective: 'Promover e divulgar a feira de bordados, atraindo expositores e visitantes para a próxima edição.',
    result: 'Vídeo altamente compartilhado por expositores e visitantes.'
  },
  {
    id: 'lavigo-autoral',
    title: 'Formato Autoral',
    client: 'Lavigo',
    category: 'Conteúdo',
    thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776289409/agencia_formato_autoral_hzrvnh.jpg',
    videoSrc: 'https://res.cloudinary.com/drczznkji/video/upload/v1776289409/agencia_formato_autoral_hzrvnh.mp4',
    type: 'Vídeo',
    description: 'Conteúdo autoral da Lavigo Studios.',
    objective: 'Divulgação dos serviços da agência.',
    result: 'Aumento na percepção de valor da marca.'
  },
  {
    id: 'joao-de-barro',
    title: 'Conteúdo para Redes Sociais',
    client: 'João de Barro',
    category: 'Comercial e Institucional',
    thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776289410/bebe_gourmet_final_zp6hj9.jpg',
    videoSrc: '',
    type: 'Vídeo',
    description: 'Produção de comercial dinâmico para a marca Bebê Gourmet e vídeo institucional com foco em esclarecimento de dúvidas frequentes.',
    objective: 'Atrair público interessado em alimentação saudável e otimizar o atendimento com FAQs.',
    result: 'Melhoria na qualidade dos vídeos, maior autoridade e constância nas postagens.',
    media: [
      { type: 'video', src: 'https://res.cloudinary.com/drczznkji/video/upload/v1776289410/bebe_gourmet_final_zp6hj9.mp4', thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776289410/bebe_gourmet_final_zp6hj9.jpg' },
      { type: 'video', src: 'https://res.cloudinary.com/drczznkji/video/upload/v1776289410/Faq_30s_ekkxl1.mp4', thumbnail: 'https://res.cloudinary.com/drczznkji/video/upload/so_0/v1776289410/Faq_30s_ekkxl1.jpg' }
    ]
  }
];

export { projects };

const Projects: React.FC = () => {
  return (
    <div className="projects-page section-padding">
      <div className="container">
        <div className="page-header text-center">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nossos Projetos
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore nosso portfólio de vídeos e coberturas fotográficas.
          </motion.p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/projetos/${project.id}`} className="project-link">
                <div className="project-thumbnail-wrapper">
                  <img src={project.thumbnail} alt={project.title} className="project-thumbnail" loading="lazy" />
                  <div className="project-type-badge">{project.type}</div>
                </div>
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-client">Cliente: {project.client}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
