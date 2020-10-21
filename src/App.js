import React from 'react';
import {Container, Table, Row, Col, Card, ListGroup} from 'react-bootstrap'
import StockRow from './Components/StockRow'



function App() {
  return (
    <Container className="App">
      <Container>
        <Row>
          <Col className='col-md-4 mt-5'f>
            <Card>
                <ListGroup variant="flush">
                  <StockRow ticker="aapl" />
                  <StockRow ticker="goog" />
                  <StockRow ticker="msft" />
                  <StockRow ticker="tsla" />
                </ListGroup>
            </Card>
          </Col>
        </Row>
        {/* <Table striped bordered hover variant='light'>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <StockRow ticker="aapl" />
            <StockRow ticker="goog" />
            <StockRow ticker="tsla" />
            <StockRow ticker="msft" />
          </tbody>
        </Table> */}
      </Container>
    </Container>
  );
}

export default App;
