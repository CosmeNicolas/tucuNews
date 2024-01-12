import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { Container, Image } from 'react-bootstrap'
import Footer from "./components/Footer"
import News from "./components/News"
import TucuNews from "./assets/TheTucu-News-sf.png"
import { useEffect, useState } from "react"


function App() {

  const [noticias, setNoticias] = useState([])


  /* solicitud solo en montaje, no en actualizacion de estado , ni en actualizacion especifica */
  useEffect(() => {
   consultaApi()
  }, [])
  
  /* hago la peticion HTTP GET cons Async y Await */
  const consultaApi = async ()=>{
    const respuesAPI = await fetch('https://newsdata.io/api/1/news?apikey=pub_3632485f1de71f34f4409a4afc369bf6be35d&q=pizza');
    /* extraigo los datos del body de la peticion  */
    const datos = await respuesAPI.json()
    console.log(respuesAPI)
    console.log(datos)
    /* me dio de resultado el array q es lo q esos pasos saben devolver , son 10 como especifica en este caso esta API de noticias  */
    setNoticias(datos.results)
  }
/*  */
  return (
    <>
     <Container  className="main">
      
      <div className="mt-5 text-center" >
        <Image src={TucuNews} fluid />
      </div>
      <News noticias={noticias} />
     </Container>
     <Footer/>
    </>
  )
}

export default App
