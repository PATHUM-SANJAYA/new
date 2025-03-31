/**
 * This is the config file where you can edit information as you want.
 * 
 * There are 3 variable objects which contain all the information.
 * 
 * 1. CommonConfig
 *      This variable contains all the common configuration of your profile
 *      including your name, your social links and the path to draw the signature.
 * 2. ProjectsConfig
 *      This variable contains all the information which will be part of the
 *      projects section. Here you can add your own projects and provide a link for them
 *      and also change the icon as per your liking.
 * 3. CustomSectionsConfig
 *      Now this is the fun part. This variable is an array which can hold any number
 *      of sections. Here you can define any of your custom sections may it be "Work", "Reviews",
 *      "Portfolio" or whatnot. The "content" property supports JSX so you can style or use it
 *      however you like!
 * 
 * So what are you waiting for? GO FOR IT!
 */

import React from 'react';

import { Icons } from './icons';

// CUSTOM ICONS
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import WbIridescentIcon from '@material-ui/icons/WbIridescent';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import RateReviewIcon from '@material-ui/icons/RateReview';
import Description from '@material-ui/icons/Description';

// CUSTOM COMPONENTS
import CircleButton from '../components/CircleButton/CircleButton';

// CONFIGURABLE TEXT BEGINS HERE

/** Common config for top section and footer */
const CommonConfig = {
    // Whether to add the free Palestine screen at the start
    addFreePalestine: false,
    // Name that will be displayed at the top
    name: "Pathum Sanjaya",
    // Browser tab title
    browserTitle: "PATHUM-SANJAYA",
    email: "graphicdesigninglk@gmail.com",
    // Configuration for signature in the top section
    signature: {
        isImage: true,
        imageUrl: './profile.png',  // Using relative path
        style: {
            width: '350px',
            height: '350px',
            objectFit: 'cover',
            borderRadius: '50%',
            filter: 'grayscale(100%)', // Always black and white
            border: '6px solid #ffffff',
            boxShadow: `
                0 0 0 15px var(--bg-primary),
                0 0 0 20px #ffffff,
                0 0 35px rgba(0,0,0,0.2)
            `,
            cursor: 'default' // Remove pointer cursor
        }
    },
    // Information for social media accounts
    social: [
        {
            name: "Facebook",
            icon: Icons['facebook'],
            link: "https://web.facebook.com/PATHUMSANJAYA979/"
        },
        {
            name: "Instagram",
            icon: Icons['instagram'],
            link: "https://www.instagram.com/pathum6666/"
        },
        {
            name: "GitHub",
            icon: Icons['github'],
            link: "https://github.com/PATHUM-SANJAYA"
        },
        {
            name: "WhatsApp",
            icon: Icons['whatsapp'],
            link: "https://api.whatsapp.com/send/?phone=94725510768&text=Hello+Pathum%2C+I+would+like+to+discuss+about+design+work&type=phone_number&app_absent=0"
        },
        {
            name: "Email",
            icon: Icons['email'],
            link: "https://mail.google.com/mail/u/0/?fs=1&to=tdpathumsanjaya@gmail.com&su=Design+Inquiry&body=Hello+Pathum,%0A%0AI+am+reaching+out+regarding+&tf=cm"
        },
        {
            name: "CV",
            icon: Icons['link'],
            link: "https://drive.google.com/file/d/1T9Lt_gn0djc4LfF_1BMQ1sEJTdAT_2Pj/view?usp=drive_link"
        }
    ]
};

/** Config for the projects section */
const ProjectsConfig = {
    // Name / title of the section
    name: 'projects',
    // Icon next to the header title
    headerIcon: <ComputerIcon />,
    // Extra classes to apply styling
    extraClass: '',
    // Projects
    projects: [
        {
            name: 'Graphic Design Services',
            icon: Icons['web'],
            description: 'I created a website to showcase my graphic design services, portfolio, and expertise, making it easy for clients to explore my work and get in touch.',
            links: [
                {
                    tooltip: 'Visit Website',
                    link: 'https://pmedit.netlify.app',
                    icon: Icons['link']
                }
            ]
        },
        {
            name: 'Online Video Downloader',
            icon: Icons['web'],
            description: 'Online platform that enables users to download videos from popular social media platforms such as YouTube, Facebook, Instagram, and TikTok. By providing the URL of the desired video.',
            links: [
                {
                    tooltip: 'Visit Website',
                    link: 'https://fastdownloadlk.netlify.app',
                    icon: Icons['link']
                }
            ]
        },
        {
            name: 'Networking',
            icon: Icons['web'],
            description: 'I am working on a networking project and have gained knowledge in routing, switching and network security. I helped rebuild the network of the Faculty of Medicine, University of Ruhuna.',
            links: []
        },
        {
            name: 'Build Several Websites',
            icon: Icons['web'],
            description: 'I have limited coding knowledge, but I\'ve used it effectively to create several websites.',
            links: []
        }
    ]
};

/** Config for sections */
const CustomSectionsConfig = [
    // PROJECTS SECTION
    {
        // Name of the section
        name: 'projects',
        // Icon next to the header title. The headerIcon can use any SVG icon, material icons are preferred
        // See https://material-ui.com/components/material-icons/
        headerIcon: <ComputerIcon />,
        // Extra classes to apply styling
        // "section-reverse" class makes a section right to left
        extraClass: '',
        // If you don't want a section in menu, make this true
        notInMenu: false,
        // Content inside the section
        content: (
            <>
                {ProjectsConfig.projects.map((project, index) => {
                    return (
                        <div key={'project-' + index}>
                            <h3 style={{ fontSize: '1.4rem' }}>{project.icon} {project.name}</h3>
                            <p>{project.description}</p>
                            <div style={{ textAlign: 'right' }}>
                                {project.links.map((link, linkIndex) => {
                                    return (
                                        <CircleButton key={'project-link-' + index + linkIndex} link={link.link} 
                                            target="_blank" tooltip={link.tooltip} size={1.4}>
                                            {link.icon}
                                        </CircleButton>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </>
        )
    },
    // ABOUT SECTION
    {
        name: 'about',
        headerIcon: <InfoIcon />,
        extraClass: 'about-section section-reverse',
        content: (
            <>
                <h4>{Icons['helpoutline']} who is this guy?</h4>
                <p>
                    I'm trying my best to become a cybersecurity engineer, a bit of a weirdo, and also eager to learn and explore new technologies and work with them. :)
                </p>

                <h4>{Icons['networksecurity']} Main Skills</h4>
                <div className="skills-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem', justifyContent: 'flex-end' }}>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
                        <span title="Networking">{Icons['networking']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Networking</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
                        <span title="Cybersecurity">{Icons['cybersecurity']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Cybersecurity</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
                        <span title="Linux">{Icons['linux']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Linux</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
                        <span title="Windows">{Icons['windows']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Windows</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
                        <span title="Computer Hardware">{Icons['hardware']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Hardware</span>
                    </div>
                </div>

                <h4>{Icons['brush']} Design Skills</h4>
                <div className="skills-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'flex-end' }}>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
                        <span title="Adobe Photoshop">{Icons['photoshop']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Photoshop</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
                        <span title="Adobe Illustrator">{Icons['illustrator']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Illustrator</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
                        <span title="Adobe InDesign">{Icons['indesign']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>InDesign</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
                        <span title="Wondershare Filmora">{Icons['filmora']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Filmora</span>
                    </div>
                </div>
            </>
        )
    },
    {
        name: 'reviews',
        headerIcon: <RateReviewIcon />,
        content: (
            <>
                <h4 style={{ fontSize: '2em' }}>{Icons['helpoutline']} what do others say?</h4>
                <p>
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>"</span>
                    <br />
                    Pathum did an excellent job working on our networking infrastructure. He displayed great technical expertise, and made significant contributions to our project.
                </p>
                <p style={{ textAlign: 'right', fontSize: 'small' }}>
                    <i>
                        <b>Mr. Roshan Rukmal</b>
                        <br />
                        Network Manager
                    </i>
                </p>
                <p>
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>"</span>
                    <br />
                    The mentors have noted Pathum's strong technical skills, quick ability to learn new technologies, and flexibility. He is open-minded, always ready to engage in thoughtful discussions, and makes decisions while considering all perspectives.
                </p>
                <p style={{ textAlign: 'right', fontSize: 'small' }}>
                    <i>
                        <b>Mrs. M.H. Geetha Kamanie</b>
                        <br />
                        Computer Application Assistant
                    </i>
                </p>
                <p>
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>"</span>
                    <br />
                    I've greatly appreciated Pathum's confidence in solving problems independently, even when challenging existing suggestions. His intuition was mostly spot on!
                </p>
                <p style={{ textAlign: 'right', fontSize: 'small' }}>
                    <i>
                        <b>Mrs. S.M Kumarage</b>
                        <br />
                        Technical Officer
                    </i>
                </p>
            </>
        )
    }
];

export { CommonConfig, ProjectsConfig, CustomSectionsConfig, Icons };
