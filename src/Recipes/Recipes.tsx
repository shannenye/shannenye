import React from 'react';
import { RecipeData, recipeData } from './data';
import './Recipes.scss';
import RecipeBlock from '../Shared/RecipeBlock/RecipeBlock';
import { Link } from 'react-router-dom';

const Recipes: React.FC<{}> = () => {
    return (
        <div className='recipes tb-gutter'>
            <h2 className='recipes-title'>Recipes</h2>
            <h3>Try some of my favorite recipes&#33;</h3>
            <div className='recipes-wrapper'>
                <div className='recipes-data-wrapper'>
                    {
                        recipeData.map((recipe: RecipeData) => (
                            <RecipeBlock 
                                key={recipe.id}
                                recipeBlockData={recipe} 
                            />
                        ))
                    }
                </div>
                <Link to='/recipes' className='btn recipes-btn'>
                    View All Recipes
                </Link>
            </div>
        </div>
    )
};

export default Recipes;
