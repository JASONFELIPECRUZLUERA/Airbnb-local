import './App.css'
import { Footer } from './footer/footer'
import { Header } from './header/header'
import { HeaderResults } from './results/header_results'
import { Results } from './results/card'

function App() {

  return (
    <>
      <Header></Header>
      <br></br>
      <HeaderResults></HeaderResults>
      <br></br>
      <Results></Results>
      <br></br>
      <Footer></Footer>
    </>
  )
}

export default App
