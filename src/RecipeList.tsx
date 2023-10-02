import axios from 'axios';
import React, {useState, useEffect} from 'react';
import RecipeListItem from './RecipeListItem';
import { Recipe } from './types/Recipe';

import './RecipeList.css';

function RecipeList() : React.ReactElement {
    
    const [headline] = useState<string> ('Rezeptliste');

    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get<Recipe[]>('http://localhost:3001/recipe');
            setRecipes(data);
        }
        fetchData();
    }, []);
    
    async function handleDelete(id: number) {
        try {
            await axios.delete('http://localhost:3001/recipe/' + id);
            setRecipes((prevRecipes) => {
                return prevRecipes.filter((recipe) => recipe.id !== id);
            });
        } catch (e) {
            console.error("Beim Löschen ist ein Fehler aufgetreten: " + e);
            alert("Beim Löschen ist ein Fehler aufgetreten: " + e);
        }
    }

    return (
        <div>
            <h1 className="headline">{headline}</h1>
            {recipes.map(recipe => 
                <RecipeListItem recipe={recipe} key={recipe.id} onDelete={handleDelete}/>
            )}
        </div>
    )
    ;
}

export default RecipeList;

