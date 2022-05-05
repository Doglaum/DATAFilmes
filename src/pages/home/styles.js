import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 2rem;
`

export const MovieList = styled.div`
  margin-left: 10%;
  margin-right: 10%;
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
`

export const GlobalList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  margin: 50px 10% 20px 10%;
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
