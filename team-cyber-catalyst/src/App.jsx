import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import CaseStudies from './components/CaseStudies'
import Blog from './components/Blog'
import News from './components/News'
import Resources from './components/Resources'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import SearchBar from './components/SearchBar'

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Services />
        <About />
        <Features />
        <Testimonials />
        <Team />
        <CaseStudies />
        <Blog />
        <News />
        <Resources />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
      <SearchBar />
    </div>
  )
}

export default App
