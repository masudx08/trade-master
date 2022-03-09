import logo from './logo.svg';
import React, {useState} from 'react'

import './App.css';
import { Col, Container, FormControl, InputGroup, ListGroup, Row } from 'react-bootstrap';

function App() {
  const [amount, setAmount] = useState(0)
  const one = ((0.583/100)*amount)
  const two = ((1.166/100)*amount)
  const three = ((2.58/100)*amount)
  const four = ((5.58/100)*amount)
  const five = ((11.99/100)*amount)
  const six = ((24.99/100)*amount)
  const seven = ((53/100)*amount)
  return (
    <div className="App">
      <div className='container'>
        <div>
          <h3 className='mb-4'>Calculate Your Amount</h3>
          <p className='mb-4'><b className='text-danger'>Note:</b> There is not included any trading fees. So, Win and Profit Amount would be vary with platform</p>
        </div>
      <InputGroup className="mb-4">
        <FormControl
          placeholder="Enter your total amount"
          aria-label="Enter your total amount"
          aria-describedby="basic-addon1"
          onChange={e=>setAmount(e.target.value)}
        />
      <InputGroup.Text style={{background:'#cff4fc'}} id="basic-addon1">$</InputGroup.Text>
      </InputGroup>
      <Row>
        <Col xs={3}>
          <ListGroup>
          <ListGroup.Item variant="info">Issues</ListGroup.Item>
          <ListGroup.Item variant="danger">1</ListGroup.Item>
          <ListGroup.Item variant="warning">2</ListGroup.Item>
          <ListGroup.Item variant="info">3</ListGroup.Item>
          <ListGroup.Item variant="danger">4</ListGroup.Item>
          <ListGroup.Item variant="warning">5</ListGroup.Item>
          <ListGroup.Item variant="info">6</ListGroup.Item>
          <ListGroup.Item variant="danger">7</ListGroup.Item>
        </ListGroup>
        </Col>
        <Col xs={3}>
          <ListGroup>
          <ListGroup.Item variant="info">Bet</ListGroup.Item>
          <ListGroup.Item variant="danger">{one.toFixed(2)}</ListGroup.Item>
          <ListGroup.Item variant="warning">{two.toFixed(2)}</ListGroup.Item>
          <ListGroup.Item variant="info">{three.toFixed(2)}</ListGroup.Item>
          <ListGroup.Item variant="danger">{four.toFixed(2)}</ListGroup.Item>
          <ListGroup.Item variant="warning">{five.toFixed(2)}</ListGroup.Item>
          <ListGroup.Item variant="info">{six.toFixed(2)}</ListGroup.Item>
          <ListGroup.Item variant="danger">{seven.toFixed(2)}</ListGroup.Item>
        </ListGroup>
        </Col>
        <Col xs={3}>
          <ListGroup>
          <ListGroup.Item variant="info">Win</ListGroup.Item>
          <ListGroup.Item variant="danger">{(one*2).toFixed(2)}</ListGroup.Item>
          <ListGroup.Item variant="warning">{(two*2).toFixed(2)}</ListGroup.Item>
          <ListGroup.Item variant="info">{(three*2).toFixed(2)}</ListGroup.Item>
          <ListGroup.Item variant="danger">{(four*2).toFixed(2)}</ListGroup.Item>
          <ListGroup.Item variant="warning">{(five*2).toFixed(2)}</ListGroup.Item>
          <ListGroup.Item variant="info">{(six*2).toFixed(2)}</ListGroup.Item>
          <ListGroup.Item variant="danger">{(seven*2).toFixed(2)}</ListGroup.Item>
        </ListGroup>
        </Col>
        <Col xs={3}>
          <ListGroup>
          <ListGroup.Item variant="info">Profit</ListGroup.Item>
          <ListGroup.Item variant="danger">{one.toFixed(2)}</ListGroup.Item>
          <ListGroup.Item variant="warning">{(two - one).toFixed(2)}</ListGroup.Item>
          <ListGroup.Item variant="info">{(three - (one + two)).toFixed(2)}</ListGroup.Item>
          <ListGroup.Item variant="danger">{(four - (one + two + three)).toFixed(2)}</ListGroup.Item>
          <ListGroup.Item variant="warning">{(five - (one + two + three + four)).toFixed(2)}</ListGroup.Item>
          <ListGroup.Item variant="info">{(six -  (one + two + three + four + five)).toFixed(2)}</ListGroup.Item>
          <ListGroup.Item variant="danger">{(seven -  (one + two + three + four + five + six)).toFixed(2)}</ListGroup.Item>
        </ListGroup>
        </Col>
      </Row>
      </div>
    </div>
  );
}

export default App;
