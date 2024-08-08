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
import ScrollUp from "./components/scrollup/ScrollUp"

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
