import {Form} from  'react-bootstrap'
import News from "./News";

const Formulario = ({noticias}) => {
  return (
    <>
<Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
<News noticias={noticias}/>
    </>
  );
};

export default Formulario;