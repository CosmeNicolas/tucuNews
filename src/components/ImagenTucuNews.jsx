import TucuNews from "../assets/TheTucu-News-sf.png"
import { Image } from 'react-bootstrap'
const ImagenTucuNews = () => {
  return (
    <div className="mt-5 pt-5 text-center" >
      <Image src={TucuNews} fluid />
    </div>
  );
};

export default ImagenTucuNews;