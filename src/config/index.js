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
import SchoolIcon from '@material-ui/icons/School';

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
        imageUrl: process.env.PUBLIC_URL + '/profile.png',  // Using PUBLIC_URL for correct path resolution
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
            name: "LinkedIn",
            icon: Icons['linkedin'],
            link: "https://www.linkedin.com/in/pathum-sanjaya-b86155367/"
        },
        {
            name: "GitHub",
            icon: Icons['github'],
            link: "https://github.com/PATHUM-SANJAYA"
        },
        {
            name: "WhatsApp",
            icon: Icons['whatsapp'],
            link: "https://api.whatsapp.com/send/?phone=94725510768&text=Hello+PATHUM&type=phone_number&app_absent=0"
        },
        {
            name: "Email",
            icon: Icons['email'],
            link: "https://mail.google.com/mail/u/0/?fs=1&to=pathumsanjaya.info@gmail.com&su=I+am+looking+to+hire&body=Hello+Pathum,%0A%0A&tf=cm"
        },
        {
            name: "CV",
            icon: Icons['link'],
            link: "https://drive.google.com/file/d/10QRCR5pjl3nXHxbnePUc4dSbl0ab4xkI/view"
        }
    ]
};

/** Config for the education section */
const EducationConfig = {
    // Name / title of the section
    name: 'education',
    // Icon next to the header title
    headerIcon: <SchoolIcon />,
    // Extra classes to apply styling
    extraClass: '',
    // Education entries
    education: [
        {
            degree: 'NVQ Level 4',
            field: 'Computer Hardware and Network Technician',
            institution: 'College of Technology - Galle',
            period: '2024-01-16 - 2025-01-10'
        },
        {
            degree: 'NVQ Level 4',
            field: 'Computer Graphic Designer',
            institution: 'Technical College - Kalutara',
            period: '2023-02-27 - 2023-08-26'
        },
        {
            degree: 'G.C.E. Ordinary Level Examination (O/L)',
            field: '',
            institution: 'WP/MT Welipenna Sinhala Junior School',
            period: '2021',
            result: 'Passed'
        }
    ]
};

/** Config for the experience section */
const ExperienceConfig = {
    // Name / title of the section
    name: 'experience',
    // Icon next to the header title
    headerIcon: <BusinessCenterIcon />,
    // Extra classes to apply styling
    extraClass: 'section-reverse',
    // Experiences
    experiences: [
        {
            company: 'Faculty of Medicine, University of Ruhuna',
            position: 'Computer Network Technician',
            period: 'January 2025 - June 2025',
            description: 'I have successfully completed the 1 year NVQ Level 4 course in Computer Networking and Computer Hardware at the College of Technology Galle. Additionally, I completed a six-month training program as a Computer Network Technician at the Faculty of Medicine, University of Ruhuna. During this training period, I gained hands-on experience in computer networking, server-side administration, network configuration, computer hardware maintenance, and Linux system operations.'
        },
        {
            company: 'Studio Jayampath',
            position: 'Graphic Designer',
            period: 'August 2023 - January 2024',
            description: 'I have completed the six-month NVQ Level 4 course in Computer Graphic Design at the Technical College, Kalutara. Additionally, I undertook a six-month training program as a Graphic Designer at Studio Jayampath, Abagaha Junction. During this training, I developed a strong foundation in graphic design principles, including color theory, layout design, and the use of modern design tools and software.'
        },
        {
            company: 'Self-Employed',
            position: 'Graphic Designer & IT Technician',
            period: 'Ongoing',
            description: 'I have been working as a freelance Graphic Designer and IT Technician, providing creative and technical services to a variety of clients. Through this role, I have applied my knowledge in graphic design, computer hardware, and networking to real-world projects. I have worked on logo design, social media content, branding, and also offered support in computer maintenance, networking setups, and troubleshooting.'
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
            name: 'PixelCeylon',
            icon: Icons['web'],
            description: 'A real-time, collaborative pixel art canvas where people from anywhere in the world can draw together—right inside their web browser. No downloads, no accounts—just open the site and start creating pixel art instantly.',
            links: [
                {
                    tooltip: 'Visit Website',
                    link: 'https://massive-south-globe.glitch.me',
                    icon: Icons['link']
                }
            ]
        },
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
    // EXPERIENCE SECTION
    {
        name: 'experience',
        headerIcon: <BusinessCenterIcon />,
        extraClass: 'section-reverse',
        notInMenu: false,
        content: (
            <>
                {ExperienceConfig.experiences.map((exp, index) => {
                    return (
                        <div key={'experience-' + index} className="experience-item">
                            <div className="experience-header">
                                <h3 style={{ fontSize: '1.4rem' }}>{Icons['briefcase']} {exp.position}</h3>
                                <h4 style={{ color: 'var(--accent-primary)', marginTop: '0.5rem' }}>{exp.company}</h4>
                                <div className="experience-period" style={{ 
                                    display: 'inline-block',
                                    padding: '0.3rem 0.8rem',
                                    backgroundColor: 'rgba(var(--accent-primary-rgb), 0.1)',
                                    borderRadius: '4px',
                                    color: 'var(--accent-primary)',
                                    fontSize: '0.9rem',
                                    marginTop: '0.5rem'
                                }}>
                                    {exp.period}
                                </div>
                            </div>
                            <p style={{ marginTop: '1rem' }}>{exp.description}</p>
                        </div>
                    );
                })}
            </>
        )
    },
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
    // EDUCATION SECTION
    {
        name: 'education',
        headerIcon: <SchoolIcon />,
        extraClass: 'section-reverse',
        notInMenu: false,
        content: (
            <>
                <div className="education-container" style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '2rem',
                    position: 'relative'
                }}>
                    {/* Timeline line - simplified */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: '40px',
                        bottom: '20px',
                        width: '3px',
                        background: 'var(--accent-primary)',
                        zIndex: 0
                    }}></div>
                    
                    {EducationConfig.education.map((edu, index) => {
                        return (
                            <div key={'education-' + index} className="education-item" style={{
                                position: 'relative',
                                paddingLeft: '60px',
                                marginBottom: '1.5rem',
                                zIndex: 1,
                                transition: 'all 0.3s ease',
                                transform: 'translateY(0)',
                                ':hover': {
                                    transform: 'translateY(-5px)'
                                }
                            }}>
                                {/* Timeline dot - simplified */}
                                <div style={{
                                    position: 'absolute',
                                    left: '10px',
                                    top: '15px',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    background: 'var(--accent-primary)',
                                    zIndex: 2
                                }}></div>
                                
                                <div className="education-card" style={{
                                    background: 'var(--bg-secondary)',
                                    borderRadius: '10px',
                                    padding: '1.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                    border: '1px solid rgba(var(--accent-primary-rgb), 0.2)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div className="education-header" style={{
                                        marginBottom: '1rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.5rem'
                                    }}>
                                        <h3 style={{ 
                                            fontSize: '1.4rem',
                                            color: 'var(--accent-primary)'
                                        }}>
                                            {Icons['school']} {edu.degree}
                                        </h3>
                                        
                                        {edu.field && 
                                            <h4 style={{ 
                                                color: 'var(--accent-primary)', 
                                                marginTop: '0.2rem',
                                                fontSize: '1.1rem'
                                            }}>
                                                {edu.field}
                                            </h4>
                                        }
                                        
                                        <h5 style={{ 
                                            marginTop: '0.2rem',
                                            color: 'var(--text-primary)',
                                            fontWeight: 'normal',
                                            fontSize: '1rem'
                                        }}>
                                            {edu.institution}
                                        </h5>
                                        
                                        <div style={{
                                            display: 'flex',
                                            gap: '0.5rem',
                                            marginTop: '0.5rem',
                                            flexWrap: 'wrap'
                                        }}>
                                            <div className="education-period" style={{ 
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                padding: '0.3rem 0.8rem',
                                                backgroundColor: 'rgba(var(--accent-primary-rgb), 0.1)',
                                                borderRadius: '20px',
                                                color: 'var(--accent-primary)',
                                                fontSize: '0.9rem'
                                            }}>
                                                <span style={{ marginRight: '5px' }}>{Icons['calendar']}</span>
                                                {edu.period}
                                            </div>
                                            
                                            {edu.result && (
                                                <div className="education-result" style={{ 
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    padding: '0.3rem 0.8rem',
                                                    backgroundColor: 'rgba(var(--accent-secondary-rgb), 0.1)',
                                                    borderRadius: '20px',
                                                    color: 'var(--accent-secondary)',
                                                    fontSize: '0.9rem',
                                                    marginLeft: '0.5rem'
                                                }}>
                                                    <span style={{ marginRight: '5px' }}>{Icons['star']}</span>
                                                    Result: {edu.result}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
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

export { CommonConfig, EducationConfig, ExperienceConfig, ProjectsConfig, CustomSectionsConfig, Icons };
