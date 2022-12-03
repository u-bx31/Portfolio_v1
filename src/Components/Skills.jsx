import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import IconsArrows from './icons/svgArows';
import skillsData from "./data/skillsData";

const containerVaritans = {
    hidden: {
        opacity: 0,
        y: -20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
            staggerChildren: .9,
        }
    }
}
const mainVaritans = {
    hidden: {
        opacity: 0,
        x: -20,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
            staggerChildren: 1.5,
            delayChildren : .9
        }
    }
}
const itemVaritans = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
        }
    }

}


const Skills = () => {
    const skills = [...skillsData]
    const [frontend, setFrontend] = useState([])
    const [backend, setBackend] = useState([])
    const [devTools, setDevTools] = useState([])


    useEffect(() => {

        setFrontend(skills.filter((items) => items.specialize === 'front-end'))
        setBackend(skills.filter((items) => items.specialize === 'back-end'))
        setDevTools(skills.filter((items) => items.specialize === 'dev-tools'))

    }, [])

    const lastCmd = useRef();

    return (
        <motion.div variants={containerVaritans} initial='hidden' whileInView='visible' viewport={{ once : true ,amount: 0.4 }} className="c_skills mb-5 py-lg-4 py-2 px-xl-5 px-1" >
            <motion.div variants={itemVaritans} className="c_headers d-flex flex-row align-items-center mb-3">
                <div className="c_headers_arrowIcon me-sm-2 me-1">
                    <IconsArrows />
                </div>
                <div className="c_headers_text">
                    <h3>Skills:</h3>
                </div>
            </motion.div>
            <motion.div variants={itemVaritans} className="d-flex justify-content-between flex-lg-row flex-column" whileInView='visible' viewport={{ once : true}}>
                <div className="c_skills_cmd-app w-100">
                    <div className="c_skills_cmd-app_top"></div>
                    <motion.div initial='hidden' whileInView={frontend.length && backend.length && devTools.length > 0 && "visible"} viewport={{ once : true}} variants={mainVaritans} className="c_skills_cmd-app_comands text-white p-3">
                        {frontend.map((items, index) => {
                            const { comand } = items;
                            return (<motion.div variants={itemVaritans} className="c-items">cd:\user\u-bx31 \{comand}</motion.div>)
                        })}
                        {backend.map((items, index) => {
                            const { comand } = items;
                            return (<motion.div variants={itemVaritans} className="c-items">cd:\user\u-bx31 \{comand}</motion.div>)
                        })}
                        {devTools.map((items, index) => {
                            const { comand } = items;
                            return (<motion.div variants={itemVaritans} className="c-items">cd:\user\u-bx31 \{comand}</motion.div>)
                        })}
                        <div ref={lastCmd}  />
                    </motion.div>
                </div>

                <motion.div initial='hidden' whileInView={frontend.length && backend.length && devTools.length > 0 && "visible"} viewport={{ once : true}} variants={mainVaritans} className="c_skills_commands-disp w-100 mt-lg-0 mt-4">
                    <motion.div variants={mainVaritans} className="c_skills_commands-disp_headrs px-lg-5 px-1">
                        <h2>Front-End</h2>
                        <div className="row justify-content-center text-center  ">{frontend.map((items, index) => {
                            const { img_skil } = items;
                            return (
                                <motion.div variants={itemVaritans} className="c_skills_commands-disp_headrs_items col-auto">
                                    <div className="c_skills_commands-disp_headrs_items_logos d-flex justify-content-center align-items-center p-2 m-1 ">
                                        <img src={img_skil} alt="" />
                                    </div>
                                </motion.div>
                            )
                        })}</div>
                        <h2>Back-End</h2>
                        <div className="row justify-content-center text-center ">{backend.map((items, index) => {
                            const { img_skil } = items;
                            return (<motion.div variants={itemVaritans} className="c_skills_commands-disp_headrs_items col-auto">
                                <div className="c_skills_commands-disp_headrs_items_logos d-flex justify-content-center align-items-center p-2 m-1  ">
                                    <img src={img_skil} alt="" />
                                </div>
                            </motion.div>)
                        })}</div>
                        <h2>Dev-tools</h2>
                        <div className="row justify-content-center text-center ">{devTools.map((items, index) => {
                            const { img_skil } = items;

                            return (<motion.div variants={itemVaritans} className="c_skills_commands-disp_headrs_items col-auto ">
                                <div className="c_skills_commands-disp_headrs_items_logos d-flex justify-content-center align-items-center p-2 m-1 ">
                                    <img src={img_skil} alt="" />
                                </div>
                            </motion.div>)
                        })}</div>

                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>


    );
}

export default Skills;