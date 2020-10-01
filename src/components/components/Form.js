import React, { Component } from 'react';
import {Row,DatePicker, Button , Col} from 'antd'




class Form  extends Component {
  
    render() { 
        return (<> 
            <Row>
            <Col style={{backgroundColor:"red"}} span={12}>
              <Button style={{backgroundColor:"red"}} type="primary">Click Me</Button>
            </Col>
           
          </Row>
      
          <DatePicker></DatePicker>
          </> 
          );
    }
}
 
export default Form;