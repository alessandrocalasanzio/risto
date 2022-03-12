import React  from "react";
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';

function Privacy() {
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

  
    return (
      <>
        <a type="button" variant="primary" onClick={() => setShow(true)}>
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
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
              commodi aspernatur enim, consectetur. Cumque deleniti temporibus
              ipsam atque a dolores quisquam quisquam adipisci possimus
              laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
              accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
              reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
              deleniti rem!
            </p>
          </Modal.Body>
        </Modal>
  
      </>
    );
  }
  
 export default Privacy;