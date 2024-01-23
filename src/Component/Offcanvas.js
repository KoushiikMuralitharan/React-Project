import React , {useState} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
const Offcanvaes = () => {
  const [show,setShow] = useState(false);
  const handleShow = () =>{setShow(true);}
  const handleClose = () =>{setShow(false);}
    return (
    <div>
        <h1>Canvas Example</h1>
        <Button variant='primary' onClick={handleShow}>LAUNCH</Button>
        <Offcanvas show={show} onHide={handleClose} placement='end' scroll={true}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    TOOLZY
                </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum 
                    Lorem ipsum Lorem ipsum Lorem ipsum 
                    Lorem ipsum Lorem ipsum Lorem ipsum 
                </Offcanvas.Body>
        </Offcanvas>
    </div>
  )
}

export default Offcanvaes