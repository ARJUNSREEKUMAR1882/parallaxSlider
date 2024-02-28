import './App.css'
import Woman from "./images/mo1.jpg";
import City from "./images/mo2.webp";
import Fly from "./images/mo3.webp";
import Mo4 from "./images/mo4.jpg";
import { Parallax } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/Slider';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Footers from './components/Footers';

function App() {

  return (




    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ExploreWorld <i class="fa-solid fa-motorcycle fa-beat"></i></Navbar.Brand>
          <Nav className=" me-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      <h4 className='mt-2'>MOTOGP BIKES</h4>
      <Parallax strength={300} blur={{ min: -8, max: 10 }} bgImage={Woman}>
        <div className="content">
          <div className="text-content">KTM</div>
        </div>
      </Parallax>

      <Parallax strength={300} bgImage={City}>
        <div className="content">
          <div className="text-content">YAMAHA</div>
        </div>
      </Parallax>

      <Parallax strength={300} bgImage={Fly}>
        <div className="content">
          <div className="text-content"> APRILA</div>
        </div>
      </Parallax>

      <Parallax strength={-300} bgImage={Mo4}>
        <div className="content">
          <div className="text-content"> DUCATI</div>
        </div>
      </Parallax>
    
      <Slider />

      <Footers/>


    </div>

  )
}

export default App
