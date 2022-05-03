import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../header'
import Search from '../search'
import { Atual, Container, Movie, MovieList } from './styles'

function Home() {
  const [movies, setMovies] = useState([])
  const [searchMovies, setSearchMovies] = useState('')
  const image_path = 'https://image.tmdb.org/t/p/w500'
  const [navigate, setNavigate] = useState('popular')
  const [title, setTitle] = useState('Populares')

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${navigate}?api_key=${process.env.REACT_APP_PV_KEY}&language=pt-BR&page=1`
      )
      .then(response => {
        setMovies(response.data.results)
      })
      .catch(error => console.error(error))
  }, [navigate])

  return (
    <div>
      <Header setNavigate={setNavigate} setTitle={setTitle} />
      <Container>
        <Search onChange={e => setSearchMovies(e.target.value)}></Search>
        <Atual>{title}:</Atual>
        <MovieList>
          {movies
            .filter(movie =>
              movie.title.toLowerCase().includes(searchMovies.toLowerCase())
            )
            .map(movie => {
              return (
                <Movie key={movie.id}>
                  <Link to={`/details/${movie.id}`}>
                    <img
                      src={`${image_path}${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </Link>
                  <span>{movie.title}</span>
                </Movie>
              )
            })}
        </MovieList>
      </Container>
    </div>
  )
}

export default Home
