import img_ip from '../../images/img_ipTracker.jpeg';
import img_easyBank from '../../images/img_easyBank.jpeg';
import img_loopStudio from '../../images/img_lopStudio.jpeg';
import img_tipCalc from '../../images/img_tipCalc.jpeg';
import img_moviesLand from '../../images/img_moviesLand.jpeg';

const ProjectsData = [
    {
        title : 'Ip Adresse Tracker',
        description : '',
        tools : ['ReactJs','HTML','Scss','vsCode','Bootstrap','LeafletAPI','ReactLeaflet','ipGeolocatioAPI'],
        urls : {
            github:'https://github.com/u-bx31/IpAdresseTrackerProject',
            link : 'https://ip-adresse-tracker31.netlify.app/'
        },
        img_url :img_ip,
        position : 'left'

    },
    {
        title : 'EasyBank',
        description : '',
        tools : ['ReactJs','FramerMotion','HTML','Scss','vsCode','Bootstrap'],
        urls : {
            github:'https://github.com/u-bx31/EasyBank-LandingPage',
            link : 'https://easybank-31.netlify.app/'
        },
        img_url :img_easyBank,
        position : 'right'
    },
    {
        title : 'LoopStudios ',
        description : '',
        tools : ['ReactJs','AOSLibrary','HTML','Scss','vsCode','Bootstrap'],
        urls : {
            github:'https://github.com/u-bx31/LoopstudiosProject',
            link : 'https://loopstudios031.netlify.app/'
        },
        img_url :img_loopStudio,
        position : 'left'
    },
    {
        title : 'Tip calculator app solution',
        description : '',
        tools : ['HTML','Scss','vsCode','VanilaJavaScript'],
        urls : {
            github:'https://github.com/u-bx31/TipCalculatorProject',
            link : 'https://tip-calculator31.netlify.app/'
        },
        img_url :img_tipCalc,
        position : 'right'
    },
    {
        title : 'Movies web application (Not completed)',
        description : '',
        tools : ['HTML','Scss','VisualStudio','C#','ASP.Net'],
        urls : {
            github:'https://github.com/u-bx31/MoviesWeb',
            link : '#'
        },
        img_url :img_moviesLand,
        position : 'left'
    }
]
export default ProjectsData;