import { useContext, useEffect } from "react"
import { AppContext } from './App';
import Header from "./Header";

export default function Home() {
  const {movies, setMovies} = useContext(AppContext);

  useEffect(()=> {
    fetch('http://localhost:8080/')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data);
      })
  },[])

  if(movies) {
    return (
      <>
      <Header />
        {movies.map((movie, index) => {
          return(
            <div key={index}>
              {movie.title}
            </div>
          )
        })}
      </>
    )
  }
}