import React from 'react';

// ICONS
import SvgIcon from '@material-ui/core/SvgIcon';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MapIcon from '@material-ui/icons/Map';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import WebIcon from '@material-ui/icons/Web';
import MailIcon from '@material-ui/icons/Mail';
import Twitter from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import WifiIcon from '@material-ui/icons/Wifi';
import SecurityIcon from '@material-ui/icons/Security';
import RouterIcon from '@material-ui/icons/Router';
import MemoryIcon from '@material-ui/icons/Memory';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import LaptopIcon from '@material-ui/icons/Laptop';
import ImageIcon from '@material-ui/icons/Image';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import BrushIcon from '@material-ui/icons/Brush';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg';
import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin.svg';

// Common icon style for consistent sizing
const iconStyle = {
    fontSize: '2rem',
    margin: '0 0.3rem'
};

/** Default icons */
const Icons = {
    email: <MailIcon style={iconStyle} />,
    facebook: <SvgIcon component={FacebookIcon} style={iconStyle} />,
    instagram: <InstagramIcon style={iconStyle} />,
    twitter: <Twitter style={iconStyle} />,
    github: <SvgIcon component={GitHubIcon} stroke="currentColor" strokeWidth={2} style={{ ...iconStyle, fill: 'none' }} />,
    linkedin: <SvgIcon component={LinkedInIcon} style={iconStyle} />,
    whatsapp: <WhatsAppIcon style={iconStyle} />,
    projects: <ComputerIcon style={iconStyle} />,
    about: <InfoIcon style={iconStyle} />,
    networking: <WifiIcon style={iconStyle} />,
    cybersecurity: <SecurityIcon style={iconStyle} />,
    linux: <LaptopIcon style={iconStyle} />,
    windows: <DesktopWindowsIcon style={iconStyle} />,
    hardware: <MemoryIcon style={iconStyle} />,
    photoshop: <ImageIcon style={iconStyle} />,
    illustrator: <ColorLensIcon style={iconStyle} />,
    indesign: <BrushIcon style={iconStyle} />,
    filmora: <VideoLibraryIcon style={iconStyle} />,
    helpoutline: <HelpOutlineIcon style={iconStyle} />,
    map: <MapIcon style={iconStyle} />,
    code: <CodeIcon style={iconStyle} />,
    link: <LinkIcon style={iconStyle} />,
    web: <WebIcon style={iconStyle} />
};

export { Icons };