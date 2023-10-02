import { useState } from 'react';
import './App.css';
import RecipeList from './RecipeList';
import { darkModeContext } from './darkModeContext';
import DarkModeButton from './DarkModeButton';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (<darkModeContext.Provider value={[darkMode, setDarkMode]}>
      <DarkModeButton />
      <RecipeList />
      </darkModeContext.Provider>
  );
}

export default App;
