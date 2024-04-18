import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: React.FC<{}> = () => {
    return (
        <header className='header'>
            <div className='header-nav'>
                <Link className='profile-wrapper' to='/'>
                    <img className='profile-pic' src='/profile.jpeg' alt='profile-pic' />
                    <h1 className='profile-name'>Shannen Ye</h1>
                </Link>
                
                <div className='nav-item-wrapper'>
                    <Link className='nav-item' to='/portfolio'>
                        <h2>Portfolio</h2>
                    </Link>
                    <Link className='nav-item' to='/recipes'>
                        <h2>Recipes</h2>
                    </Link>
                    <Link className='nav-item' to='/gallery'>
                        <h2>Gallery</h2>
                    </Link>
                </div>
            </div>
            
            <div className='header-bg'>
                <img 
                    className='header-bg-image' 
                    src='/images/pineapple.png' 
                    alt='notebook with laptop pic' 
                />
            </div>
        </header>
    );
};

export default Header;