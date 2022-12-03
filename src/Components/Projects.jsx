import IconsArrows from './icons/svgArows';
import img1 from '../images/image1.jpeg'
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
            duration: 2,
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
            duration: 2,
            staggerChildren: 1.5,
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
    return (
        <motion.div variants={containerVaritans} initial='hidden' whileInView='visible' viewport={{ once : true ,amount: 0.4 }} className='text-white py-lg-5 py-3 px-xl-5 px-1'>
            <motion.div variants={itemVaritans} className="c_headers d-flex flex-row align-items-center my-lg-5 my-3">
                <div className="c_headers_arrowIcon me-sm-2 me-1">
                    <IconsArrows />
                </div>
                <div className="c_headers_text">
                    <h3>Projects:</h3>
                </div>
            </motion.div>
            <motion.div variants={mainVaritans} className="c_project d-flex flex-column justify-content-center px-lg-3">
                <motion.div variants={itemVaritans}  className="d-flex flex-md-row flex-column-reverse align-items-center py-lg-2 py-3">
                    <div className="c_project_content w-100 px-md-4 px-2 py-md-0 py-2">
                        <h2>Easybank</h2>
                        <p >this website was a chalenge from FrontEnd mentor i've done it to practice more at react </p>
                        <div className="c_project_content_tools row  text-center">
                            <div className="col-auto">
                                <h6>vscode</h6>
                            </div>
                            <div className="col-auto">
                                <h6>ReactJs</h6>
                            </div>
                            <div className="col-auto">
                                <h6>FramerMotion</h6>
                            </div>
                            <div className="col-auto">
                                <h6>HTML</h6>
                            </div>
                            <div className="col-auto">
                                <h6>Sass</h6>
                            </div>
                        </div>
                        <div className="c_project_content_links d-flex">
                            <a href='#/21' className='px-2 ps-0 text-white'><GithubIcon /></a>
                            <a href='#/2' className='px-2  text-white'><LinksIcon /></a>
                        </div>
                    </div>
                    <div className="c_project_img w-100">
                        <div className="c_project_img_cont">
                            <div className="c_project_img_cont_right"></div>
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={itemVaritans}  className="d-flex flex-md-row-reverse flex-column-reverse align-items-center py-lg-2 py-4">
                    <div className="c_project_content w-100 px-md-4 px-2 py-md-0 py-3">
                        <h2>Easybank</h2>
                        <p >this website was a chalenge from FrontEnd mentor i've done it to practice more at react </p>
                        <div className="c_project_content_tools row text-center">
                            <div className="col-auto">
                                <h6>vscode</h6>
                            </div>
                            <div className="col-auto">
                                <h6>ReactJs</h6>
                            </div>
                            <div className="col-auto">
                                <h6>FramerMotion</h6>
                            </div>
                            <div className="col-auto">
                                <h6>HTML</h6>
                            </div>
                            <div className="col-auto">
                                <h6>Sass</h6>
                            </div>
                        </div>
                        <div className="c_project_content_links d-flex">
                            <a href='#/' className='px-2 ps-0 text-white'><GithubIcon /></a>
                            <a href='#/' className='px-2  text-white'><LinksIcon /></a>
                        </div>
                    </div>
                    <div className="c_project_img w-100">
                        <div className="c_project_img_cont">
                            <div className="c_project_img_cont_left"></div>
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </motion.div>
    );
}

export default Projects;