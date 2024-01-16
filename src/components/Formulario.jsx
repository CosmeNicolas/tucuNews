import { useEffect } from 'react';
import { Form } from 'react-bootstrap'
import News from "./News";

const Formulario = ({ noticias, consultaApi, setElegirCategoria, elegirCategoria, setElegirPais, elegirPais }) => {


  useEffect(() => {
    consultaApi(elegirCategoria, elegirPais);
  }, [elegirCategoria, elegirPais]);


  useEffect(() => {
    setElegirCategoria('top');
    setElegirPais('us');
    consultaApi('top', 'us');
  }, []);
  
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
        <option value="top">Category</option>
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
        <option value="af">Afganistan</option>
        <option value="ar">Argentina</option>
        <option value="au">Australia</option>
        <option value="be">Belgium</option>
        <option value="br">Brazil</option>
        <option value="cm">Cameroon</option>
        <option value="ca">Canada</option>
        <option value="cl">Chile</option>
        <option value="cn">China</option>
        <option value="co">Colombia</option>
        <option value="hr">Croatia</option>
        <option value="dk">Denmark</option>
        <option value="eg">Egypt</option>
        <option value="fr">France</option>
        <option value="de">Germany</option>
        <option value="gh">Ghana</option>
        <option value="gr">Greece</option>
        <option value="hk">Hong Kong</option>
        <option value="id">Indonesia</option>
        <option value="it">Italy</option>
        <option value="ireland">ireland</option>
        <option value="gp">Japan</option>
        <option value="kw">Kuwait</option>
        <option value="mx">Mexico</option>
        <option value="ma">Morocco</option>
        <option value="nl">Netherland</option>
        <option value="nz">New Zeland</option>
        <option value="kp">North Korea</option>
        <option value="py">Paraguay</option>
        <option value="pe">Peru</option>
        <option value="pl">Poland</option>
        <option value="pt">Portugal</option>
        <option value="ru">Rusia</option>
        <option value="rs">Serbia</option>
        <option value="sg">Singapur</option>
        <option value="za">South Africa</option>
        <option value="kr">South Korea</option>
        <option value="es">Spain</option>
        <option value="se">Sweden</option>
        <option value="ch">Switzerland</option>
        <option value="tw">Taiwan</option>
        <option value="th">Thailand</option>
        <option value="tr">Turkey</option>
        <option value="ae">United Arab Emirates</option>
        <option value="gb">United Kingdom</option>
        <option value="us">United States of America</option>
        <option value="uy">Uruguay</option>
        <option value="ve">Venezuela</option>
        <option value="vi">Vietnam</option>
        <option value="zw">Zimbawe</option>
        
      </Form.Select> 
      <News noticias={noticias} />
    </>
  );
};

export default Formulario;