import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default Home;
