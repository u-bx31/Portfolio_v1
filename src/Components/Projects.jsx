import IconsArrows from './icons/svgArows';
import ProjectsData from './data/projectsData';
import GithubIcon from './icons/svgGitHub';
import LinksIcon from './icons/svgLink';
import ContainerMotion from './motions/ContainerMotion';
import ItemMotion from './motions/ItemMotion';
import MainMotion from './motions/MainMotion';




const Projects = () => {
    const Data = [...ProjectsData];

    const CustomLink = ({ href, children, className }) => {
        if (href === '#') {
            return <div className={`${className} not-allowed`}>{children}</div>
        }
        return <a href={href} className={className}>{children}</a>
    }
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
                    {Data.map((project, index) => {
                        const { title, description, urls, img_url, tools, position,isCompleted } = project;
                        const { github, link } = urls;
                        const tools_use = tools.map((tools) => {
                            return (
                                <div className="col-auto">
                                    <h6>{tools}</h6>
                                </div>
                            )
                        })
                        return (
                            <MainMotion key={index} condition={true} className={`d-flex  ${position === 'left' ? 'flex-md-row-reverse' : position === 'right' ? 'flex-md-row' : ''} flex-column-reverse align-items-center py-lg-2 py-3`} >
                                <div key={index} className="c_project_content w-100 px-md-4 px-2 py-md-0 py-2">
                                    <h2>{title}</h2>
                                    {!isCompleted && <h5 class="badge bg-warning text-dark">InProgress</h5>}
                                    <p class="overflow-hidden">{description.length >= 300 ? `${description.slice(0, 150)}...` : description}</p>
                                    <div className="c_project_content_tools row  text-center">
                                        {tools_use}
                                    </div>
                                    <div className="c_project_content_links d-flex">
                                        <CustomLink href={github} aria-label="github_Link" className='px-2 ps-0 text-white'><GithubIcon /></CustomLink>
                                        <CustomLink href={link} aria-label="url_Link" className='px-2  text-white'><LinksIcon /></CustomLink>
                                    </div>
                                </div>
                                <CustomLink className={'c_project_img w-100'} href={link}>
                                    <div className="c_project_img_cont">
                                        <div className={`c_project_img_cont_${position}`}></div>
                                        <img src={img_url} loading='lazy' alt="" />
                                    </div>
                                </CustomLink>
                            </MainMotion>
                        )
                    })}
                </ItemMotion>
            </ContainerMotion>
        </section>
    );
}

export default Projects;