import { motion } from 'framer-motion';
import IconsArrows from './icons/svgArows'

const offVariants = {
    hidden: {
        opacity: 0,
        transition: {
            staggerChildren: .9
        }
    },
    visible: {
        opacity: 1,
        delay : 3,
        transition: {
            staggerChildren: 1,
            when : 'beforeChildren'
        }
    }
}

const elementVariants1 = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5
        }
    }
}
const elementVariants2 = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5
        }
    }
}
const About = () => {
    return (
        <>
            <motion.div  variants={offVariants} initial="hidden" whileInView='visible' viewport={{ once: true, amount: 0.7 }}className="d-flex flex-lg-row flex-column c-about text-white py-lg-5 py-2 my-lg-4 my-2 px-xl-5 px-1">
                <motion.div variants={elementVariants1}  className="c-about_headr w-100">
                    <div className="d-flex flex-row align-items-center c_headers">
                        <div className="c_headers_arrowIcon me-sm-2 me-1">
                            < IconsArrows />
                        </div>
                        <div className="c_headers_text">
                            <h3>about_me:</h3>
                        </div>
                    </div>

                </motion.div>
                <motion.div variants={elementVariants2} viewport={{ once: true, amount: 0.5 }} className="c-about_desc p-lg-5 p-3">
                    <p >
                        👋 hi ! i'm Oussama Labchari. I am a Junoir web Devloper with passion and curosity on building fully responsive webSties and web applications 
                        , i realy like building web sites because it always made me learn something new, 
                        i've started learning and studying web developemnt over 2 years now , and also Still obtaining more information and knowledge 
                        about new and different Technologies that've been used recently.<br/>
                        - if You want to know more about my experience and my education.<br/>These is My <button className='btn_link c-underLinebroder'>"Resume"</button>
                    </p>
                </motion.div>
            </motion.div>
        </>
    );
}

export default About;