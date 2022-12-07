
import { motion } from 'framer-motion';
import IconsArrows from './icons/svgArows';
import GmailIcon from './icons/svgGmail';
import LinkdinIcon from './icons/svgLinkdin';
import TwitterIcon from './icons/svgTwitter';


const mainVaritans = {
    hidden: {
        opacity: 0,

    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 1,
        }
    }
}
const ContainerVaritans = {
    hidden: {
        opacity: 0,
        y: -20,


    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
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
            duration: .8,
        }
    }

}

const Contact = () => {
    return (
        <section id='contact'>


            <div className="c-contact pt-5">
                <div class="custom-shape-divider-bottom-1670244021">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className="c-contact_content ">
                    <div className="container-lg c-contact_content_items pb-lg-5 pb-4 pt-lg-5 pt-3 ">
                        <motion.div variants={ContainerVaritans} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }} className="d-flex flex-lg-row flex-column justify-content-center ">
                            <motion.div variants={mainVaritans} className="c-contact_content_items_desc d-block  w-100 ">
                                <motion.div variants={itemVaritans} className="c_headers d-flex flex-row align-items-center mb-lg-5 mt-0 mb-3">
                                    <div className="c_headers_arrowIcon me-sm-2 me-1">
                                        <IconsArrows />
                                    </div>
                                    <div className="c_headers_text">
                                        <h3>Contact:</h3>
                                    </div>
                                </motion.div>
                                <motion.p variants={itemVaritans} className='px-sm-3 px-1 pt-lg-0 pt-2 pb-lg-0 pb-4'>
                                    I’m intrested on web devolpement i built custom website and also desktop apps.
                                    if my Work interested you dont hesitate to contact me ✌😉
                                </motion.p>
                            </motion.div>

                            <motion.div variants={mainVaritans} viewport={{ amount: 0.5 }} className="c-contact_content_items_links d-flex flex-column p-2 justify-content-center ">
                                <motion.div variants={itemVaritans} className="d-flex justify-content-center align-items-center pb-3">
                                    <div className="c-contact_content_items_links_icon  mx-2"><LinkdinIcon /></div>
                                    <div className="c-contact_content_items_links_link"><a href="https://www.linkedin.com/">/oussama-labchari</a></div>
                                </motion.div>
                                <motion.div variants={itemVaritans} className="d-flex justify-content-center align-items-center pb-3">
                                    <div className="c-contact_content_items_links_icon  mx-2"><TwitterIcon /></div>
                                    <div className="c-contact_content_items_links_link"><a href="https://twitter.com/bx31_o">/@bx31_o</a></div>
                                </motion.div>
                                <motion.div variants={itemVaritans} className="d-flex justify-content-center align-items-center pb-3">
                                    <div className="c-contact_content_items_links_icon  mx-2"><GmailIcon /></div>
                                    <div className="c-contact_content_items_links_link"><a href="mailTo:oussama.bx31@gmail.com">/Oussama.bx31@gmail.com</a></div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;