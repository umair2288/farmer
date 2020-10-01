import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import { Button , Col, DatePicker , Row } from 'antd'

function App() {
  return (
    <div className="App">
      <Row>
        <Col style={{backgroundColor:"red"}} span={12}>
          <Button style={{backgroundColor:"red"}} type="primary">Click Me</Button>
        </Col>
        <Col style={{backgroundColor:"blue"}} span={12}>

        </Col>
      </Row>
  
      <DatePicker></DatePicker>
    </div>
  );
}

export default App;
