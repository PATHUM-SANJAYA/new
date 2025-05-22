import React from 'react';
import './TopSection.scss';

const TopSection = () => {
    return (
        <section className="top-section">
            <div className="background-container">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="moon" />
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
            </div>
            <div className="intro">
                <h1>
                    <span className="text-wrapper">
                        {'Pathum'.split('').map((char, i) => (
                            <span key={i} className="char" style={{ '--delay': `${i * 0.1}s` }}>
                                {char}
                            </span>
                        ))}
                        <span className="space">&nbsp;</span>
                        {'Sanjaya'.split('').map((char, i) => (
                            <span key={i + 7} className="char" style={{ '--delay': `${(i + 7) * 0.1}s` }}>
                                {char}
                            </span>
                        ))}
                    </span>
                </h1>
            </div>
        </section>
    );
};

export default TopSection; 