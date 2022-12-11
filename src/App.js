import Intro from "./Components/intro";
import { motion } from 'framer-motion'
import './Styles/css/Style.css'
import img_banner from './images/img_banner.png'
import CustomNavbar from "./Components/NavBar";
import { useEffect, useState } from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Fotter";
import { Helmet } from "react-helmet";


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
      <Helmet>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" data-react-helmet="true" />
        <meta property="og:url" content="https://u-bx31.netlify.app/" data-react-helmet="true" />
        <meta property="og:title" content="Oussama Labchari" data-react-helmet="true" />
        <meta
          property="og:description"
          content="Junoir web Devloper with passion on building fully responsive webSties and web applications"
          data-react-helmet="true"
        />
        <meta property="og:image" content={img_banner} data-react-helmet="true" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://u-bx31.netlify.app/" />
        <meta property="twitter:title" content="Oussama Labchari" />
        <meta property="twitter:description" content="Junoir web Devloper with passion  on building fully responsive webSties and web applications" />
        <meta property="twitter:image" content={img_banner}></meta>
      </Helmet>
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
