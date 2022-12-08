
import { useEffect, useRef, useState } from "react";
import IconsArrows from './icons/svgArows';
import skillsData from "./data/skillsData";
import ItemMotion from "./motions/ItemMotion";
import ContainerMotion from "./motions/ContainerMotion";
import MainMotion from "./motions/MainMotion";
import IconsMotion from "./motions/IconsMotion";
import ItemMotion2 from "./motions/ItemMotion2";


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
                <MainMotion condition={frontend.length && backend.length && devTools.length > 0}>
                    <div className="d-flex justify-content-between flex-lg-row flex-column">
                        <div className="c_skills_cmd-app w-100 d-lg-block d-none">
                            <div className="c_skills_cmd-app_top"></div>
                            <MainMotion condition={frontend.length && backend.length && devTools.length > 0} className="c_skills_cmd-app_comands text-white p-3">
                                {frontend.map((items, index) => {
                                    const { comand } = items;
                                    return (
                                        <ItemMotion className="c-items" key={index}>
                                            cd:\user\u-bx31 \{comand}
                                        </ItemMotion>
                                    )
                                })}
                                {backend.map((items, index) => {
                                    const { comand } = items;
                                    return (
                                        <ItemMotion className="c-items" key={index}>
                                            cd:\user\u-bx31 \{comand}
                                        </ItemMotion>
                                    )
                                })}
                                {devTools.map((items, index) => {
                                    const { comand } = items;
                                    return (
                                        <ItemMotion className="c-items" key={index}>
                                            cd:\user\u-bx31 \{comand}
                                        </ItemMotion>
                                    )
                                })}
                                <div ref={lastCmd} />
                            </MainMotion>
                        </div>

                        <div className="c_skills_commands-disp w-100 mt-lg-0 mt-4">
                            <IconsMotion condition={frontend.length && backend.length && devTools.length > 0} className="c_skills_commands-disp_headrs px-lg-5 px-1">
                                <h2>Front-End</h2>
                                <ItemMotion2 className="row justify-content-center text-center w-100 ">{frontend.map((items, index) => {
                                    const { img_skil } = items;
                                    return (
                                        <ItemMotion className="c_skills_commands-disp_headrs_items col-auto" key={index}>
                                            <div className="c_skills_commands-disp_headrs_items_logos d-flex justify-content-center align-items-center p-2 m-1 ">
                                                <img src={img_skil} alt="" />
                                            </div>
                                        </ItemMotion>
                                    )
                                })}</ItemMotion2>
                                <h2>Back-End</h2>
                                <ItemMotion2 className="row justify-content-center text-center w-100">{backend.map((items, index) => {
                                    const { img_skil } = items;
                                    return (
                                        <ItemMotion condition={frontend.length && backend.length && devTools.length > 0} className="c_skills_commands-disp_headrs_items col-auto" key={index}>
                                            <div className="c_skills_commands-disp_headrs_items_logos d-flex justify-content-center align-items-center p-2 m-1 ">
                                                <img src={img_skil} alt="" />
                                            </div>
                                        </ItemMotion>
                                    )
                                })}</ItemMotion2>
                                <h2>Dev-tools</h2>
                                <ItemMotion2 className="row justify-content-center text-center w-100">{devTools.map((items, index) => {
                                    const { img_skil } = items;
                                    return (
                                        <ItemMotion condition={frontend.length && backend.length && devTools.length > 0} className="c_skills_commands-disp_headrs_items col-auto" key={index}>
                                            <div className="c_skills_commands-disp_headrs_items_logos d-flex justify-content-center align-items-center p-2 m-1 ">
                                                <img src={img_skil} alt="" />
                                            </div>
                                        </ItemMotion>
                                    )
                                })}</ItemMotion2>
                            </IconsMotion>
                        </div>
                    </div>
                </MainMotion>
            </ContainerMotion>
        </section>

    );
}

export default Skills;