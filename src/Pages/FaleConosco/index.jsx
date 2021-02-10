import React from 'react';
import { Form, Button, Container, Row, Col} from 'react-bootstrap'
import TabBar from '../../Components/TabBar';
import BannerFaleConosco from '../../Components/Banner/BannerFaleConosco';
const FaleConosco = () => {
    
    return (
     
     <>
        <Row>
          <Col md={12}>
             <BannerFaleConosco /> 
          </Col>
        </Row>
      
        <TabBar />

    </>
    );
};

export default FaleConosco;