import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
const itemVaritans2 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: .9,
            staggerChildren : 1
            
        }
    }
}

const ItemMotion2 = ({ children, className,condition }) => {
    const [ mobile , setMobile] = useState(false)
    useEffect(()=>{
        if(window.innerWidth <= 991){
            setMobile(true)
        }
    },[])
    if (mobile) {
        return (
            <motion.div variants={itemVaritans2} initial='hidden' whileInView={"visible"} viewport={{ amount: 0.3, once: true }} className={className}>
                {children}
            </motion.div>
        );
    }
    else {
        return (
            <div className={className}>
                {children}
            </div>
        );
    }

}

export default ItemMotion2;