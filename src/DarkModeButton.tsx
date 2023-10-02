import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { darkModeContext } from './darkModeContext';

function DarkModeButton() : React.ReactElement {
    const [, setDarkMode] = useContext(darkModeContext);

    return (
        <Button
            onClick= {() => {
                setDarkMode((prevDarkMode) => !prevDarkMode);
            }}
        >
            Toggle Dark Mode
        </Button>
    )
}

export default DarkModeButton;