import Header from "./Header"
import { AppContext } from "./App"
import { useContext, useEffect } from "react"
import { MovieBoxDiv, SingleMovieDiv, PosterImg, BackdropImg } from "./Styled";

export default function () {
  const { custom, setCustom } = useContext(AppContext);

  useEffect(()=> {
    fetch('http://localhost:8080/add-movies')
    .then(res => res.json())
    .then(data => {
      setCustom(data);
    })
  },[])

  const addCustomMovie = (title, year, director, rating, movieDescription, poster) => {
    const opt = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        year: year,
        director: director,
        rating: rating,
        movieDescription: movieDescription,
        poster: poster
      })
    }
    fetch('http://localhost:8080/add-movies', opt)
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        fetch('http://localhost:8080/add-movies')
          .then(res => res.json())
          .then(data => {
            setCustom(data);
          })
      })
    document.querySelector('form').reset();
    document.querySelector('#exampleModal').style.display = 'none';
    document.querySelector('#close-button').click();
  }

  console.log(custom);
  return (
    <>
      <Header />
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add a movie</button>
      <MovieBoxDiv>{custom === false || custom.length === 0 ? 'No movies have been added.' : <>
        {custom.map((movie, index) => {
          return (
            <>
            <SingleMovieDiv key={index}>
              <div>
                <PosterImg src={movie.img} onClick={(e)=>{e.currentTarget.parentElement.childNodes[1].style.display='flex'}}></PosterImg>
                <BackdropImg id="backdrop" onClick={(e)=>{e.currentTarget.style.display='none'}}>
                  <button class="btn btn-primary">Details</button>
                  <button class="btn btn-primary">Remove</button>
                </BackdropImg>
              </div>
              <div key={index}>
                {movie.title}
              </div>
            </SingleMovieDiv>
            </>
          )
        })}
      </>}</MovieBoxDiv>
      {/* pop-up modal section */}
      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add a movie</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <>
                <form>
                  <div className="form-group">
                    <label for="movie-title">Movie Title</label>
                    <input type="email" className="form-control" id="movie-title" placeholder="Indiana Jones: Raiders of the Lost Ark"></input>
                  </div>
                  <div className="form-group">
                    <label for="released-year">Released Year</label>
                    <input type="email" className="form-control" id="released-year" placeholder="1981"></input>
                  </div>
                  <div className="form-group">
                    <label for="movie-director">Director</label>
                    <input type="email" className="form-control" id="movie-director" placeholder="Steven Spielberg"></input>
                  </div>
                  <div className="form-group">
                    <label for="movie-rating">Rating</label>
                    <select className="form-control" id="movie-rating">
                      <option>G</option>
                      <option>PG</option>
                      <option>PG-13</option>
                      <option>R</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="movie-description">Movie Description</label>
                    <textarea className="form-control" id="movie-description" rows="3"></textarea>
                  </div>
                  <div className="form-group">
                    <label for="movie-poster">Movie Poster URL</label>
                    <input type="email" className="form-control" id="movie-poster"></input>
                  </div>
                </form>
              </>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" id="close-button" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={() => {
                addCustomMovie(
                  document.querySelector('#movie-title').value,
                  document.querySelector('#released-year').value,
                  document.querySelector('#movie-director').value,
                  document.querySelector('#movie-rating').value,
                  document.querySelector('#movie-description').value,
                  document.querySelector('#movie-poster').value,
                );
              }}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}