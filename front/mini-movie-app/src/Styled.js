import {styled} from 'styled-components';

const MovieBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
const SingleMovieDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`
const PosterImg = styled.img`
  width: 300px;
  height: 450px;
`
export {
  MovieBoxDiv,
  SingleMovieDiv,
  PosterImg,
}