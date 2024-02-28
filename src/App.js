import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Techno from "./pages/Techno"
import Contact from "./pages/Contact"

import "./App.css"

export default function App() {
   return (
      <div>
         <p>BLA BLA BLA !!!</p>

         <Router>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/About" element={<About />} />
               <Route path="/Projects" element={<Projects />} />
               <Route path="/Techno" element={<Techno />} />
               <Route path="/Contact" element={<Contact />} />
            </Routes>
         </Router>
      </div>
   )
}
