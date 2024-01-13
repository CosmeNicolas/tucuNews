import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { useEffect, useState } from "react"
import { Container } from 'react-bootstrap'
import Footer from "./components/Footer"
import Titulos from "./components/Titulos"
import Formulario from "./components/Formulario"
import ImagenTucuNews from "./components/ImagenTucuNews"


function App() {
  const [noticias, setNoticias] = useState([])
  /* solicitud solo en montaje, no en actualizacion de estado , ni en actualizacion especifica */
  useEffect(() => {
    consultaApi()
  }, [])

  /* hago la peticion HTTP GET cons Async y Await */
  const consultaApi = async () => {

    /* usamosTry/Catch para el manejo de errores  */
    /* tambien se usa en el backend */
    try {
      const respuesAPI = await fetch('https://newsdata.io/api/1/news?apikey=pub_3632485f1de71f34f4409a4afc369bf6be35d&q=pizza');
      /* extraigo los datos del body de la peticion  */
      const datos = await respuesAPI.json()
      console.log(respuesAPI)
      console.log(datos)
      /* me dio de resultado el array q es lo q esos pasos saben devolver , son 10 como especifica en este caso esta API de noticias  */
      setNoticias(datos.results)
    } catch (error) {
      console.log(error);
      /*  {
         <Alert key={variant} variant={warnign}>
           Se rompeiron las maquinas impresoras y eso ya es noticia, volvé pronto
         </Alert>
       } */
    }

  }
  /*  */
  return (
    <>
      <Titulos />
      <Container fluid className="main">
        <ImagenTucuNews />
        <Formulario noticias={noticias} />
      </Container>
      <Footer />
    </>
  )
}

export default App
