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
        <option value="domestic">Domestic</option>
        <option value="education">Education</option>
        <option value="entertainment">Entertainment</option>
        <option value="environment">Environment</option>
        <option value="food">Food</option>
        <option value="health">Health</option>
        <option value="other">Other</option>
        <option value="politics">Politics</option>
        <option value="science">Science</option>
        <option value="sport">Sport</option>
        <option value="technology">Tecnology</option>
        <option value="top">Top</option>
        <option value="tourism">Tourism</option>
        <option value="world">World</option>
      </Form.Select>
      <News noticias={noticias} />
    </>
  );
};

export default Formulario;