import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Landing from './pages/Landing.jsx';
import WaraqCaseStudy from './pages/WaraqCaseStudy.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects/waraq" element={<WaraqCaseStudy />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
