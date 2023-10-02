import { Button, TextField } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';

type RecipeFormContent = {
    title: string;
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
}

function RecipeForm(): React.ReactElement {

    const [data, setData] = useState<RecipeFormContent>(initialContent);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        console.log(event.currentTarget.name, event.currentTarget.value);
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
        <Button type="submit">speichern</Button>
    </form>
}

export default RecipeForm;