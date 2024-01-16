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
  const [elegirCategoria, setElegirCategoria] = useState('')
  const [elegirPais, setElegirPais] = useState('')


  useEffect(() => {
    consultaApi(elegirCategoria,elegirPais)
  }, [elegirCategoria,elegirPais])


  const consultaApi = async (categoria, pais) => {

    try {
      const respuesAPI = await fetch(`https://newsdata.io/api/1/news?apikey=pub_363241281d1aac4e63ea34d1f2c239bbb99df&category=${categoria}&country=${pais}`);
      /* extraigo los datos del body de la peticion  */
      const datos = await respuesAPI.json()
      console.log(respuesAPI)
      console.log(datos)
      setNoticias(datos.results)
    } catch (error) {
      console.log(error);
    }

  }
  /*  */
  return (
    <>
      <Titulos />
      <Container fluid className="main">
        <ImagenTucuNews />
        <Formulario noticias={noticias} consultaApi={consultaApi} setElegirCategoria={setElegirCategoria} elegirCategoria={elegirCategoria} elegirPais={elegirPais} setElegirPais={setElegirPais} />
      </Container>
      <Footer />
    </>
  )
}

export default App
