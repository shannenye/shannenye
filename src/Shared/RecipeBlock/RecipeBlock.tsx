import React from 'react';
import './RecipeBlock.scss';
import { RecipeBlockData } from '../../Recipes/data';

const RecipeBlock: React.FC<{recipeBlockData: RecipeBlockData}> = ({ recipeBlockData }) => {
    const {
        id,
        name,
        shortDesc,
        thumbnail 
    }= recipeBlockData;
    
    return (
        <a className='recipe-block' href={`/recipes/${id}`}>
            <div className='recipe-block-img-wrapper'>
                { 
                    thumbnail && 
                    <img 
                        className='recipe-block-img' 
                        src={thumbnail ?? ''} 
                        alt='thumbnail' 
                    /> 
                }
            </div>
            
            <div className='recipe-block-content-wrapper'>
                <h4 className='recipe-block-name'>{name}</h4>
                <p className='recipe-block-content'>{shortDesc}</p>
            </div>
        </a>
    );
};

export default RecipeBlock;
