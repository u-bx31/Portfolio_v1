import img_ip from '../../images/img_ipTracker.jpeg';
import img_easyBank from '../../images/img_easyBank.jpeg';
import img_loopStudio from '../../images/img_lopStudio.jpeg';
import img_tipCalc from '../../images/img_tipCalc.jpeg';
import img_moviesLand from '../../images/img_moviesLand.jpeg';

const ProjectsData = [
    {
        title : 'Ip Adresse Tracker',
        description : 'Intermediate challenge on Frontend Mentor,in this project i use Two separate APIs together to create an IP Address Tracking app',
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
        description : 'Intermediate Challenge on Frontend Mentor, I built this landing page To test my layout skills usign bootstrap and sass',
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
        description : 'Junior challenge on Frontend Mentor, This challenge is perfect if you`re looking to test your CSS Grid chops. Even without Grid, this project will be a fun one to help you practice your layout skills! ',
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
        description : 'Junior challenge on Frontend Mentor,this small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!',
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
        description : 'This was a class project to learn about Full stack developing web site usign ASP.NET, C# and SQl with 2 seperate sections one for the users and other one for the admin that has CRUD operations for creating and managing persistent data elements that in SQL Server. it not responsive yet but will be added soon',
        tools : ['HTML','Scss','VisualStudio','C#','ASP.Net','SQLDataBase'],
        urls : {
            github:'https://github.com/u-bx31/MoviesWeb',
            link : '#'
        },
        img_url :img_moviesLand,
        position : 'left'
    }
]
export default ProjectsData;