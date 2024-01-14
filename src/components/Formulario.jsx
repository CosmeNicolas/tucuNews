import { Form } from 'react-bootstrap'
import News from "./News";

const Formulario = ({ noticias, consultaApi, setElegirCategoria, elegirCategoria }) => {

  /* quiero manejar el estado del formulario se usa el handle'y lo q quiero manejar' */
  const handleCategoria = (e) => {
    setElegirCategoria(e.target.value)
    consultaApi(e.target.value)
  }


  return (
    <>
      <hr />
      <h1 className='text-center' >It's Happening  📰</h1>
      <Form.Select
        onChange={handleCategoria}
        value={elegirCategoria}
        className='p-3'
        aria-label="Default select example">
        <option>Category</option>
        <option value="business">Business</option>
        <option value="crime">Crime</option>
      </Form.Select>
      <News noticias={noticias} />
    </>
  );
};

export default Formulario;