import GithubIcon from './icons/gitHub'
import LinkdinIcon from './icons/linkdin'

const SideIcons = () => {
    return (<>
        <div className="side_up text-center d-none d-lg-block">
            <ul className="side_up_icons p-0 m-0">
                <li><GithubIcon /></li>
                <li><LinkdinIcon /></li>
            </ul>
        </div>
    </>);
}

export default SideIcons;