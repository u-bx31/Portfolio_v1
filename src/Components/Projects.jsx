import IconsArrows from './icons/svgArows';
import img1 from '../images/img_lopStudio.jpeg'
import ProjectsData from './data/projectsData';
import GithubIcon from './icons/svgGitHub';
import LinksIcon from './icons/svgLink';
import { motion } from 'framer-motion';


const containerVaritans = {
    hidden: {
        opacity: 0,
        y: -20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: .9,
        }
    }
}
const mainVaritans = {
    hidden: {
        opacity: 0,
        y: -20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 1,
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

const Projects = () => {
    const Data = [...ProjectsData];
    return (
        <section id='project'>
            <motion.div variants={containerVaritans} initial='hidden' whileInView= 'visible' viewport={{ once: true, amount: 0.2 }} className='container-lg text-white py-xl-4 py-3 px-xl-5 px-1'>
                <motion.div variants={itemVaritans} className="c_headers d-flex flex-row align-items-center my-lg-5 my-3">
                    <div className="c_headers_arrowIcon me-sm-2 me-1">
                        <IconsArrows />
                    </div>
                    <div className="c_headers_text">
                        <h3>Projects:</h3>
                    </div>
                </motion.div>
                <motion.div variants={mainVaritans} className="c_project d-flex flex-column justify-content-center px-lg-3">
                    {Data.map((project) => {
                        const { title, description, urls, img_url, tools,position } = project;
                        const {github,link} = urls;
                        const tools_use = tools.map((tools) => {
                            return (
                                <div className="col-auto">
                                    <h6>{tools}</h6>
                                </div>
                            )
                        })
                        return (
                            <motion.div variants={itemVaritans} className={`d-flex  ${position === 'left' ? 'flex-md-row-reverse' : position === 'right' ? 'flex-md-row' : ''} flex-column-reverse align-items-center py-lg-2 py-3`}>
                                <div className="c_project_content w-100 px-md-4 px-2 py-md-0 py-2">
                                    <h2>{title}</h2>
                                    <p >this website was a chalenge from FrontEnd mentor i've done it to practice more at react </p>
                                    <div className="c_project_content_tools row  text-center">
                                        {tools_use}
                                    </div>
                                    <div className="c_project_content_links d-flex">
                                        <a href={github} className='px-2 ps-0 text-white'><GithubIcon /></a>
                                        <a href={link} className='px-2  text-white'><LinksIcon /></a>
                                    </div>
                                </div>
                                <div className="c_project_img w-100">
                                    <div className="c_project_img_cont">
                                        <div className={`c_project_img_cont_${position}`}></div>
                                        <img src={img_url} alt="" />
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                    <h3 className='mx-auto c_project_soon pt-lg-3'>More Project Will be Added Soon ... </h3>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Projects;