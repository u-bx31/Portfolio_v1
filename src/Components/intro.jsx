import {  motion } from "framer-motion";
import { useEffect } from "react";

const logoVariants = {
    hidden: {
        opacity: 0, pathLength: 0, fillOpacity: 0
    },
    visible: {
        opacity: 1, pathLength: 1, fillOpacity: [0, 0, .5, 1],
        transition: { duration: 3, ease: "easeInOut" }
    }
}
const blackBox = {
    hidden: {
        height: "100vh",
        y: 0,
        overflow: 'hidden',
    },
    visible: {
        y: '-100vh',
        transition: { delay: 4, duration: .9, ease: "easeInOut" }
    },
};


const Intro = () => {


    return (
        <>
            <motion.div variants={blackBox} initial='hidden' animate='visible' className="w-100 d-flex flex-column justify-content-center align-items-center c-intro min-vh-100 text-center">
                <div className="svg">
                    <svg width="129" height="28" viewBox="0 0 129 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path variants={logoVariants} initial='hidden' animate='visible' d="M15.1915 0.727272H20.1119V15.8409C20.1119 17.5379 19.7066 19.0227 18.896 20.2955C18.093 21.5682 16.968 22.5606 15.521 23.2727C14.0741 23.9773 12.3884 24.3295 10.4642 24.3295C8.53238 24.3295 6.84299 23.9773 5.39602 23.2727C3.94905 22.5606 2.82405 21.5682 2.02102 20.2955C1.21799 19.0227 0.816474 17.5379 0.816474 15.8409V0.727272H5.73693V15.4205C5.73693 16.3068 5.93011 17.0947 6.31647 17.7841C6.71041 18.4735 7.26344 19.0152 7.97556 19.4091C8.68769 19.803 9.51723 20 10.4642 20C11.4187 20 12.2483 19.803 12.9528 19.4091C13.665 19.0152 14.2142 18.4735 14.6006 17.7841C14.9945 17.0947 15.1915 16.3068 15.1915 15.4205V0.727272ZM40.0939 24V27.6705H24.8098V24H40.0939ZM46.4252 24V0.727272H51.2661V9.47727H51.4139C51.626 9.00758 51.9328 8.5303 52.3343 8.04545C52.7434 7.55303 53.2737 7.14394 53.9252 6.81818C54.5843 6.48485 55.4025 6.31818 56.3798 6.31818C57.6525 6.31818 58.8267 6.65152 59.9025 7.31818C60.9783 7.97727 61.8381 8.97348 62.482 10.3068C63.126 11.6326 63.448 13.2955 63.448 15.2955C63.448 17.2424 63.1336 18.8864 62.5048 20.2273C61.8836 21.5606 61.0351 22.572 59.9593 23.2614C58.8911 23.9432 57.6942 24.2841 56.3684 24.2841C55.429 24.2841 54.6298 24.1288 53.9707 23.8182C53.3192 23.5076 52.7851 23.1174 52.3684 22.6477C51.9517 22.1705 51.6336 21.6894 51.4139 21.2045H51.198V24H46.4252ZM51.1639 15.2727C51.1639 16.3106 51.3078 17.2159 51.5957 17.9886C51.8836 18.7614 52.3002 19.3636 52.8457 19.7955C53.3911 20.2197 54.054 20.4318 54.8343 20.4318C55.6222 20.4318 56.2889 20.2159 56.8343 19.7841C57.3798 19.3447 57.7926 18.7386 58.073 17.9659C58.3608 17.1856 58.5048 16.2879 58.5048 15.2727C58.5048 14.2652 58.3646 13.3788 58.0843 12.6136C57.804 11.8485 57.3911 11.25 56.8457 10.8182C56.3002 10.3864 55.6298 10.1705 54.8343 10.1705C54.0464 10.1705 53.3798 10.3788 52.8343 10.7955C52.2964 11.2121 51.8836 11.803 51.5957 12.5682C51.3078 13.3333 51.1639 14.2348 51.1639 15.2727ZM74.4185 6.54545L77.6231 12.6477L80.9072 6.54545H85.8731L80.8162 15.2727L86.0094 24H81.0662L77.6231 17.9659L74.2367 24H69.2367L74.4185 15.2727L69.4185 6.54545H74.4185ZM101.625 24.3182C99.9279 24.3182 98.4165 24.0265 97.0908 23.4432C95.7726 22.8523 94.7309 22.0417 93.9658 21.0114C93.2082 19.9735 92.8181 18.7765 92.7953 17.4205H97.7499C97.7802 17.9886 97.9658 18.4886 98.3067 18.9205C98.6552 19.3447 99.1173 19.6742 99.6931 19.9091C100.269 20.1439 100.917 20.2614 101.636 20.2614C102.386 20.2614 103.049 20.1288 103.625 19.8636C104.201 19.5985 104.651 19.2311 104.977 18.7614C105.303 18.2917 105.466 17.75 105.466 17.1364C105.466 16.5152 105.292 15.9659 104.943 15.4886C104.602 15.0038 104.11 14.625 103.466 14.3523C102.829 14.0795 102.072 13.9432 101.193 13.9432H99.0226V10.3295H101.193C101.935 10.3295 102.591 10.2008 103.159 9.94318C103.735 9.68561 104.182 9.32955 104.5 8.875C104.818 8.41288 104.977 7.875 104.977 7.26136C104.977 6.67803 104.837 6.16667 104.557 5.72727C104.284 5.2803 103.898 4.93182 103.398 4.68182C102.905 4.43182 102.329 4.30682 101.67 4.30682C101.004 4.30682 100.394 4.42803 99.8408 4.67045C99.2878 4.9053 98.8446 5.24242 98.5112 5.68182C98.1779 6.12121 97.9999 6.63636 97.9772 7.22727H93.2612C93.284 5.88636 93.6665 4.70454 94.409 3.68182C95.1514 2.65909 96.1514 1.85985 97.409 1.28409C98.6741 0.700757 100.102 0.40909 101.693 0.40909C103.299 0.40909 104.704 0.700757 105.909 1.28409C107.114 1.86742 108.049 2.6553 108.716 3.64773C109.39 4.63258 109.723 5.73864 109.716 6.96591C109.723 8.26894 109.318 9.35606 108.5 10.2273C107.689 11.0985 106.632 11.6515 105.329 11.8864V12.0682C107.042 12.2879 108.345 12.8826 109.239 13.8523C110.14 14.8144 110.587 16.0189 110.579 17.4659C110.587 18.7917 110.204 19.9697 109.432 21C108.667 22.0303 107.61 22.8409 106.261 23.4318C104.913 24.0227 103.367 24.3182 101.625 24.3182ZM128.561 0.727272V24H123.641V5.39773H123.505L118.175 8.73864V4.375L123.936 0.727272H128.561Z" stroke='#D9D9D9' fill="#D9D9D9" />
                    </svg>
                </div>
            </motion.div>
        </>
    );
}

export default Intro;