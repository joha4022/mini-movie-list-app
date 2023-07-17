import { AppContext } from "./App"
import { useContext } from "react";

export default function Header() {
  const { movies, search, setSearch, results, setResults} = useContext(AppContext);

  const inputHandler = (word) => {
    setSearch(word);
  }

  const searchHandler = () => {
    if(search.length > 0) {
      const searchResults = [];
    for(let movie of movies) {
      if(movie.title.toLowerCase().includes(search.toLowerCase())) {
        searchResults.push(movie)
      }
    }
    setResults(searchResults);
    }
  }

  const keyListener = (key) => {
    if(key === 'Backspace') {
      setResults(false);
    }
    if(key === 'Enter') {
      searchHandler();
    }
  }
  return (
    <>
      <div className="header">
        <h1>Mini Movie App</h1>
      </div>
      <div className="search-section">
        <input placeholder="search..." onChange={(e)=>{inputHandler(e.target.value)}} onKeyDown={(e)=>{keyListener(e.key)}}></input>
        <button onClick={()=>{searchHandler()}}>Search</button>
      </div>
    </>
  )
}