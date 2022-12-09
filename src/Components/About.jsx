import { motion } from 'framer-motion';
import IconsArrows from './icons/svgArows'
import LocationIcon from './icons/svgLocation';
import ItemMotion from './motions/ItemMotion';

const AboutVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: .7
        }
    }
}


const About = () => {
    const handleOpen = () => {
        window.open('https://drive.google.com/file/d/1gU_NhLsR67yN71UJGGnPZKf_zNldUGde/view?usp=share_link', '_blank', 'noopener,noreferrer');
    }
    return (
        <section id='about'>
            <motion.div variants={AboutVariants} initial="hidden" whileInView='visible' viewport={{ once: true, amount: 0.7 }} className="container-lg d-flex flex-xl-row flex-column c-about text-white py-lg-5 py-2 my-lg-4 my-5 px-xl-5 px-1">
                <ItemMotion className="c-about_headr w-100">
                    <div className="d-flex flex-row align-items-center c_headers">
                        <div className="c_headers_arrowIcon me-sm-2 me-1">
                            < IconsArrows />
                        </div>
                        <div className="c_headers_text">
                            <h3>about_me:</h3>
                        </div>
                    </div>

                </ItemMotion>
                <ItemMotion  className="c-about_desc p-lg-5 p-3">
                    <p >
                        👋 hi ! i'm Oussama Labchari. I am a Junoir web Devloper with passion and curosity on building fully responsive webSties and web applications
                        , i realy like building web sites because it always made me learn something new,
                        i've started learning and studying web developemnt over 2 years now , and also Still obtaining more information and knowledge
                        about new and different Technologies that've been used recently.<br />
                        - <LocationIcon />  Tetouan , Morocco ;<br />

                        - if You want to know more about my experience and my education. These is My <button className='btn_link c-underLinebroder' onClick={()=>handleOpen()}>"Resume"</button>
                    </p>
                </ItemMotion>
            </motion.div>
        </section>
    );
}

export default About;