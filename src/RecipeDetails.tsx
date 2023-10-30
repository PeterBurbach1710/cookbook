import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Recipe } from "./types/Recipe";

function RecipeDetails() : React.ReactElement {
    const [recipe, setRecipe] = useState<Recipe>();
    const {id} = useParams<{id: string}>();
    const history = useNavigate();

    useEffect( () => {
        async function fetchRecipe() {
            const {data} = await axios.get(`http://localhost:3001/recipe/${id}`);
            setRecipe(data);
        }
        fetchRecipe();
    }, [id])

    if (recipe) {
        return (
            <div>
                <h2>{recipe.title}</h2>
                <Button onClick={() => {
                    history('/');
                }}>
                    zurück
                </Button>
            </div>
        );
    } else {
        return (
            <div>
                <h2>Rezept nicht gefunden</h2>
                <br/>
                <Link to="/">Zurück zur Liste</Link>
            </div>
        );
    }
}

export default RecipeDetails;