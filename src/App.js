import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro"
import Services from "./components/Services/services";
import Works from './components/Work/work';
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Intro/>
          <Services/>
          <Skills/>
          <Works/>
          <Contact/>
          <Footer/>
    </div>
  );
}

export default App;
