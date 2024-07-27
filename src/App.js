import "./App.css"
import About from "./components/about/About"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Skills from "./components/skills/Skills"
import Qualification from "./components/qualification/Qualification"
import Work from "./components/work/Work"
import Testimonials from "./components/testimonials/Testimonials"

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
    </>
  )
}

export default App
