import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom'

function TopOffCanvas() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                THE ROW
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="top">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <li>
                            <Link to={'/login'}>LOG IN</Link>

                        </li>

                        <li>
                            <Link to={'/signup'}>SIGN UP</Link>
                        </li>

                        <li>
                            <Link to={'/about'}>ABOUT</Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default TopOffCanvas;
