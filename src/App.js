import logo from './logo.svg';
import './scss/index.scss';
import { Button, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, } from 'react';

function App() {
  const [clickerCounter, setclickerCounter] = useState(0)

  function decrease() {
    setclickerCounter(clickerCounter - 1)

    if (setclickerCounter) {
      console.log('decrease is working!')
    }
    else console.log('decrease is not working :(')
  }

  function increase() {
    setclickerCounter(clickerCounter + 1)

    if (setclickerCounter) {
      console.log('increase is working!')
    }
    else console.log('increase is not working :(')
  }

  return (
    <>
      <Container className='d-flex flex-column h-100'>
        <section className='test-content'>
          <div className='pt-5 text-center'>
            <img src={logo} className='logo img-fluid' alt='logo' />
            <h1 className='mt-5'>Welcome to <span>UltraWolf Design</span> website!</h1>
          </div>

          <h2 className='text-center mt-5'>Test #1. Press any button to check efficiency of the Clicker Counter</h2>

          <Row className='clicker justify-content-center text-center mt-3'>
            <Col xs="5" md="2"><Button onClick={decrease}>Decrease</Button></Col>

            <Col xs="auto" className='align-self-center text-white'>
              <p id='Counter' className='counter m-0'>{clickerCounter}</p>
            </Col>

            <Col xs="5" md="2"><Button onClick={increase}>Increase</Button></Col>
          </Row>
        </section>

        <footer>
          <p className='text-center text-warning'>
            Приложение находится на стадии разработки.<br />
            <span className='text-light'>©️ 2023 UltraWolf Design</span>
          </p>
        </footer>
      </Container>
    </>
  );
}

export default App;
