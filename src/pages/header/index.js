import { Link } from 'react-router-dom'
import { Head, Title } from './styles'

function Header(props) {
  return (
    <>
      <Head >
        <Title>
          data<span>Filmes</span>
        </Title>
        <Link to={`/search`} style={{visibility: props.opacity}}>
          <h1 >Procurando algo?</h1>
        </Link>
      </Head>
    </>
  )
}

export default Header
