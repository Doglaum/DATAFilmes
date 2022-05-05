import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Back, Container, Text } from './styles'
import axios from 'axios'
import Header from '../header'

function Details() {
  const { id } = useParams()
  const [movie, setMovie] = useState([])
  const image_path = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_PV_KEY}&language=pt-BR&page=1`
      )
      .then(response => {
        const { id, title, poster_path, overview, release_date } = response.data
        const movie = {
          id: id,
          title: title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date
        }
        setMovie(movie)
      })
      .catch(error => console.error(error))
  }, [id])

  return (
    <Container>
      <Header></Header>
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse} />
        <div className="details">
          <h1>{movie.title}</h1>
          <Text>Sinopse: {movie.sinopse}</Text>
          <Text className="release-date">
            Data de lançamento: {movie.releaseDate}
          </Text>
          <div onClick={() => {window.history.back()}}>
            <Back>Voltar</Back>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Details
