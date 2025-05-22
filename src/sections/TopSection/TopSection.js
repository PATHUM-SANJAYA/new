import React from 'react';
import CircleButton from '../../components/CircleButton/CircleButton';
import './TopSection.scss';

import { CommonConfig } from '../../config';

class TopSection extends React.Component {

    componentDidMount() {
        if (this.pathElement && CommonConfig.signature?.viewBox) {
            const signatureLength = this.pathElement.getTotalLength();
            this.pathElement.setAttribute('stroke-dasharray', signatureLength);
            this.pathElement.setAttribute('stroke-dashoffset', signatureLength);
            
            const viewBoxCoords = CommonConfig.signature.viewBox.split(' ').map(val => parseInt(val));
            this.pathElement.setAttribute('stroke-width', Math.max(...viewBoxCoords) / 100);
        }
    }

    render() {
        return (
            <div className="top-section">
                <div className="intro">
                    <h1 data-text={CommonConfig.name}>{CommonConfig.name}</h1>
                </div>
                <div className="signature">
                    {CommonConfig.signature?.isImage ? (
                        <div className="profile-image-container">
                            <div className="profile-image-ring outer-ring"></div>
                            <div className="profile-image-ring inner-ring"></div>
                            <div className="profile-image-ring middle-ring"></div>
                            <div className="profile-image-particles"></div>
                            <div className="profile-image-glow"></div>
                            <img 
                                src={CommonConfig.signature.imageUrl} 
                                alt="Signature"
                                className="profile-image"
                                style={CommonConfig.signature.style}
                            />
                        </div>
                    ) : (
                        <svg viewBox={CommonConfig.signature?.viewBox}>
                            <path ref={pathElement => {
                                this.pathElement = pathElement;
                            }} id="signature-path" stroke="var(--text-primary)" fill="none"
                                d={CommonConfig.signature?.signaturePathD} />
                        </svg>
                    )}
                </div>
                <div className="social">
                    {CommonConfig.social.map((socialDetails, index) => {
                        return (
                            <CircleButton 
                                key={'top-section-social-' + index} 
                                tooltip={socialDetails.name} 
                                tooltipPlacement="top"
                                link={socialDetails.link} 
                                target="_blank"
                            >
                                {socialDetails.icon}
                            </CircleButton>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default TopSection;