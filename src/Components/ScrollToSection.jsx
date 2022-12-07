import {Link} from 'react-scroll';

const ScrollToSection = ({children,target,className}) => {
    return (
        <Link to={target} smooth={true} offset={target === 'about' ? -130 : target === 'contact' ? 20 : -90} duration={30} className={className}>
            {children}
        </Link>
    );
}

export default ScrollToSection;