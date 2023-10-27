import { Button, TextField } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';

type RecipeFormContent = {
    title: string;
    ingredient1title: string;
    ingredient1amount: string;
    ingredient1unit: string;
    ingredient2title: string;
    ingredient2amount: string;
    ingredient2unit: string;
    ingredient3title: string;
    ingredient3amount: string;
    ingredient3unit: string;
    step1: string;
    step2: string;
    step3: string;

    // description: string;
    // ingredients: string[];
    // steps: string[];
    // duration: number;
    // difficulty: number;
    // vegetarian: boolean;
    // vegan: boolean;
    // glutenFree: boolean;
    // lactoseFree: boolean;
    // image: string;
}

const initialContent = {
    title : '',
    ingredient1title: '',
    ingredient1amount: '',
    ingredient1unit: '',
    ingredient2title: '',
    ingredient2amount: '',
    ingredient2unit: '',
    ingredient3title: '',
    ingredient3amount: '',
    ingredient3unit: '',
    step1: '',
    step2: '',
    step3: '',
}

function RecipeForm(): React.ReactElement {

    const [data, setData] = useState<RecipeFormContent>(initialContent);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        // console.log(event.currentTarget.name, event.currentTarget.value);
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;
        setData((prevData) => ({...prevData, [name]: value}));
    }

    function handleSubmit() {
        console.log(data);
        // save to server
        setData(initialContent);
    }

    return <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
            <h1>Form works</h1>
            <div>
                <TextField 
                    label="Title"
                    type="text" 
                    name="title" 
                    value={data.title} 
                    onChange={handleChange}
                />
            </div>
            <h2>Zutaten</h2>
            {/* Ingredient 1 */}
            <div>
                <TextField 
                    label="Zutat"
                    type="text" 
                    name="ingredient1title" 
                    value={data.ingredient1title} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <TextField 
                    label="Menge"
                    type="text" 
                    name="ingredient1amount" 
                    value={data.ingredient1amount} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <TextField 
                    label="Einheit"
                    type="text" 
                    name="ingredient1unit" 
                    value={data.ingredient1unit} 
                    onChange={handleChange}
                />
            </div>
            {/* Ingredient 2 */}
            <div>
                <TextField 
                    label="Zutat"
                    type="text" 
                    name="ingredient2title" 
                    value={data.ingredient2title} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <TextField 
                    label="Menge"
                    type="text" 
                    name="ingredient2amount" 
                    value={data.ingredient2amount} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <TextField 
                    label="Einheit"
                    type="text" 
                    name="ingredient2unit" 
                    value={data.ingredient2unit} 
                    onChange={handleChange}
                />
            </div>
            {/* Ingredient 3 */}
            <div>
                <TextField 
                    label="Zutat"
                    type="text" 
                    name="ingredient3title" 
                    value={data.ingredient3title} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <TextField 
                    label="Menge"
                    type="text" 
                    name="ingredient3amount" 
                    value={data.ingredient3amount} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <TextField 
                    label="Einheit"
                    type="text" 
                    name="ingredient3unit" 
                    value={data.ingredient3unit} 
                    onChange={handleChange}
                />
            </div>
            <h2>Zubereitungsschritte</h2>
            <div>
                <TextField 
                    label="Schritt"
                    type="text" 
                    name="step1" 
                    value={data.step1} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <TextField 
                    label="Schritt"
                    type="text" 
                    name="step2" 
                    value={data.step2} 
                    onChange={handleChange}
                />
            </div>  
            <div>
                <TextField 
                    label="Schritt"
                    type="text" 
                    name="step3" 
                    value={data.step3} 
                    onChange={handleChange}
                />
            </div>          
            <Button type="submit">speichern</Button>
        </form>
}

export default RecipeForm;