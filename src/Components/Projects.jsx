import IconsArrows from './icons/svgArows';
import ProjectsData from './data/projectsData';
import GithubIcon from './icons/svgGitHub';
import LinksIcon from './icons/svgLink';
import ContainerMotion from './motions/ContainerMotion';
import ItemMotion from './motions/ItemMotion';
import MainMotion from './motions/MainMotion';




const Projects = () => {
    const Data = [...ProjectsData];
    return (
        <section id='project'>
            <ContainerMotion amount={0.2} className='container-lg text-white py-xl-4 py-3 px-xl-5 px-1'>
                <ItemMotion className="c_headers d-flex flex-row align-items-center my-lg-5 my-3">
                    <div className="c_headers_arrowIcon me-sm-2 me-1">
                        <IconsArrows />
                    </div>
                    <div className="c_headers_text">
                        <h3>Projects:</h3>
                    </div>
                </ItemMotion>
                <ItemMotion className="c_project d-flex flex-column justify-content-center px-lg-3">
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
                            <MainMotion condition={true} className={`d-flex  ${position === 'left' ? 'flex-md-row-reverse' : position === 'right' ? 'flex-md-row' : ''} flex-column-reverse align-items-center py-lg-2 py-3`}>
                                <div className="c_project_content w-100 px-md-4 px-2 py-md-0 py-2">
                                    <h2>{title}</h2>
                                    <p >{description} </p>
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
                            </MainMotion>
                        )
                    })}
                    <h3 className='mx-auto c_project_soon pt-lg-3'>More Projects Will be Added Soon ... </h3>
                </ItemMotion>
            </ContainerMotion>
        </section>
    );
}

export default Projects;