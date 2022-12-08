import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const IconsMotion = ({ children, className, condition }) => {
    const [mobile, setMobile] = useState(false);
    const iconsMotion_desktopVariants = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 1.3,
                delayChildren: 1.5
            }
        }
    }
    const iconsMotion_mobileVariants = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            }
        }
    }
    useEffect(()=>{
        if(window.innerWidth <= 991){
            setMobile(true)
        }
    },[])
    return (
        <motion.div initial='hidden' whileInView={condition && "visible"} viewport={{ amount: 0.4, once: true }} variants={mobile ? iconsMotion_mobileVariants : iconsMotion_desktopVariants} className={className}>
            {children}
        </motion.div>
    );
}

export default IconsMotion;