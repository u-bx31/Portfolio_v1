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
        {/* <!-- HTML Meta Tags --> */}
        <title>sdfdsf</title>
        <meta name="description" content="asdsadasd" />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="sdfdsf" />
        <meta itemprop="description" content="asdsadasd" />
        <meta itemprop="image" content="https://u-bx31.netlify.app/static/media/img_banner.f6b07343abbbd6eff1d5.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://u-bx31.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="sdfdsf" />
        <meta property="og:description" content="asdsadasd" />
        <meta property="og:image" content="https://u-bx31.netlify.app/static/media/img_banner.f6b07343abbbd6eff1d5.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="sdfdsf" />
        <meta name="twitter:description" content="asdsadasd" />
        <meta name="twitter:image" content="https://u-bx31.netlify.app/static/media/img_banner.f6b07343abbbd6eff1d5.png" />
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
