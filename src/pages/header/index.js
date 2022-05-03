import { Head, Nav, Text, Title } from './styles'

function Header(props) {
  return (
    <Head>
      <Title>
        data<Text>Filmes</Text>
      </Title>
      <Nav>
        <ul>
          <li
            onClick={() => {
              props.setNavigate('popular')
              props.setTitle('Populares')
            }}
          >
            Popular
          </li>
          <li
            onClick={() => {
              props.setNavigate('top_rated')
              props.setTitle('Mais votados')
            }}
          >
            Mais votados
          </li>
          <li
            onClick={() => {
              props.setNavigate('upcoming')
              props.setTitle('Em breve')
            }}
          >
            Em breve
          </li>
        </ul>
      </Nav>
    </Head>
  )
}

export default Header