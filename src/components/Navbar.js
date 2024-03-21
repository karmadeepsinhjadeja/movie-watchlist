import React from "react";
import { Container, Navbar, Row, Col, Button } from "react-bootstrap";


function Navbar1() {
  return (
    // <Navbar bg="dark" variant="dark" className="header">
    //   <Container>
    //     <Navbar.Brand href="#home">Movies Watchlist</Navbar.Brand>
    //   </Container>
    // </Navbar>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        {/* <Navbar.Collapse className="justify-content-end"> */}
        
      </Container>
           <Button variant="primary" >Logout</Button>
    </Navbar>
  );
}

export default Navbar1;
