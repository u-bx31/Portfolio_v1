import Intro from "./Components/intro";
import { motion } from 'framer-motion'
import './Styles/css/Style.css'
import CustomNavbar from "./Components/NavBar";
import { useEffect } from "react";

const content = {
  hidden : {opacity : 0 },
  visible: {
    opacity : 1,
    // transition: { delay : 5 , duration : 2 },
  },
};

const setBodyColor = (color)=>{
  document.body.style.backgroundColor = `${color}` 
}

function App() {

  useEffect(()=>{
    setBodyColor('#222328');
  },[])

  return (
    <>
      {/* <Intro /> */}
      <motion.div initial="hidden"
        animate="visible"
        variants={content} className="container-lg App">
          <CustomNavbar />

      </motion.div>
    </>

  );
}

export default App;
