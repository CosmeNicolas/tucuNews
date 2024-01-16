import TucuNews from "../assets/TucuNews-sf-hd.png"
import { Image } from 'react-bootstrap'

const ImagenTucuNews = () => {
  return (
    <div className="mt-5 pt-5 text-center" >
      <Image src={TucuNews} fluid  className="img-principal"/>
    </div>
  );
};

export default ImagenTucuNews;