
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import IconsArrows from './icons/svgArows';
import skillsData from "./data/skillsData";
import ItemMotion from "./motions/ItemMotion";
import ContainerMotion from "./motions/ContainerMotion";
import MainMotion from "./motions/MainMotion";
import SkillsCard from "./cards/skills";


const Skills = () => {
    const skills = [...skillsData]

    const skillsAnimation = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2 * index
            }
        })
    }
    return (
        <section id='skills'>
            <ContainerMotion className="c_skills container-lg  py-lg-4 py-2 px-xl-5 px-1"  >
                <ItemMotion >
                    <div className="c_headers d-flex flex-row align-items-center mb-3">
                        <div className="c_headers_arrowIcon me-sm-2 me-1">
                            <IconsArrows />
                        </div>
                        <div className="c_headers_text">
                            <h3>Skills:</h3>
                        </div>
                    </div>
                </ItemMotion>

                <div className="c_skills_cards d-flex flex-wrap  gap-2 pt-5  justify-content-center mx-auto">
                    {skills.map((items, index) => {
                        const { img_skil } = items;
                        return (
                            <motion.div variants={skillsAnimation} initial={'hidden'} whileInView={'visible'} viewport={{ once: true , margin : '-100px 0px' }} custom={index} className="c_skills_commands-disp_headrs_items col-auto" key={index}>
                                <div className="c_skills_commands-disp_headrs_items_logos d-flex justify-content-center align-items-center p-2 m-1 ">
                                    <img src={img_skil} loading='lazy' alt="" />
                                </div>
                            </motion.div>
                        )
                    })}

                </div>
            </ContainerMotion>
        </section>

    );
}

export default Skills;