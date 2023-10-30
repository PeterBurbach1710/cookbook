import { Button, TextField } from "@material-ui/core";
import { Recipe } from "./types/Recipe";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
    };
    await onSave(recipeData);
    // setData(initialContent);
  }

  return (
    <Formik initialValues={initialContent} onSubmit={async (values, action) => {
        await handleSubmit(values);
        // reset form state
        action.setSubmitting(false);
        // reset form
        action.resetForm();
    }}>
        

    {() => {
        return (
            <Form>
                <h1>Form works</h1>
                <div>
                    <Field name="title" validate={(value: string) => {
                        if (value.length <=0) {
                            return 'Bitte einen Titel eingeben';
                        }
                    }}>
                        {({field, meta} : any) => (
                            <TextField
                            label="Title"
                            type="text"
                            {...field}
                            error={!!(meta.touched && meta.error)}
                            />
                        )}
                    </Field>
                    <ErrorMessage name="title" />
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
                            {({field} : any) => (
                                <TextField
                                label="Menge"
                                type="text"
                                {...field}
                                />
                            )}
                        </Field>
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
                            {({field} : any) => (
                                <TextField
                                label="Menge"
                                type="text"
                                {...field}
                                />
                            )}
                        </Field>
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
                            {({field} : any) => (
                                <TextField
                                label="Menge"
                                type="text"
                                {...field}
                                />
                            )}
                        </Field>
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
