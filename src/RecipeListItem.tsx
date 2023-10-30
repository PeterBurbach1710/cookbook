import React, { useContext } from 'react';
import { Recipe } from './types/Recipe';

// styled components: import { Row } from './RecipeListItem.styles';
// Vorteil: jsx Elemente sprechende Namen "row" statt "div"- im Browser class="sc-dncRM HTifHH"
// react css: import './RecipeListItem.css';
import './RecipeListItem.scss';
// module css: import styles from './RecipeListItem.module.css';
// import classNames from 'classnames';
import { Row, Padding, Title } from './RecipeListItem.styles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { darkModeContext } from './darkModeContext';


type Props = {
    recipe: Recipe;
    onDelete: (id: number) => void;
}

function RecipeListItem({ recipe, onDelete }: Props) : React.ReactElement {
    const [darkMode] = useContext(darkModeContext);

    // useEffect(() => {
    //     return () => {
    //         console.log("Komponente mit der ID " + recipe.id + " wurde entfernt.")
    //     }
    // }, [recipe.id]);

    // const titleClasses = classNames({
    //     Title: true,
    //     Padding: true
    // });

    return (
        <Row>
           <Title darkmode={darkMode} className='Title'>
                {recipe.title} 
            </Title>
            <Padding darkmode={darkMode}>
                <IconButton aria-label="delete"
                    onClick={() => {
                        onDelete(recipe.id);
                    }}
                    >
                    <DeleteIcon />
                </IconButton>
            </Padding>
        </Row>
/*         <div className="RecipeListItem">
                <div className="Row Padding">
                    <div className={titleClasses}>
                        {recipe.title} 
                    </div>
                    <div className="Button">
                        <IconButton aria-label="delete"
                        onClick={() => {
                            onDelete(recipe.id);
                        }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>
            </div> */
    )
}

export default RecipeListItem;

