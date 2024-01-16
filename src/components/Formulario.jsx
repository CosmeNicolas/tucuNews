import { useEffect } from 'react';
import { Form } from 'react-bootstrap'
import News from "./News";

const Formulario = ({ noticias, consultaApi, setElegirCategoria, elegirCategoria, setElegirPais, elegirPais }) => {


  useEffect(() => {
    consultaApi(elegirCategoria, elegirPais);
  }, [elegirCategoria, elegirPais]);
  
  const handleCategoria = (e) => {
    setElegirCategoria(e.target.value)
   
  }
  
  const handlePais = (e)=>{
    setElegirPais(e.target.value)
    
  }
  

  return (
    <>
      <hr className='hr' />
      <h1 className='text-center' >It's Happening  📰</h1>
      <Form.Select
        onChange={handleCategoria}
        value={elegirCategoria}
        className='p-3'
        aria-label="Default select example">
        <option value="">Category</option>
        <option value="business">Business</option>
        <option value="education">Education</option>
        <option value="entertainment">Entertainment</option>
        <option value="environment">Environment</option>
        <option value="food">Food</option>
        <option value="health">Health</option>
        <option value="politics">Politics</option>
        <option value="science">Science</option>
        <option value="sport">Sport</option>
        <option value="technology">Tecnology</option>
        <option value="tourism">Tourism</option>
        <option value="world">World</option>
      </Form.Select>
      <Form.Select
        onChange={handlePais}
        value={elegirPais}
        className='p-3'
        aria-label="Default select example">
        <option value="">Country</option>
        <option value="australia">australia</option>
        <option value="it">italy</option>
        <option value="ireland">ireland</option>
        <option value="ghana">ghana</option>
        <option value="canada">canada</option>
        <option value="united states of america">united states of america</option>
        
      </Form.Select> 
      <News noticias={noticias} />
    </>
  );
};

export default Formulario;