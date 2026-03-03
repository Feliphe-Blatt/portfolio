import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Projects from './Projects'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Projects />
      <About />
      <Skills />
    </div>
  )
}

export default Home
