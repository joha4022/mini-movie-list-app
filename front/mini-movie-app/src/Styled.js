import {styled} from 'styled-components';

// Home.js & Custom.js
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
const BackdropImg = styled.div`
  width: 300px;
  height: 450px;
  position: relative;
  background: #80808075;
  top: -450px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

// Header.js css
const HeaderWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`
const HeaderBottomDiv = styled.div`
  display: flex;
  flex-direction: row;
`

export {
  MovieBoxDiv,
  SingleMovieDiv,
  PosterImg,
  HeaderWrapperDiv,
  HeaderBottomDiv,
  BackdropImg
}