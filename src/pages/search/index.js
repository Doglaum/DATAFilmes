import { SearchField } from './styles'

function Search(props) {
  return (
    <SearchField>
      <input placeholder="Buscar filmes" {...props}></input>
    </SearchField>
  )
}

export default Search