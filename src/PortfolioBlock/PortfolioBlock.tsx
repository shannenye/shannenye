import React from 'react';
import './PortfolioBlock.scss';
import { Link } from 'react-router-dom';

const PortfolioBlock: React.FC<{}> = () => {
    return (
        <div className='portfolio-block tb-gutter'>
            <h2 className='portfolio-block-title'>Portfolio</h2>
            <h3>Check out some of my projects</h3>
            <div className='portfolio-block-wrapper'>
                <div className='portfolio-block-cell-dot-wrapper'>
                    <div className='portfolio-block-cell-wrapper'>
                        <div className='portfolio-block-cell'>
                            
                        </div>
                        <div className='portfolio-block-cell'>
                            
                        </div>
                        <div className='portfolio-block-cell'>
                            
                        </div>
                    </div>
                    <div className='portfolio-block-dot-wrapper'>
                        
                    </div>
                </div>
                <Link className='btn portfolio-block-btn' to='/portfolio'>
                    View All Portfolio Samples
                </Link>
            </div>
        </div>
    );
};

export default PortfolioBlock;

