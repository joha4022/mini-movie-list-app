import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import './App.css';
import { createContext, useState } from 'react';

export const AppContext = createContext();

function App() {
  const [movies, setMovies] = useState(false);

  return (
    <>
      <AppContext.Provider value={{
        movies,
        setMovies
      }}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
