import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import './App.css';

function App() {
  return (
    <>
    <h1>Movie Mini App</h1>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
