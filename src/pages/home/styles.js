import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 2rem;
`

export const MovieList = styled.div`
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  /* background-color: red; */

  @media (max-width:650px) {
    max-width: 70%;
  }
`

export const Atual = styled.h1`
  margin-bottom: 15px;
`

export const Movie = styled.div`
  text-align: center;
  max-width: 200px;
  height: 350px;
  margin-left: 15px;

  img {
    width: 200px;
    margin-bottom: 10px;
    transition: all ease 0.3s;
    border-radius: 1rem;
  }
  img:hover {
    transform: scale(1.05);
  }

  span {
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }

  a {
  }

  a:hover {
    transform: scale(1.1);
  }

  @media (max-width:650px) {
    img{
      width: 150px;
    }
  }
`

export const GlobalList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  margin: 50px auto 20px auto;
  max-width: 70%;
  column-gap: 3rem;
  row-gap: 4rem;
`

export const GlobalLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
  span {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
  }
  a {
    transition: all ease 0.3s;
  }
  a:hover {
    transform: scale(1.1);
  }
`
