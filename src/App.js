import logo from './logo.svg';
import './scss/index.scss';
import { Button, Col, Container, Row, Form, Fade, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [clickerCounter, setclickerCounter] = useState(0);
  const [validated, setValidated] = useState(false);
  const [fade, setFade] = useState(false);
  const [collapse, setCollapse] = useState(false);
  this.updateInput = this.updateInput.bind(this);
  const handleChange = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

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
        <div className='test-content'>
          <div className='pt-5 text-center'>
            <img src={logo} className='logo img-fluid' alt='logo' />
            <h1 className='mt-5'>Welcome to <span>UltraWolf Design</span> website!</h1>
          </div>

          <section className='py-5'>
            <h2 className='text-center'>Test #1. Press any button to check efficiency of the Clicker Counter</h2>

            <Row className='clicker justify-content-center text-center mt-3'>
              <Col xs="5" md="2"><Button onClick={decrease}>Decrease</Button></Col>

              <Col xs="auto" className='align-self-center text-white'>
                <p id='Counter' className='counter m-0'>{clickerCounter}</p>
              </Col>

              <Col xs="5" md="2"><Button onClick={increase}>Increase</Button></Col>
            </Row>
          </section>

          <section className='py-5'>
            <h2 className='text-center mb-4'>Test #2. My bizzare functions</h2>

            <Form noValidate validated={validated} onChange={handleChange} className='text-center'>
              <div>
                <h3 className='text-center'>Enter your name</h3>

                <Row className='justify-content-center text-center'>
                  <Col xs="3">
                    <Form.Group>
                      <Form.Control required type="name" placeholder="Enter your name" id="inputName" className='text-center' />
                      <Form.Control.Feedback>Greetings!</Form.Control.Feedback>
                      <Form.Control.Feedback type='invalid'>Empty input!</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

              </div>

              <div className='mt-4'>
                <h3 className='text-center'>Enter First and Second summand</h3>

                <Row className='justify-content-center'>
                  <Col xs="2">
                    <Form.Group>
                      <Form.Control required type="number" placeholder="First summand" className='text-center' onChange={handleChange} />
                    </Form.Group>
                  </Col>
                  <Col xs="2">
                    <Form.Group>
                      <Form.Control required type="number" placeholder="Second summand" className='text-center' onChange={handleChange} />
                    </Form.Group>
                  </Col>
                </Row>
              </div>

              <div className='mt-4'>
                <h3 className='text-center'>Date</h3>

                <div className='d-flex justify-content-center align-items-center gap-2'>
                  <Button onClick={() => setFade(!fade)} aria-controls="fade-text" aria-expanded={fade}>Show today's date</Button>
                  <Fade in={fade}><p id="fade-text" className='m-0'>{new Date().toLocaleString()}</p></Fade>
                </div>
              </div>

              <div className='my-4'>
                <h3 className='text-center'>Calculator</h3>

                <div className='d-flex justify-content-center align-items-center gap-4'>
                  <Button onClick={() => { setCollapse(!collapse); }} aria-controls="collapse-text" aria-expanded={collapse} id="readId">Read</Button>
                  <Button onClick={() => setCollapse(!collapse)} aria-controls="collapse-text" aria-expanded={collapse} id="sumId">Sum</Button>
                  <Button onClick={() => setCollapse(!collapse)} aria-controls="collapse-text" aria-expanded={collapse} id="mulId">Mul</Button>
                </div>

                <Collapse in={collapse}><p id="collapse-text">{ }</p></Collapse>
              </div>

              <Button>Check form</Button>
            </Form>
          </section>
        </div>



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
