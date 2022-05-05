import { Link } from 'react-router-dom'
import { SearchField, Back } from './styles'
//.filter(movie => movie.title.toLowerCase().includes(searchMovies.toLowerCase()))  passado por props para executar a busca
//const [searchMovies, setSearchMovies] = useState('')  usado no component
//onChange={e => setSearchMovies(e.target.value)} vai como props
function Search(props) {
  return (
    <>
      <SearchField>
        <input placeholder="Buscar filmes" {...props}></input>
        <Link to="/">
          <Back>Voltar</Back>
        </Link>
      </SearchField>
    </>
  )
}

export default Search
