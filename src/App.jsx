import './index.css';
import Header from './components/Header.jsx';
import Home from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => {

  return (
   <>
     <Header></Header>
     <Home></Home>
     <About></About>
     <Skills></Skills>
     <Projects></Projects>
     <Contact></Contact>
     <Footer></Footer>
   </>
  )
}

export default App;
