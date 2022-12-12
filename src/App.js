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
        {/* open graph meta tags */}
        <meta property="og:image" content={`https://github.com/u-bx31/Portfolio_v1/blob/main/src/images/img_banner.png?raw=true`} />
        <meta property="og:image:alt" content="This image contains a screen shots of website" />
        <meta property="og:url" content="https://u-bx31.netlify.app/" />
        <meta property="og:title" content="Oussama Labchari | Web Developer" />
        <meta property="og:description" content="Hi! I am oussama Labchari a junior web developer and this my first portfolio" />
        <meta property="og:type" content="website" />

        {/* twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oussama Labchari | Web Developer" />
        <meta name="twitter:description" content="Hi! I am oussama Labchari a junior web developer and this my first portfolio" />
        <meta name="twitter:image" content={`https://github.com/u-bx31/Portfolio_v1/blob/main/src/images/img_banner.png?raw=true`} />
        <meta name="twitter:image:alt" content="This image contains a screen shots of website"/>
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
