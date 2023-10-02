import React, { useEffect } from 'react';
import { Recipe } from './types/Recipe';

// styled components: import { Row } from './RecipeListItem.styles';
// Vorteil: jsx Elemente sprechende Namen "row" statt "div"- im Browser class="sc-dncRM HTifHH"
// react css: import './RecipeListItem.css';
import './RecipeListItem.scss';
// module css: import styles from './RecipeListItem.module.css';
import classNames from 'classnames';

type Props = {
    recipe: Recipe;
    onDelete: (id: number) => void;
}

function RecipeListItem({ recipe, onDelete }: Props) : React.ReactElement {
    useEffect(() => {
        return () => {
            console.log("Komponente mit der ID " + recipe.id + " wurde entfernt.")
        }
    }, [recipe.id]);

    let titleClasses = classNames({
        Title: true,
        Padding: true
    });

    return (
        <div className="RecipeListItem">
            <div className="Row Padding">
                <div className={titleClasses}>
                    {recipe.title} 
                </div>
                <div className="Button">
                    <button
                        onClick={() => {
                            onDelete(recipe.id);
                        }}
                    >löschen</button>
                </div>
            </div>
        </div>
    )
}

export default RecipeListItem;

