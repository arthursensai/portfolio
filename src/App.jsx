import './index.css';
import Header from './hooks/Header.jsx';
import Home from './hooks/Hero.jsx';
import About from './hooks/About.jsx';
import Skills from './hooks/Skills.jsx';
import Projects from './hooks/Projects.jsx';
import Contact from './hooks/Contact.jsx';
import Footer from './hooks/Footer.jsx';

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