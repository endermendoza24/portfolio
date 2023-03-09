import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import {WhatsappButton} from "./components/WhatsappButton";
import './App.css';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
        <WhatsappButton phoneNumber={'82072291'}/>
      <Footer />
    </div>
  );
}

export default App;
