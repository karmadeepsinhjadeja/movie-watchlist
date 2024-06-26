
import { useState, useEffect } from "react";
import { Container, Navbar, Row, Col, Button } from "react-bootstrap";
import AddMovie from "./components/AddMovies";
import MoviesList from "./components/MoviesList";
import "./App.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import SignIn from "./components/SignIn";
import { app } from "./firebase";
import {auth} from "./firebase";


function App() {
  const authi = getAuth(app);
  const [movieId, setMovieId] = useState("");
  const [user] = useAuthState(auth);

  const getMovieIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setMovieId(id);
  };

//   const logout = () => {
//     auth.signOut();
// }
//   useEffect(() => {
//     onAuthStateChanged(authi, (user) => {
//       if (user) {
//         // setUser(user); // You don't need this line if you're using useAuthState
//       } else {
//         console.log("User is logged Out");
//       }
//     });
//   }, []);

//   if (!user) {
//     return (
//       <>
//         <SignIn />
//       </>
//     );
//   } else {
    return (
      <>
        <Navbar bg="dark" variant="dark" className="header">
          <Container>
            <Navbar.Brand href="#home">Movies Watchlist</Navbar.Brand>
            {/* <Navbar.Brand href="#home" >Hello {user}</Navbar.Brand> */}
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              {/* <Button variant="primary">Logout</Button> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container style={{ width: "400px" }}>
          <Row>
            <Col>
              <AddMovie id={movieId} setMovieId={setMovieId} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <MoviesList getMovieId={getMovieIdHandler} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }


export default App;
