import React from 'react'
import { Carousel, Row, Col, Button } from 'react-bootstrap'

import './styles.css'

const CarouselComCards = () => {
  return (
   
      
      <Carousel className="carousel">

        <Carousel.Item className="carousel-item">
          <Carousel.Caption>
            <Row> 
              <Col className="my-auto ml-5 text-left">
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  <Button>Saber Mais</Button>
              </Col>
              <Col className="my-auto mr-5">
                <img 
                  className="mr-5 px-0"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzhyVsE1TQAw0CE4S1ay32XzBxSwuz3Sy6Bw&usqp=CAU"
                />
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <Carousel.Caption>
            <Row>
              <Col className="my-auto ml-5 p-0">
                <h3>Second slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <Button>Saber Mais</Button>
              </Col>
              <Col className="p-0">
                <img 
                  className="mr-5 px-0"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzhyVsE1TQAw0CE4S1ay32XzBxSwuz3Sy6Bw&usqp=CAU"
                />
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <Carousel.Caption>
            <Row>
              <Col className="my-auto ml-5 p-0">
                <h3>Second slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <Button>Saber Mais</Button>
              </Col>
              <Col className="p-0">
                <img 
                  className="mr-5 px-0"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzhyVsE1TQAw0CE4S1ay32XzBxSwuz3Sy6Bw&usqp=CAU"
                />
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item className="carousel-item">
          <Carousel.Caption>
            <Row>
              <Col className="my-auto ml-5 p-0">
                <h3>Second slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <Button>Saber Mais</Button>
              </Col>
              <Col className="p-0">
                <img 
                  className="mr-5 px-0"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzhyVsE1TQAw0CE4S1ay32XzBxSwuz3Sy6Bw&usqp=CAU"
                />
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item className="carousel-item">
          <Carousel.Caption>
            <h3>Slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
   
  )
}

export default CarouselComCards
