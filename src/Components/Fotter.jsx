import Logo from '../images/U_bx31.svg'
const Footer = () => {
    return (
        <div className='d-flex flex-column w-100 justify-content-center text-center p-4 text-white'>
            <div className="c-footer_logo"><img src={Logo} alt="" /></div>
            <div className="c-footer_copyright pt-3">
                <p>© All right to u_bx31 for this webSite 'Portfolio_v1'</p>
            </div>


        </div>
    );
}

export default Footer;