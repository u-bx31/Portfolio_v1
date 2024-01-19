
import { motion, useInView, useScroll } from "framer-motion";
import IconsArrows from './icons/svgArows';
import skillsData from "./data/skillsData";
import ItemMotion from "./motions/ItemMotion";
import ContainerMotion from "./motions/ContainerMotion";
import { useEffect, useRef, useState } from "react";
import SkillsCard from "./cards/skills";


const Skills = () => {
    const skills = [...skillsData]
    const skillsContainer = useRef(null)
    const view = useInView(skillsContainer, { margin: '-100px 0px', once: true })
    // const { scrollYProgress } = useScroll({
    //     target: skillsContainer,
    //     offset: window.innerWidth <= 579 ? ['start end','end start'] : ['center end','start center'] ,
    // })
    const skillsAnimation = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.2 * index
            }

        })
    }
    // scrollYProgress.onChange((last) => {
    //     setTimeout(() => {
    //         setInView(true)
    //     }, 1500);
    // })
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

                {/* <div ref={skillsContainer} className="c_skills_cards d-flex flex-wrap  gap-3 pt-5  justify-content-center mx-auto">
                    {skills.map((items, index) => {
                        const { img_skil, percent , header } = items;
                        return (
                            <motion.div variants={skillsAnimation} animate={view ? 'visible' : 'hidden'} custom={index} className="col-auto" key={index}>
                                <SkillsCard percent={inView ? percent : 0} img_skill={img_skil} header={header} />
                            </motion.div>
                        )
                    })}

                </div> */}

                <div ref={skillsContainer} className="c_skills_cards d-flex flex-wrap  gap-2 pt-5  justify-content-center mx-auto">
                    {skills.map((items, index) => {
                        const { img_skil } = items;
                        return (
                            <motion.div variants={skillsAnimation} initial={'hidden'} animate={view ? 'visible' : 'hidden'} custom={index} className="c_skills_commands-disp_headrs_items col-auto" key={index}>
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