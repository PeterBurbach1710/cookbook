import React from 'react';
import RecipeListItem from './RecipeListItem';
import initialRecipes from './recipes';
import { Recipe } from './types/Recipe';
import { useState } from 'react';

function RecipeList() : React.ReactElement {
    const [headline] = useState<string> ('Rezeptliste');

    const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);

    function handleDelete(id: number) {
        setRecipes((prevRecipes) => {
            return prevRecipes.filter((recipe) => recipe.id !== id);
        });

    }

    return (
        <div>
            <h1>{headline}</h1>
            {recipes.map(recipe => 
                <RecipeListItem recipe={recipe} key={recipe.id} onDelete={handleDelete}/>
            )}
        </div>
    )
    ;
}

export default RecipeList;

