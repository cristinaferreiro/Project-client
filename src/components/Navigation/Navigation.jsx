// import React, { useContext } from 'react';
// import './Navigation.css';
// import { Link } from "react-router-dom";
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Sidebar from '../SideBar/SideBar';
// import { AuthContext } from '../../context/auth.context'

// function Navigation() {

//     const { user, logout } = useContext(AuthContext);

//     return (
//         <Navbar className="bg-body-tertiary rounded-navbar">
//             <Container fluid>
//                 {user && <Sidebar />}
//                 <Navbar.Brand href="/">
//                     <Link to="/" className="navbar-logo">ROW</Link>
//                 </Navbar.Brand>
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <ul className="navbar-nav">
//                         <li className="nav-item">

//                             <Link className="nav-link" to="/artists">Artists</Link>
//                         </li>
//                         {
//                             user ?
//                                 <>
//                                     <Link to={'/profile'} className='nav-link'>Profile</Link>
//                                     <span onClick={logout} className='nav-link'>Log Out</span>
//                                 </>
//                                 :
//                                 <>
//                                     <Link to={'/signup'} className='nav-link'>Sign Up</Link>
//                                     <Link to={'/login'} className='nav-link'>Log In</Link>
//                                 </>
//                         }
//                     </ul>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default Navigation;


import React, { useContext } from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Sidebar from '../SideBar/SideBar';
import { AuthContext } from '../../context/auth.context'

function Navigation() {

    const { user, logout } = useContext(AuthContext);

    return (
        <Navbar className="bg-body-tertiary rounded-navbar" fixed="top">
            <Container fluid>
                {user && <Sidebar />}
                <Navbar.Brand>
                    <Link to="/" className="navbar-logo">ROW</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/artists" className="nav-link">Artists</Link>
                        </li>
                        {
                            user ?
                                <>
                                    <Link to={'/profile'} className='nav-link'>Profile</Link>
                                    <span onClick={logout} className='nav-link'>Log Out</span>
                                </>
                                :
                                <>
                                    <Link to={'/signup'} className='nav-link'>Sign Up</Link>
                                    <Link to={'/login'} className='nav-link'>Log In</Link>
                                </>
                        }
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;

