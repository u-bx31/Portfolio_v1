import { motion } from "framer-motion";

const containerVaritans = {
    hidden: {
        opacity: 0,
        y: -20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .8,
            staggerChildren: .7,
        }
    }
}

const ContainerMotion = ({ children,className,amount = 0.4 }) => {
    return (
        <motion.div variants={containerVaritans} initial='hidden' whileInView='visible' viewport={{ once: true, amount: {amount} }} className={className}> 
            {children}
        </motion.div>
    );
}

export default ContainerMotion;