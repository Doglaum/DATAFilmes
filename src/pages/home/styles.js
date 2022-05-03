import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 10rem;
`

export const Atual = styled.h1`
  margin-bottom: 50px;
  margin-left: 25%;
  margin-right: auto;
  text-transform: uppercase;
`

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  column-gap: 3rem;
  row-gap: 4rem;
`

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }

  a {
    transition: all ease 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`
