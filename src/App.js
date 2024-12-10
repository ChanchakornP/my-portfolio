import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Navigate from './components/Navigate';
import './App.css';
import { Container, Image } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className="home-section" id="home">
      <div className="app-container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div >
    </Container>
  );
}

export default App;
