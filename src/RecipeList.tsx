import React, {useState} from 'react';
import RecipeListItem from './RecipeListItem';
import useRecipe from './useRecipe';
import RecipeForm from './RecipeForm';

import './RecipeList.css';

function RecipeList() : React.ReactElement {
    
    const [headline] = useState<string> ('Rezeptliste'); 

    const {recipes, handleDelete} = useRecipe();

    return (
        <div>
            <h1 className="headline">{headline}</h1>
            {recipes.map(recipe => 
                <RecipeListItem recipe={recipe} key={recipe.id} onDelete={handleDelete}/>
            )}
        <hr/>
        <RecipeForm />
        </div>
    )
    ;
}

export default RecipeList;

