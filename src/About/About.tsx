import React from 'react';
import './About.scss';

const About: React.FC<{}> = () => {
    return (
        <div className='about tb-gutter'>
            <h2 className='about-title'>About Me</h2>
            <p className='about-content'>
                I was born and raised in New York but relocated to McKinney, TX after my husband and I got married in mid 2023. We live in a cute little apartment with our beautiful chonky Siberian cat, Coda. In 2018 I began my journey to be a Software Engineer and am currently specializing in Javascript, React, Typescript, Angular, Nodejs, and Jest. This site is built using most of those technologies as a way to showcase my abilities and also to have my own space for storing my other interests. This is a work in progress but I hope to incorporate more technologies and milestones as I go. 
            </p>
        </div>
    )  
};

export default About;
