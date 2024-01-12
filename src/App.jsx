import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { Container, Image } from 'react-bootstrap'
import Footer from "./components/Footer"
import News from "./components/News"
import TucuNews from "./assets/TheTucu-News-sf.png"


function App() {

  return (
    <>
     <Container  className="main">
      
      <div className="mt-5 text-center" >
        <Image src={TucuNews} fluid />
      </div>
      <News/>
     </Container>
     <Footer/>
    </>
  )
}

export default App
