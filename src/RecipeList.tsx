import { Dialog, DialogContent } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import RecipeForm from './RecipeForm';
import './RecipeList.css';
import RecipeListItem from './RecipeListItem';
import { Recipe } from './types/Recipe';
import useRecipe from './useRecipe';

function RecipeList() : React.ReactElement {
    const history = useNavigate();
    
    const matchNew = useMatch('/new/');

    const [headline] = useState<string> ('Rezeptliste'); 

    const {recipes, handleDelete, handleSave} = useRecipe();

    return (
        <div>
            <h1 className="headline">{headline}</h1>
            {recipes.map(recipe => 
                <RecipeListItem recipe={recipe} key={recipe.id} onDelete={handleDelete}/>
            )}
            <Link to="/new">Neues Rezept</Link>
            {matchNew &&
                    <Dialog open={true} onClose={() => {
                        history('/');
                    }}
                    aria-labelledby="form-dialog-title"
                    aria-aria-describedby='form-dialog-description'
                    >
                        <DialogContent>
                            <RecipeForm onSave={async (recipe: Omit<Recipe, 'id'>) => {
                                await handleSave(recipe);
                                history('/');
                            }}/>    
                        </DialogContent>
                    </Dialog>
            }
        </div>
    )
    ;
}

export default RecipeList;

