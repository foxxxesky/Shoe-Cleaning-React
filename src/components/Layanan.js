import '../css/Home.css';
import { Image } from 'react-bootstrap';

function CardLayanan(props) {
  return (
    <div>
      <Image src={props.images} fluid />
      <h1 className='text-center mt-3 ly-card-title'>{props.namaLayanan}</h1>
    </div>
  );
}

export default CardLayanan;
