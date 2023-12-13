import { motion } from "framer-motion";
const mainVaritans = {
    hidden: {
        opacity: 0,
        y: -20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .8,
            staggerChildren: 1.1,
            delayChildren: 1.3
        }
    }
}
const MainMotion = ({ children, className, condition }) => {
    return (
        <motion.div initial='hidden' whileInView={condition && "visible"} viewport={{ amount: 0.3, once: true }} variants={mainVaritans} className={className}>
            {children}
        </motion.div>
    );
}

export default MainMotion;