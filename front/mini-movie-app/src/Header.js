import { AppContext } from "./App"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderWrapperDiv, HeaderBottomDiv } from "./Styled";

export default function Header() {
  const { movies, search, setSearch, setResults } = useContext(AppContext);

  const navigate = useNavigate();

  const inputHandler = (word) => {
    setSearch(word);
  }

  const searchHandler = () => {
    if (search.length > 0) {
      const searchResults = [];
      for (let movie of movies) {
        if (movie.title.toLowerCase().includes(search.toLowerCase())) {
          searchResults.push(movie)
        }
      }
      setResults(searchResults);
    }
  }

  const keyListener = (key) => {
    if (key === 'Backspace') {
      setResults(false);
    }
    if (key === 'Enter') {
      searchHandler();
    }
  }
  return (
    <HeaderWrapperDiv>
      <div className="header">
        <h1 onClick={()=>{navigate('/')}}>Mini Movie App</h1>
      </div>
      <HeaderBottomDiv>
        <div className="search-section">
          <input placeholder="search..." onChange={(e) => { inputHandler(e.target.value) }} onKeyDown={(e) => { keyListener(e.key) }}></input>
          <button className="btn btn-primary" onClick={() => { searchHandler() }}>Search</button>
        </div>
        <div className="menu">
          <button className="btn btn-primary" onClick={() => { navigate('/add-movies') }}>Add Movies</button>
        </div>
      </HeaderBottomDiv>
    </HeaderWrapperDiv>
  )
}