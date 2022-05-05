import Header from '../header'
import Popular from '../home/popular'
import TopRated from '../home/top_rated'
import Upcoming from '../home/upcoming'

function Index() {
  return (
    <>
      <Header/>
      <Popular></Popular>
      <TopRated></TopRated>
      <Upcoming></Upcoming>
    </>
  )
}

export default Index
