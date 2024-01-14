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

  /* cuando realice cambios en algo del proyecto es un state? */
  const [elegirCategoria, setElegirCategoria] = useState('')


  /* solicitud solo en montaje, no en actualizacion de estado , ni en actualizacion especifica */
  useEffect(() => {
    consultaApi(elegirCategoria)
  }, [elegirCategoria])

  /* hago la peticion HTTP GET cons Async y Await */
  const consultaApi = async (categoria) => {

    /* usamosTry/Catch para el manejo de errores  */
    /* tambien se usa en el backend */
    try {
      const respuesAPI = await fetch(`https://newsdata.io/api/1/news?apikey=pub_363241281d1aac4e63ea34d1f2c239bbb99df&category=${categoria}`);
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
        <Formulario noticias={noticias} consultaApi={consultaApi} setElegirCategoria={setElegirCategoria} elegirCategoria={elegirCategoria} />
      </Container>
      <Footer />
    </>
  )
}

export default App
