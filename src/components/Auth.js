import React from "react";
// import { Card, CardContent, Button, Typography } from "@mui/material";
// import { Google } from "@mui/icons-material";
// import "../css/auth.css";
import { Container, Navbar, Row, Col, Button } from "react-bootstrap";

import"../App.css";
import {auth,provider} from "../firebase"

export default function Auth() {
  // Define a style object for the card
  const cardStyle = {
    backgroundColor: "lightseagreen", // Set the background color to light teal
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Make the card cover the entire viewport height
  };

  // Define a style object for the "LJ Insider's" text
  const titleStyle = {
    fontSize: "36px", // Set the font size to make it larger
    fontFamily: "Arial, sans-serif", // Specify the font family
    marginBottom: "20px", // Add some spacing below the title
  };

  // Define a style object for the Google button
  const buttonStyle = {
    backgroundColor: "teal", // Set the button background color to teal
    color: "white", // Set the text color to white
    padding: "10px 20px", // Add padding for a nice button size
    borderRadius: "5px", // Add rounded corners
    border: "none", // Remove border
    cursor: "pointer", // Change cursor on hover
    fontSize: "16px", // Set the font size
    fontFamily: "Arial, sans-serif", // Specify the font family
  };


  const signin = () => {
    auth.signInWithPopup(provider).catch(alert);
    }
    
  return (
    <div>
        <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home" >Movies Watchlist</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <>
      <Button variant="primary" onClick={signin()}>Logout</Button>
      </>
    </div>
  );
}
