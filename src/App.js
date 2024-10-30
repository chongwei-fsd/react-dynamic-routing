import './App.css';
import Navbar from './Navbar';
import Contact from './Contact';
import ContactForm from './components/contactForm/ContactForm';
import Skills from './Skills';
import SkillsJavaScript from './SkillsJavaScript'
import SkillsJava from './SkillsJava';
import SkillsReact from './SkillsReact';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './Home';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact contactForm={<ContactForm/>}/>}/>
        
        <Route path="skills" element={<Skills />}>
          <Route path="javascript" element={<SkillsJavaScript />} />
          <Route path="java" element={<SkillsJava />} />
          <Route path="react" element={<SkillsReact />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
