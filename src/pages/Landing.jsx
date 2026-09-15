import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import FeaturedProject from '../components/FeaturedProject.jsx';
import HowIBuild from '../components/HowIBuild.jsx';
import SelectedWork from '../components/SelectedWork.jsx';
import About from '../components/About.jsx';
import Currently from '../components/Currently.jsx';
import Contact from '../components/Contact.jsx';

const Landing = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Mohammed Ait Sidi Bah | Full Stack Developer';
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    const element = document.getElementById(location.hash.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <FeaturedProject />
      <HowIBuild />
      <SelectedWork />
      <About />
      <Currently />
      <Contact />
    </>
  );
};

export default Landing;
