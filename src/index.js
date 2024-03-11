import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ReactDOM from "react-dom/client"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Techno from "./pages/Techno"
import Contact from "./pages/Contact"
import Error from "./pages/Error"

import "./styles/style.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
   <Router>
      <Header />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/About" element={<About />} />
         <Route path="/Projects" element={<Projects />} />
         <Route path="/Techno" element={<Techno />} />
         <Route path="/Contact" element={<Contact />} />
         <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
   </Router>
)
