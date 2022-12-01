import Intro from "./Components/intro";
import { motion } from 'framer-motion'
import './Styles/css/Style.css'
import CustomNavbar from "./Components/NavBar";
import { useEffect, useState } from "react";
import Hero from "./Components/Hero";
import SideIcons from "./Components/sideIcons";
import About from "./Components/About";

const setBodyColor = (color) => {
  document.body.style.backgroundColor = `${color}`

}

const content = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
       duration: 2,
       staggerChildren: 5
    },
  },
};


// const headrVariants = {
//   hidden: {
//     opacity: 0
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 2,
//       when: 'beforeChildren'

//     }
//   }
// }
const mainVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
       staggerChildren: 5
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
      {loading ? <Intro /> : (<motion.div initial="hidden"
        animate="visible"
        variants={content} className="container-lg  App">
        <motion.header ><CustomNavbar /></motion.header>
        <motion.main variants={mainVariants}>
          <Hero />
          <SideIcons />
          <About />
        </motion.main>
      </motion.div>)}


    </>

  );
}

export default App;
