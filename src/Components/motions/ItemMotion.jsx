import { motion } from "framer-motion";

const itemVaritans = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: .9
        }
    }
}

const ItemMotion = ({ children,className }) => {
    
    return (
        <motion.div variants={itemVaritans} className={className}> 
            {children}
        </motion.div>
    );
}

export default ItemMotion;