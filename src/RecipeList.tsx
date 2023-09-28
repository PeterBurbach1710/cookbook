import React from 'react';
import RecipeListItem from './RecipeListItem';
import initialRecipes from './recipes';
import { Recipe } from './types/Recipe';

function RecipeList() : React.ReactElement {
    const headline = 'Rezeptliste';

    const recipes : Recipe[] = initialRecipes;

    return (
        <div>
            <h1>{headline}</h1>
            {recipes.map(recipe => <div>{recipe.title}</div>)}
            <RecipeListItem />
        </div>
    )
    ;
}

export default RecipeList;

