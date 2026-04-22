import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/projetos/:slug" element={<ProjectDetails />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
