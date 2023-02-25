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
        window.open('https://drive.google.com/file/d/1JikOBZvSON5_WmCXSUa3hTMHUTls4dvG/view?usp=share_link', '_blank', 'noopener,noreferrer');
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
                <ItemMotion className="c-about_desc p-lg-5 p-3">
                    <p >
                        👋 Hi! I'm Oussama Labchari. I am a junior web developer with a passion and interest in building fully responsive websites and web applications. I really enjoy building websites because it always makes me learn something new. I started learning and studying web development over 2 years now. 
                        and also Still obtaining more knowledge about new and different technologies that have been used recently<br />
                        - <LocationIcon />  Tetouan , Morocco ;<br />
                        - if You want to know more about my experience and my education. These is My <button className='btn_link c-underLinebroder' onClick={() => handleOpen()}>"Resume"</button>
                    </p>
                </ItemMotion>
            </motion.div>
        </section>
    );
}

export default About;