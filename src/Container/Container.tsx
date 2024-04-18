import React from 'react';
import EmailBlock from '../EmailBlock/EmailBlock';
import Recipes from '../Recipes/Recipes';

const Container: React.FC<{}> = () => {
    return (
        <>
            <EmailBlock />
            <Recipes />
        </>
    );
};

export default Container;
