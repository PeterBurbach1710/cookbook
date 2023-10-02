import { useState } from 'react';
import './App.css';
import RecipeList from './RecipeList';
import { darkModeContext } from './darkModeContext';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (<darkModeContext.Provider value={[darkMode, setDarkMode]}>
      <RecipeList />
      </darkModeContext.Provider>
  );
}

export default App;
