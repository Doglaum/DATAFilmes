import Header from '../header'
import Search from '../search'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalLi, GlobalList } from './styles'

function Global() {
  const [movies, setMovies] = useState([])
  const [searchMovies, setSearchMovies] = useState('')
  const image_path = 'https://image.tmdb.org/t/p/w500'
  let id = 0

  useEffect(() => {
    Promise.all([
      api.get(
        `popular?api_key=${process.env.REACT_APP_PV_KEY}&language=pt-BR&page=1`
      ),
      api.get(
        `upcoming?api_key=${process.env.REACT_APP_PV_KEY}&language=pt-BR&page=1`
      ),
      api.get(
        `top_rated?api_key=${process.env.REACT_APP_PV_KEY}&language=pt-BR&page=1`
      )
    ]).then(response => {
      let arr = []
      arr = [...response[0].data.results, ...response[1].data.results, ...response[2].data.results]
      setMovies(arr)
    })
  }, [])

  return (
    <>
      <Header opacity={'hidden'}></Header>
      <Search onChange={e => setSearchMovies(e.target.value)}></Search>
        <GlobalList>
          {movies
            .filter(movie =>
              movie.title.toLowerCase().includes(searchMovies.toLowerCase())
            )
            .map(movie => {
              id++
              return (
                <GlobalLi key={id}>
                  <Link to={`/details/${movie.id}`}>
                    <img
                      src={`${image_path}${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </Link>
                  <span>{movie.title}</span>
                </GlobalLi>
              )
            })}
        </GlobalList>
    </>
  )
}

export default Global
