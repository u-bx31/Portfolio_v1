import { motion } from "framer-motion";

const ArrowVariants = {
    hidden : {
        opacity :1,
        y : 0
    },
    visible :{
        opacity :1,
        y : [0 ,1.5],
        transition :{
            y :{
                yoyo :Infinity,
                duration : 1,
            },
        }
    }
}

const ArrowDown = () => {
    return (
        <>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  initial='hidden' animate='visible' d="M25 43.75C35.3553 43.75 43.75 35.3553 43.75 25C43.75 14.6447 35.3553 6.25 25 6.25C14.6447 6.25 6.25 14.6447 6.25 25C6.25 35.3553 14.6447 43.75 25 43.75Z" stroke="white" />
                <motion.path variants={ArrowVariants}  d="M31.25 17.1875L25 23.4375L18.75 17.1875" stroke="white" />
                <motion.path variants={ArrowVariants} d="M31.25 28.125L25 34.375L18.75 28.125" stroke="white" />
            </svg>
        </>
    );
}

export default ArrowDown;