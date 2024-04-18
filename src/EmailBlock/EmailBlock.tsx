import React from 'react';
import './EmailBlock.scss';

const EmailBlock: React.FC<{}> = () => {
    return (
        <div className='email-block'>
            <a className='email-block-btn' href='mailto: shannen.ye@gmail.com'>
                <span className='email-icon'>
                    <i className="fa fa-envelope"></i>
                </span>
                <h2 className='email-text'>
                    Get in touch! Email me
                </h2>
            </a>
        </div>
    );
};

export default EmailBlock;