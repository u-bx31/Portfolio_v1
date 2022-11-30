import { motion } from "framer-motion";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import img2 from '../images/undraw_programming.svg'
import ArrowDown from './icons/svgArrowScroll'

const heroVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 2,
            staggerChildren: 1.5,
            when: 'beforeChildren'
        }
    }
}
const imgVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
    }
}
const HeadrsVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,

        transition: {
            duration: 1.5,
            staggerChildren: 1,
            when: 'beforeChildren'
        }
    }
}
const titlesVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5,
        }
    }
}
const titlesVariants2 = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5,
        }
    }
}
const waveVariants = {
    visible: {
        rotate: [-10, 10],
        transition: {
            rotate: {
                yoyo: 2,
                duration: 1
            }
        }
    }
}

const Hero = () => {
    return (
        <>
            <motion.div variants={heroVariants} initial='hidden' animate='visible' className="d-flex c-hero justify-content-between flex-lg-row-reverse text-lg-start text-center flex-column align-items-center pt-lg-5 mt-lg-2 pt-4 ">
                <motion.div variants={imgVariants} className="w-100 text-center">
                    <img src={img2} alt="" className="c-hero_img1" />
                </motion.div>
                <motion.div variants={HeadrsVariants} className="c-hero_headrs w-100 m-xl-5  ">
                    <motion.div variants={titlesVariants} className="c-hero_headrs_gretings text-center rounded-5 mb-4 mx-auto mx-lg-0">
                        <div className="d-flex justify-content-center m-0 p-sm-0 p-2 align-items-center  ">
                            <motion.h3 variants={waveVariants}>👋</motion.h3>
                            <h3 >Hello! I'm Oussama</h3>
                        </div>

                    </motion.div>
                    <motion.div variants={titlesVariants2} className="c-hero_headrs_profesion ms-lg-4 ">
                        <TypeAnimation
                            sequence={[
                                6000,
                                "I'm a App Developer", // Types 'One'
                                3000,
                                "I'm a Web Developer", // Types 'One'
                            ]}
                            wrapper="h1"
                            cursor={true}
                            speed={1}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
            <div className="w-100 text-center p-0 m-0 c-arrow pt-lg-5 ">
                <ArrowDown />
            </div>
        </>

    );
}

export default Hero;