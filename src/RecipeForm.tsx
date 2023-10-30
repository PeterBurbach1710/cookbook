import { Button, TextField } from "@material-ui/core";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useRef } from "react";
import { Recipe } from "./types/Recipe";
import validationSchema from "./validationSchema";

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
  image?: any;
};

const initialContent = {
  title: "",
  ingredient1title: "",
  ingredient1amount: "",
  ingredient1unit: "",
  ingredient2title: "",
  ingredient2amount: "",
  ingredient2unit: "",
  ingredient3title: "",
  ingredient3amount: "",
  ingredient3unit: "",
  step1: "",
  step2: "",
  step3: "",
};

type RecipeFormProps = {
    onSave: (recipe: Omit<Recipe, 'id'>) => Promise<void>;
};

function RecipeForm({onSave}: RecipeFormProps): React.ReactElement {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect( () => {
        inputRef.current?.focus();
    })

/*   const [data, setData] = useState<RecipeFormContent>(initialContent);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    // console.log(event.currentTarget.name, event.currentTarget.value);
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  } */

  async function handleSubmit(data: RecipeFormContent) {
    // console.log(data);
    // save to server
    const recipeData: Omit<Recipe, 'id'> = {
      title: data.title,
      ingredients: [
        {
          title: data.ingredient1title,
          amount: parseInt(data.ingredient1amount, 10),
          unit: data.ingredient1unit,
        },
        {
          title: data.ingredient2title,
          amount: parseInt(data.ingredient2amount, 10),
          unit: data.ingredient2unit,
        },
        {
          title: data.ingredient3title,
          amount: parseInt(data.ingredient3amount, 10),
          unit: data.ingredient3unit,
        },
      ],
      steps: [data.step1,data.step2,data.step3],
      image: data.image,
    };
    await onSave(recipeData);
    // setData(initialContent);
  }

  return (
    <Formik validationSchema={validationSchema} initialValues={initialContent} onSubmit={async (values, action) => {
        await handleSubmit(values);
        // reset form state
        action.setSubmitting(false);
        // reset form
        action.resetForm();
    }}>
        

    {({ setFieldValue }) => {
        return (
            <Form>
                <h1>Form works</h1>
                <div>
                    <Field name="title">
                        {({field, meta} : any) => (
                            <TextField
                            label="Title"
                            type="text"
                            {...field}
                            error={!!(meta.touched && meta.error)}
                            inputRef={inputRef}
                            />
                        )}
                    </Field>
                    <ErrorMessage name="title" />
                </div>
                <div>
                    <label>Bild</label>
                    <input type="file" onChange={(event) => {
                        setFieldValue('image', event.currentTarget.files![0])
                    }}/>
                </div>
                <h2>Zutaten</h2>
                {/* Ingredient 1 */}
                <div style={{display:'flex'}}>
                    <div>
                        <Field name="ingredient1title">
                            {({field} : any) => (
                                <TextField
                                label="Zutat"
                                type="text"
                                {...field}
                                />
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field name="ingredient1amount">
                            {({field, meta} : any) => (
                                <TextField
                                label="Menge"
                                type="text"
                                {...field}
                                error={!!(meta.touched && meta.error)}
                                />
                            )}
                        </Field>
                        <ErrorMessage name="ingredient1amount" />
                        <br/>
                    </div>
                    <div>
                        <Field name="ingredient1unit">
                            {({field} : any) => (
                                <TextField
                                label="Einheit"
                                type="text"
                                {...field}
                                />
                            )}
                        </Field>
                    </div>
                </div>
                {/* Ingredient 2 */}
                <div style={{display:'flex'}}>
                    <div>
                        <Field name="ingredient2title">
                            {({field} : any) => (
                                <TextField
                                label="Zutat"
                                type="text"
                                {...field}
                                />
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field name="ingredient2amount">
                            {({field, meta} : any) => (
                                <TextField
                                label="Menge"
                                type="text"
                                {...field}
                                error={!!(meta.touched && meta.error)}
                                />
                            )}
                        </Field>
                        <ErrorMessage name="ingredient2amount" />
                    </div>
                    <div>
                        <Field name="ingredient2unit">
                            {({field} : any) => (
                                <TextField
                                label="Einheit"
                                type="text"
                                {...field}
                                />
                            )}
                        </Field>
                    </div>
                </div>
                {/* Ingredient 3 */}
                <div style={{display:'flex'}}>
                    <div>
                        <Field name="ingredient3title">
                            {({field} : any) => (
                                <TextField
                                label="Zutat"
                                type="text"
                                {...field}
                                />
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field name="ingredient3amount">
                            {({field, meta} : any) => (
                                <TextField
                                label="Menge"
                                type="text"
                                {...field}
                                error={!!(meta.touched && meta.error)}
                                />
                            )}
                        </Field>
                        <ErrorMessage name="ingredient3amount" />
                    </div>
                    <div>
                        <Field name="ingredient3unit">
                            {({field} : any) => (
                                <TextField
                                label="Einheit"
                                type="text"
                                {...field}
                                />
                            )}
                        </Field>
                    </div>
                </div>
                
                {/* Steps */}
                <h2>Zubereitungsschritte</h2>
                <div>
                    <Field name="step1">
                        {({field} : any) => (
                            <TextField
                            label="Schritt"
                            type="text"
                            {...field}
                            />
                        )}
                    </Field>
                </div>
                <div>
                    <Field name="step2">
                        {({field} : any) => (
                            <TextField
                            label="Schritt"
                            type="text"
                            {...field}
                            />
                        )}
                    </Field>
                </div>
                <div>
                    <Field name="step3">
                        {({field} : any) => (
                            <TextField
                            label="Schritt"
                            type="text"
                            {...field}
                            />
                        )}
                    </Field>
                </div>
                <Button type="submit">speichern</Button>
            </Form>
        )
    }}
    </Formik>
  );
}

export default RecipeForm;
