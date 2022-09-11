import '../css/Home.css';
import NavigationBar from '../components/Navbar';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import JumbotronChar from '../images/jumbotron-img.png';
import lyStandard from '../images/ly_standard.png';
import lyDeep from '../images/ly_deep.png';
import lyPremium from '../images/ly_premium.png';
import lyWeekend from '../images/ly_weekend.png';
import CardLayanan from '../components/Layanan';

function Home() {
  return (
    <div id='HomePage'>
      <NavigationBar />
      <div className='jumbotron'>
        <Container className='py-5'>
          <Row className='jb-row'>
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
      <div className='layanan py-5'>
        <Container>
          <h1 className='text-center ly-title'>Layanan Kami</h1>
          <p className='text-center ly-desc'>Kami telah mencuci lebih dari 391,812 pasang sepatu, dan akan terus bertambah... Berikut jasa yang kami tawarkan</p>
          <Row className='py-3'>
            <Col sm={3}>
              <CardLayanan images={lyStandard} namaLayanan='Standart Celan' />
            </Col>
            <Col sm={3}>
              <CardLayanan images={lyDeep} namaLayanan='Deep Celan' />
            </Col>
            <Col sm={3}>
              <CardLayanan images={lyPremium} namaLayanan='Premium Celan' />
            </Col>
            <Col sm={3}>
              <CardLayanan images={lyWeekend} namaLayanan='Weekend Celan' />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
