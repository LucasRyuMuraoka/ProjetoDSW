import React from "react";

import { Footer as FooterContainer, Container, Top, SocialNetworking, Center, Bottom } from "./styles";
import { Link } from "react-router-dom";

const Footer = () => {
  return(
    <FooterContainer>
      <Container>
        <Top>
            <Link to="/">
                <p>
                    <svg viewBox="0 0 326 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.9" cx="80" cy="80" r="30" fill="#6F6CF2" fillOpacity="0.6"/>
                        <g opacity="0.9" filter="url(#filter0_f_70_30)">
                            <circle cx="80" cy="80" r="30" fill="#6F6CF2" fillOpacity="0.6"/>
                        </g>
                        <circle opacity="0.9" cx="92" cy="80" r="30" fill="#410179"/>
                        <path d="M144.847 66.8182L150.216 85.2784H150.42L155.79 66.8182H163.818L155.176 93H145.46L136.818 66.8182H144.847ZM170.042 93V73.3636H177.099V93H170.042ZM173.571 71.3182C172.616 71.3182 171.798 71.0028 171.116 70.3722C170.434 69.7415 170.093 68.983 170.093 68.0966C170.093 67.2102 170.434 66.4517 171.116 65.821C171.798 65.1903 172.616 64.875 173.571 64.875C174.534 64.875 175.352 65.1903 176.025 65.821C176.707 66.4517 177.048 67.2102 177.048 68.0966C177.048 68.983 176.707 69.7415 176.025 70.3722C175.352 71.0028 174.534 71.3182 173.571 71.3182ZM191.351 81.9545V93H184.294V73.3636H190.993V77.0966H191.198C191.624 75.8523 192.374 74.8764 193.448 74.169C194.53 73.4616 195.792 73.108 197.232 73.108C198.621 73.108 199.827 73.4276 200.85 74.0668C201.881 74.6974 202.678 75.5668 203.24 76.6747C203.812 77.7827 204.093 79.0483 204.084 80.4716V93H197.027V81.9545C197.036 80.983 196.789 80.2202 196.286 79.6662C195.792 79.1122 195.101 78.8352 194.215 78.8352C193.635 78.8352 193.128 78.9631 192.694 79.2188C192.267 79.4659 191.939 79.8239 191.709 80.2926C191.479 80.7528 191.36 81.3068 191.351 81.9545ZM214.76 100.364C213.951 100.364 213.179 100.3 212.446 100.172C211.713 100.053 211.07 99.8864 210.516 99.6733L212.05 94.6619C212.63 94.8665 213.158 94.9986 213.635 95.0582C214.121 95.1179 214.534 95.0838 214.875 94.956C215.225 94.8281 215.476 94.5852 215.63 94.2273L215.783 93.8693L208.88 73.3636H216.243L219.414 86.9659H219.618L222.84 73.3636H230.255L223.095 94.6364C222.738 95.7188 222.218 96.6903 221.536 97.5511C220.863 98.4205 219.976 99.1065 218.877 99.6094C217.777 100.112 216.405 100.364 214.76 100.364ZM242.918 66.8182V93H235.862V66.8182H242.918ZM270.857 93H260.784V66.8182H270.755C273.448 66.8182 275.775 67.3423 277.735 68.3906C279.704 69.4304 281.221 70.9304 282.286 72.8906C283.36 74.8423 283.897 77.1818 283.897 79.9091C283.897 82.6364 283.365 84.9801 282.299 86.9403C281.234 88.892 279.725 90.392 277.774 91.4403C275.822 92.4801 273.517 93 270.857 93ZM267.892 86.9659H270.602C271.897 86.9659 273.001 86.7571 273.913 86.3395C274.833 85.9219 275.532 85.2017 276.009 84.179C276.495 83.1562 276.738 81.733 276.738 79.9091C276.738 78.0852 276.491 76.6619 275.997 75.6392C275.511 74.6165 274.795 73.8963 273.849 73.4787C272.911 73.0611 271.761 72.8523 270.397 72.8523H267.892V86.9659ZM308.837 79.7557H302.343C302.309 79.3551 302.168 79.0099 301.921 78.7202C301.674 78.4304 301.354 78.2088 300.962 78.0554C300.579 77.8935 300.152 77.8125 299.684 77.8125C299.079 77.8125 298.559 77.9233 298.124 78.1449C297.689 78.3665 297.476 78.6818 297.485 79.0909C297.476 79.3807 297.6 79.6491 297.856 79.8963C298.12 80.1435 298.627 80.3352 299.377 80.4716L303.365 81.1875C305.377 81.554 306.873 82.1719 307.853 83.0412C308.841 83.902 309.34 85.0568 309.348 86.5057C309.34 87.9034 308.922 89.1179 308.096 90.1491C307.277 91.1719 306.157 91.9645 304.733 92.527C303.319 93.081 301.704 93.358 299.888 93.358C296.888 93.358 294.54 92.7443 292.844 91.517C291.157 90.2898 290.215 88.6705 290.019 86.6591H297.025C297.118 87.2812 297.425 87.7628 297.945 88.1037C298.473 88.4361 299.138 88.6023 299.939 88.6023C300.587 88.6023 301.12 88.4915 301.537 88.2699C301.963 88.0483 302.181 87.733 302.189 87.3239C302.181 86.9489 301.993 86.6506 301.627 86.429C301.269 86.2074 300.706 86.0284 299.939 85.892L296.462 85.2784C294.459 84.929 292.959 84.2642 291.962 83.2841C290.965 82.304 290.471 81.0426 290.479 79.5C290.471 78.1364 290.829 76.9815 291.553 76.0355C292.286 75.081 293.33 74.3565 294.685 73.8622C296.049 73.3594 297.664 73.108 299.53 73.108C302.368 73.108 304.606 73.696 306.242 74.8722C307.887 76.0483 308.752 77.6761 308.837 79.7557ZM319.488 93.4091C318.499 93.4091 317.651 93.0639 316.943 92.3736C316.245 91.6747 315.899 90.8267 315.908 89.8295C315.899 88.858 316.245 88.027 316.943 87.3366C317.651 86.6463 318.499 86.3011 319.488 86.3011C320.425 86.3011 321.252 86.6463 321.968 87.3366C322.692 88.027 323.059 88.858 323.067 89.8295C323.059 90.4943 322.884 91.0994 322.543 91.6449C322.211 92.1818 321.776 92.6122 321.239 92.9361C320.702 93.2514 320.118 93.4091 319.488 93.4091Z" fill="white"/>
                        <circle cx="111" cy="80" r="15" fill="white"/>
                        <line x1="136" y1="95.5" x2="210" y2="95.5" stroke="white"/>
                        <line x1="224" y1="95.5" x2="322" y2="95.5" stroke="white"/>
                        <defs>
                        <filter id="filter0_f_70_30" x="0" y="0" width="160" height="160" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_70_30"/>
                        </filter>
                        </defs>
                    </svg>
                </p>
            </Link>

            <SocialNetworking>
                <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 28.38C40 35.66 35.66 40 28.38 40H26C24.9 40 24 39.1 24 38V26.46C24 25.92 24.44 25.46 24.98 25.46L28.5 25.4C28.78 25.38 29.02 25.18 29.08 24.9L29.78 21.08C29.84 20.72 29.56 20.38 29.18 20.38L24.92 20.44C24.36 20.44 23.92 20 23.9 19.46L23.82 14.56C23.82 14.24 24.08 13.96 24.42 13.96L29.22 13.88C29.56 13.88 29.82 13.62 29.82 13.28L29.74 8.47998C29.74 8.13998 29.48 7.88 29.14 7.88L23.74 7.96002C20.42 8.02002 17.78 10.74 17.84 14.06L17.94 19.56C17.96 20.12 17.52 20.56 16.96 20.58L14.56 20.62C14.22 20.62 13.96 20.88 13.96 21.22L14.02 25.02C14.02 25.36 14.28 25.62 14.62 25.62L17.02 25.58C17.58 25.58 18.02 26.02 18.04 26.56L18.22 37.96C18.24 39.08 17.34 40 16.22 40H11.62C4.34 40 0 35.66 0 28.36V11.62C0 4.34 4.34 0 11.62 0H28.38C35.66 0 40 4.34 40 11.62V28.38Z" fill="white"/>
                </svg>                        
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.5638 0H11.7955C4.51184 0 0.169678 4.34216 0.169678 11.6258V28.3741C0.169678 35.6778 4.51184 40.0199 11.7955 40.0199H28.5438C35.8274 40.0199 40.1696 35.6778 40.1696 28.3941V11.6258C40.1896 4.34216 35.8475 0 28.5638 0ZM20.1796 27.7738C15.8975 27.7738 12.4158 24.2921 12.4158 20.01C12.4158 15.7278 15.8975 12.2461 20.1796 12.2461C24.4618 12.2461 27.9435 15.7278 27.9435 20.01C27.9435 24.2921 24.4618 27.7738 20.1796 27.7738ZM32.0256 9.76487C31.9255 10.005 31.7854 10.2251 31.6053 10.4252C31.4052 10.6053 31.1851 10.7454 30.945 10.8454C30.7049 10.9455 30.4448 11.0055 30.1846 11.0055C29.6444 11.0055 29.1441 10.8054 28.7639 10.4252C28.5838 10.2251 28.4438 10.005 28.3437 9.76487C28.2437 9.52475 28.1836 9.26462 28.1836 9.00449C28.1836 8.74436 28.2437 8.48423 28.3437 8.24411C28.4438 7.98398 28.5838 7.78388 28.7639 7.58378C29.2242 7.12355 29.9245 6.90344 30.5648 7.04351C30.7049 7.06352 30.825 7.10354 30.945 7.16357C31.0651 7.20359 31.1851 7.26362 31.3052 7.34366C31.4052 7.40369 31.5053 7.50374 31.6053 7.58378C31.7854 7.78388 31.9255 7.98398 32.0256 8.24411C32.1256 8.48423 32.1856 8.74436 32.1856 9.00449C32.1856 9.26462 32.1256 9.52475 32.0256 9.76487Z" fill="white"/>
                </svg>              
            </SocialNetworking>
        </Top>

        <Center>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/">Resources</Link></li>
                </ul>
            </nav>
        </Center>

        <Bottom>
            <p>Images by <a rel="noreferrer" href="https://undraw.co/" target="_blank">unDraw</a>.</p>
            <p>September 2023.</p>
            <p>Developed by <a rel="noreferrer" href="https://github.com/Matheus-FSantos" target="_blank">Matheus</a> and <a href="https://github.com/LucasRyuMuraoka" target="_blank">Lucas</a>.</p>
        </Bottom>
      </Container>
    </FooterContainer>
  );
};

export { Footer };
