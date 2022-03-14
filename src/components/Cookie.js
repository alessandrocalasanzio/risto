import React from "react";
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';

function Privacy() {
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);


    return ( 
        <>
        <a className="coloreCookie"  type="button" variant="primary" onClick={() => setShow(true)}>
          Cookie Policy
        </a>
  
   

        <Modal
          
          show={show}
          fullscreen={fullscreen}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w fade-left"
          aria-labelledby="example-custom-modal-styling-title"
          animation={true}
        >
        
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Cookie Policy
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Modal.Body>
        </Modal>
  
      </>
    );
  }
  


  export default Privacy;