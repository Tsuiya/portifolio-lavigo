import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const project = formData.get('project') as string;
    const userMessage = formData.get('message') as string;

    const phoneNumber = '5516991609339';
    
    let text = `Olá, vim pelo site e gostaria de solicitar um orçamento.\n\n`;
    text += `*Nome:* ${name}\n`;
    
    let projectName = '';
    switch(project) {
      case 'video-vertical': projectName = 'Vídeo Vertical (Reels/TikTok)'; break;
      case 'video-institucional': projectName = 'Vídeo Institucional / Comercial'; break;
      case 'fotografia': projectName = 'Cobertura Fotográfica'; break;
      case 'casamento': projectName = 'Casamento'; break;
      case 'outro': projectName = 'Outro'; break;
      default: projectName = project;
    }
    
    text += `*Tipo de projeto:* ${projectName}\n`;
    
    if (userMessage) {
      text += `\n*Mensagem:* ${userMessage}`;
    }

    const encodedMessage = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="contact-page section-padding">
      <div className="container">
        <div className="contact-grid">
          
          <motion.div 
            className="contact-info-section"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Vamos criar <br/><span className="highlight">juntos</span></h1>
            <p className="contact-subtitle">
              Preencha o formulário ou chame direto no WhatsApp. 
              Estamos prontos para entender seu projeto e propor a melhor solução audiovisual.
            </p>

            <div className="contact-methods">
              <div className="method-item">
                <div className="method-icon"><Phone size={24} /></div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>(16) 99160-9339</p>
                </div>
              </div>
              <div className="method-item">
                <div className="method-icon"><Mail size={24} /></div>
                <div>
                  <h4>E-mail</h4>
                  <p>daniel@lavigo.com.br</p>
                </div>
              </div>
              <div className="method-item">
                <div className="method-icon"><MapPin size={24} /></div>
                <div>
                  <h4>Atendimento</h4>
                  <p>Todo o Brasil (Base em SP)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-section"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-card">
              <h3>Solicitar Orçamento</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nome completo</label>
                  <input type="text" id="name" name="name" placeholder="Seu nome" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="whatsapp">WhatsApp</label>
                  <input type="tel" id="whatsapp" name="whatsapp" placeholder="(00) 00000-0000" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="project">Tipo de projeto</label>
                  <select id="project" name="project" required>
                    <option value="">Selecione uma opção</option>
                    <option value="video-vertical">Vídeo Vertical (Reels/TikTok)</option>
                    <option value="video-institucional">Vídeo Institucional / Comercial</option>
                    <option value="fotografia">Cobertura Fotográfica</option>
                    <option value="casamento">Casamento</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mensagem (opcional)</label>
                  <textarea id="message" name="message" rows={4} placeholder="Conte um pouco sobre o que você precisa..."></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary w-full flex justify-center items-center gap-2">
                  <MessageSquare size={20} />
                  Enviar para WhatsApp
                </button>
                <p className="form-note text-center mt-4 text-sm text-gray-500">
                  Você será redirecionado para o WhatsApp para continuarmos o atendimento.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
