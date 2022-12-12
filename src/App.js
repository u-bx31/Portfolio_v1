import Intro from "./Components/intro";
import { motion } from 'framer-motion'
import './Styles/css/Style.css'
import CustomNavbar from "./Components/NavBar";
import { useEffect, useState } from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Fotter";


const setBodyColor = (color) => {
  document.body.style.backgroundColor = `${color}`

}

const content = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 1

    },
  },
};


const itemsVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    }
  }
}

function App() {

  const [loading, setLoading] = useState(true)


  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 4000);
    setBodyColor('#222328');
  }, [])

  return (
    <>
      {loading ? <Intro /> : (
        <motion.div initial="hidden"
          animate="visible"
          variants={content} className="App">
          <motion.header variants={itemsVariants}><CustomNavbar /></motion.header>
          <motion.main variants={itemsVariants}>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </motion.main>
          <motion.footer variants={itemsVariants}><Footer /></motion.footer>
        </motion.div>
      )}
    </>

  );
}

export default App;
