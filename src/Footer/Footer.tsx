import React from "react";
import './Footer.scss';

const Footer: React.FC<{}> = () => {
    return (
        <footer className='footer'>
            <a 
                className='footer-icon-wrapper' 
                href='https://www.linkedin.com/in/shannenye/'
            >
                <i className='fa fa-linkedin-square' aria-hidden="true"></i>
                <span className='footer-media-text'>LinkedIn</span>
            </a>
            <a 
                className='footer-icon-wrapper' 
                href='https://profile.indeed.com/p/shanneny-cxljsyl'
            >
                <i className='fa fa-solid fa-info' aria-hidden="true"></i>
                <span className='footer-media-text'>Indeed</span>
            </a>
            <a 
                className='footer-icon-wrapper' 
                href='https://github.com/shannenye'
            >
                <i className="fa fa-github-square" aria-hidden="true"></i>
                <span className='footer-media-text'>Github</span>
            </a>
        </footer>
    );
};

export default Footer;