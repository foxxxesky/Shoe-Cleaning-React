import '../css/Home.css';
import NavigationBar from '../components/Navbar';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import JumbotronChar from '../images/jumbotron-img.png';

function Home() {
  return (
    <div id='HomePage'>
      <NavigationBar />
      <div className='jumbotron'>
        <Container className='py-5'>
          <Row className='py-5'>
            <Col sm={7}>
              <h1 className='jb-text'>Shoe Cleaning Siap Membersihkan Sepatu Anda</h1>
              <p className='jb-desc'>Percayakan sepatu kesukaan anda kepada kami!</p>
              <Button className='jb-btn'>Bersihkan Sekarang</Button>
            </Col>
            <Col sm={5}>
              <Image src={JumbotronChar} fluid className='jumbotron-img' />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
