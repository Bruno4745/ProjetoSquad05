import React from 'react';
import {Row, Col} from 'react-bootstrap'
import TabBar from '../../Components/TabBar';
import BannerFaleConosco from '../../Components/Banner/BannerFaleConosco';

import "./styles.css";

const FaleConosco = () => {
    
    return (
     
     <>
        <Row>
          <Col md={12}>
             <BannerFaleConosco />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={6}>
          <TabBar />
          </Col>
        </Row>
        

    </>
    );
};

export default FaleConosco;