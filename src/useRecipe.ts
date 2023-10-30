import axios from "axios";
import { useEffect, useState } from "react";
import { Recipe } from "./types/Recipe";

function useRecipe() {
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

    async function handleSave(recipe: Omit<Recipe, 'id'>): Promise<void> {
        const formData = new FormData();
        formData.append('title', recipe.title);
        formData.append('ingredients', JSON.stringify(recipe.ingredients[0]));
        formData.append('ingredients', JSON.stringify(recipe.ingredients[1]));
        formData.append('ingredients', JSON.stringify(recipe.ingredients[2]));
        formData.append('steps', JSON.stringify(recipe.steps[0]));
        formData.append('steps', JSON.stringify(recipe.steps[1]));
        formData.append('steps', JSON.stringify(recipe.steps[2]));
        if (recipe.image) {
            formData.append('image', recipe.image);
        }

        const {data} = await axios.post(
            'http://localhost:3001/recipe', 
            formData,
            {headers: {'Content-Type': 'multipart/form-data'}});
        setRecipes((prevRecipes) => ([...prevRecipes, data]));

    }

    return {
        recipes,
        handleDelete,
        handleSave,
    }
}

export default useRecipe;