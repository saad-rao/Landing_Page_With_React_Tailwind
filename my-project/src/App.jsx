import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      once: true, // Animation only happens once on scroll
      offset: 100, // Trigger animations 100px before element is in view
    });
  }, []);

  return (
    <Router>

    <Navbar />
    <Hero />
    <WhatWeDo />
    <About/>
    <Services/>
    <Contact/>


    <Routes>
     {/* <Route path="/home" element={} /> */}
   <Route path='/about' element={ <About/>} />
   <Route path='/services' element={ <Services/>} />
    <Route path='/contact' element={<Contact/>} />
    
    </Routes>
    <Footer/>

    </Router>
  )
}

export default App
