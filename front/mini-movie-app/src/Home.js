import { useContext, useEffect } from "react"
import { AppContext } from './App';
import Header from "./Header";
import { MovieBoxDiv, SingleMovieDiv, PosterImg } from "./Styled";

export default function Home() {
  const { movies, setMovies, results } = useContext(AppContext);

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(res => res.json())
      .then(data => {
        setMovies(data);
      })
  }, [])

  if (movies && results === false) {
    return (
      <>
        <Header />
        <MovieBoxDiv>
          {movies.map((movie, index) => {
            return (
              <SingleMovieDiv key={index}>
                <div>
                  <PosterImg src={movie.img}></PosterImg>
                </div>
                <div key={index}>
                  {movie.title}
                </div>
              </SingleMovieDiv>
            )
          })}
        </MovieBoxDiv>
      </>
    )
  } else if (results) {
    return (
      <>
        <Header />
        <MovieBoxDiv>
          {results.map((movie, index) => {
            return (
              <SingleMovieDiv key={index}>
                <div>
                  <PosterImg src={movie.img}></PosterImg>
                </div>
                <div key={index}>
                  {movie.title}
                </div>
              </SingleMovieDiv>
            )
          })}
        </MovieBoxDiv>
      </>
    )
  }
}