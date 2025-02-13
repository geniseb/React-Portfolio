import './Styles.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Layout from './Views/Pages/Layout';
import Home from './Views/Pages/Home';
import About from './Views/Pages/About';
import Projects from './Views/Pages/Projects';
import Skills from './Views/Pages/Skills';
import Contact from './Views/Pages/Contact';



const App = () => {
  return (

<BrowserRouter>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
        
      </Route>
    </Routes>
</BrowserRouter>

  )
}

export default App
