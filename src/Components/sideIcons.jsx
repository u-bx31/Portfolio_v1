import GithubIcon from './icons/svgGitHub'
import LinkdinIcon from './icons/svgLinkdin'

const SideIcons = () => {
    return (<>
        <div className="side_up text-center d-none d-xl-block">
            <ul className="side_up_icons p-0 m-0">
                <li><GithubIcon /></li>
                <li><LinkdinIcon /></li>
            </ul>
        </div>
    </>);
}

export default SideIcons;