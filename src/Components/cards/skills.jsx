import { Circle } from "rc-progress";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SkillsCard = ({condition}) => {
  const [percent, setPercent] = useState(0);
  const ref = useRef(null)
  const isInView = useInView(ref,{
    margin: '-100px 0px',
  })

  useEffect(() => {
    if(isInView){
      setInterval(() => {
        setPercent(20)
      }, 2000);
    }
  }, [isInView])

  const itemVaritans2 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1, 
    },
}
  return (
    // add background to this cards with borer of 6 px and modified color of each img 
    <motion.div ref={ref} variants={itemVaritans2}  >
      <Circle style={{width : '120px',height: '120px'}} percent={percent} strokeWidth={4} strokeColor="#D3D3D3" />
    </motion.div>
  );
}

export default SkillsCard;