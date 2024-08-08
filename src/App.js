import "./App.css"
import About from "./components/about/About"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Skills from "./components/skills/Skills"
import Qualification from "./components/qualification/Qualification"
import Work from "./components/work/Work"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
