import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import IconsArrows from './icons/svgArows';
import img_html from '../images/Logos/html5-plain.svg';
import img_css from '../images/Logos/css3-plain.svg';
import img_bootstrap from '../images/Logos/bootstrap-original.svg';
import img_csharp from '../images/Logos/csharp-line.svg';
import img_dotnet from '../images/Logos/dot-net-plain-wordmark.svg';
import img_git from '../images/Logos/git-original.svg';
import img_js from '../images/Logos/javascript-original.svg';
import img_sql from '../images/Logos/microsoftsqlserver-plain-wordmark.svg';
import img_react from '../images/Logos/react-original-wordmark.svg';
import img_sass from '../images/Logos/sass-original.svg';
import img_github from '../images/Logos/github-original-wordmark.svg';
import img_vscode from '../images/Logos/vscode-original.svg';
import img_vs from '../images/Logos/visualstudio-plain.svg';

const skills = [
    {
        specialize: 'front-end',
        comand: ' cd HTML',
        img_skil: img_html,
    },
    {
        specialize: 'front-end',
        comand: 'cd JavaScript',
        img_skil: img_js
    },
    {
        specialize: 'front-end',
        comand: 'cd Scss',
        img_skil: img_sass
    },
    {
        specialize: 'front-end',
        comand: 'cd Css',
        img_skil: img_css
    },
    {
        specialize: 'front-end',
        comand: 'cd Bootstrap',
        img_skil: img_bootstrap
    },
    {
        specialize: 'front-end',
        comand: 'cd React js',
        img_skil: img_react
    },
    {
        specialize: 'back-end',
        comand: 'cd C#',
        img_skil: img_csharp
    },
    {
        specialize: 'back-end',
        comand: 'cd Asp.Net',
        img_skil: img_dotnet
    },
    {
        specialize: 'back-end',
        comand: 'cd SQL',
        img_skil: img_sql
    },
    {
        specialize: 'dev-tools',
        comand: 'cd GIt',
        img_skil: img_git
    },
    {
        specialize: 'dev-tools',
        comand: 'cd git_hub',
        img_skil: img_github
    },
    {
        specialize: 'dev-tools',
        comand: 'cd vs Code',
        img_skil: img_vscode
    },
    {
        specialize: 'dev-tools',
        comand: 'cd visual Studio',
        img_skil: img_vs
    },

]
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
        <motion.div variants={containerVaritans} initial='hidden' whileInView='visible' viewport={{ once : true ,amount: 0.4 }} className="c_skills mb-5 py-2 px-xl-5 px-1" >
            <motion.div variants={itemVaritans} className="c_skill_headr d-flex flex-row align-items-center mb-3">
                <div className="c_skills_header_icon me-sm-2">
                    <IconsArrows />
                </div>
                <div className="c_skills_header_text">
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