import Intro from "./Components/intro";
import { motion } from 'framer-motion'
import './Styles/css/Style.css'
import CustomNavbar from "./Components/NavBar";
import { useEffect } from "react";
import Hero from "./Components/Hero";
import SideIcons from "./Components/sideIcons";
import About from "./Components/About";

const content = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 4.5, duration: 2
    },
  },
};

const setBodyColor = (color) => {
  document.body.style.backgroundColor = `${color}`

}

const headrVariants ={
  hidden : {
    opacity :0
  },
  visible :{
    opacity :1,
    transition : {
      delay :3,
      duration :2,
      when : 'beforeChildren'

    }
  }
}
const mainVariants ={
  hidden : {
    opacity :0
  },
  visible :{
    opacity :1,
    transition : {
      delay :4,
      duration :2,
      when : 'beforeChildren',
    }
  }
}

function App() {
  useEffect(() => {
    setBodyColor('#222328');
    
  }, [])

  return (
    <>
      <Intro />
      <motion.div initial="hidden"
        animate="visible"
        variants={content} className="container-lg  App">
        <motion.header variants={headrVariants}><CustomNavbar /></motion.header> 
        <motion.main variants={mainVariants}>
          <Hero />
          <SideIcons />
          <About />
        </motion.main>
      </motion.div>
    </>

  );
}

export default App;
