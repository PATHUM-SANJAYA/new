import React from 'react';
import Menu from './components/Menu/Menu';
import TopSection from './sections/TopSection/TopSection';
import CustomSections from './sections/CustomSections/CustomSections';
import Footer from './sections/Footer/Footer';
import FreePalestine from './components/FreePalestine/FreePalestine';

import { CustomSectionsConfig, CommonConfig } from './config'

class App extends React.Component {

    constructor(props) {
        super(props);
        // Always set dark theme as default
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        
        // Keep the ability to switch themes if user has explicitly set a preference
        const theme = localStorage.getItem('theme');
        if (theme && theme === 'light') {
            document.body.classList.remove('dark-mode');
        }

        this.sectionRefs = {};

        // Creating refs for sections for smooth scrolling
        CustomSectionsConfig.forEach((customSection) => {
            this.sectionRefs[customSection.name] = React.createRef();
        });

        // Setting document title
        document.title = CommonConfig.browserTitle || CommonConfig.name;
    }

    // Generate random particles for the background effect
    generateParticles() {
        // Only show particles on desktop/Mac devices
        const isDesktop = window.innerWidth >= 1024;
        
        if (!isDesktop) {
            return []; // No particles on mobile/tablet for better performance
        }
        
        const count = 12; // Moderate number of particles
        const particles = [];
        
        for (let i = 0; i < count; i++) {
            particles.push(
                <div 
                    key={`particle-${i}`} 
                    className="particle" 
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${4 + Math.random() * 3}s`, // Slightly slower for better performance
                        opacity: 0.6
                    }}
                />
            );
        }
        
        return particles;
    }
    
    render() {
        return (
            <>
                {CommonConfig.addFreePalestine && <FreePalestine />}
                {/* Animated background particles */}
                {this.generateParticles()}
                <Menu sectionRefs={this.sectionRefs} />
                <TopSection />
                <CustomSections sectionRefs={this.sectionRefs} />
                <Footer />
            </>
        );
    }
}

export default App;