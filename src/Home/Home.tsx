import React from 'react';
import EmailBlock from '../EmailBlock/EmailBlock';
import About from '../About/About';
import Recipes from '../Recipes/Recipes';
import PortfolioBlock from '../PortfolioBlock/PortfolioBlock';
import './Home.scss';

const Home: React.FC<{}> = () => {
    return (
        <div className='home'>
            <div className='home-bg'>
                <img 
                    className='home-bg-image' 
                    src='/images/pineapple.png' 
                    alt='notebook with laptop pic' 
                />
            </div>
            <EmailBlock />
            <About />
            <PortfolioBlock />
            <Recipes />
        </div>
    );
};

export default Home;
