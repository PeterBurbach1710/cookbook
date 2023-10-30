import { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import DarkModeButton from './DarkModeButton';
import RecipeDetails from './RecipeDetails';
import RecipeList from './RecipeList';
import { darkModeContext } from './darkModeContext';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <darkModeContext.Provider value={[darkMode, setDarkMode]}>
      <DarkModeButton />
      <Router>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/detail/:id" element={<RecipeDetails />} />
          <Route path="/new" element={<RecipeList />} />
          <Route path="*" element={
            <div>404 Unzulässiger Pfad
              <br />
              <Link to="/">Starte Hier</Link>
            </div>} />
        </Routes>
      </Router>
    </darkModeContext.Provider>
  );
}

export default App;
