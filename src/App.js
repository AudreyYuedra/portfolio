import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Techno from "./pages/Techno"
import Contact from "./pages/Contact"
import Error from "./pages/Error"

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/About",
      element: <About />,
   },
   {
      path: "/Projects",
      element: <Projects />,
   },
   {
      path: "/Techno",
      element: <Techno />,
   },
   {
      path: "/Contact",
      element: <Contact />,
   },
   {
      path: "/*",
      element: <Error />,
   },
])

export default function App() {
   return (
      <div>
         <Header />

         <RouterProvider router={router} />

         <Footer />
      </div>
   )
}
