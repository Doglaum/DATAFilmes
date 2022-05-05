
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Atual, Container, Movie, MovieList } from './styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import api from '../../services/api'

function TopRated() {
  //Carrousel settings//
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    swipeToSlide: true,
    adaptiveHeight: true,
    variableWidth: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      )
    }
  }
  ////////////////////

  const image_path = 'https://image.tmdb.org/t/p/w500'
  const [movies, setMovies] = useState([])


  useEffect(() => {
    async function getApi() {
      const request = await api.get(
        `/top_rated?api_key=${process.env.REACT_APP_PV_KEY}&language=pt-BR&page=1`
      )
      setMovies(request.data.results)
      return request
    }
    getApi()
  }, [])

  return (
    <>
      <Container>
        <MovieList>
        <Atual>Melhor avaliados:</Atual>
          <Slider {...settings}>
            {movies.map(movie => {
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
          </Slider>
        </MovieList>
      </Container>
    </>
  )
}

export default TopRated
