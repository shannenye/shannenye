import React from 'react';
import EmailBlock from '../EmailBlock/EmailBlock';
import Recipes from '../Recipes/Recipes';
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
            <Recipes />
        </div>
    );
};

export default Home;
