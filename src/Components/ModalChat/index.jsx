// import React from "react"
// import { Button, Modal, Row, Col } from "react-bootstrap";


// const ModalGestante = (props) => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);

//   return (
//     <>
//       <Row className="justify-content-md-center">
//         <Col md={8}>
//           <Row className="mx-1">
//             <h2 style={{ color: "#952790" }}> <strong>Chat on-line</strong></h2>
            
//             <button className="btn-purple mb-4" onClick={() => setShow(true)}>
//               Chat
//             </button>
//           </Row>
//         </Col>

//       </Row>
//       <Modal
//         size="lg"
//         show={show}
//         onHide={() => setShow(false)}
//         aria-labelledby="example-modal-sizes-title-lg"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title
//             style={{ color: "#9f3c9a" }}
//             id="example-modal-sizes-title-lg"
//           >
//             <strong>Saiba Mais</strong>
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {" "}
        
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Fechar
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };
// export default ModalGestante;