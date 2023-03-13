import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { MySkills } from './components/MySkills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { WhatsappButton } from "./components/WhatsappButton";
import { Education } from "./components/Education";
import { Courses } from "./components/Courses";
import './App.css';
import { Footer } from './components/Footer';
import ContactForm from './components/ContactForm';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/*<Skills />*/}
      <MySkills />
      <Education />
      <Courses />
      <Projects />
      {/* <ContactForm /> */}
      <Contact />
      <WhatsappButton phoneNumber={'82072291'} />
      <Footer />
    </div>
  );
}

export default App;
