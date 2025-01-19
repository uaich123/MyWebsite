import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import { HashRouter, Routes, Route } from "react-router-dom"; 
import Portfolio from './pages/Portfolio.jsx'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </HashRouter>
  )
}

export default App;