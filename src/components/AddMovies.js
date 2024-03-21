import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import MovieDataService from "../services/movie.services";
import Navbar1 from "./Navbar";
// import imgdb from "../firebase"

const AddMovie = ({ id, setMovieId }) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [status, setStatus] = useState("Watched");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [img,setImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || director === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newMovie = {
      title,
      director,
      status,
    };
    console.log(newMovie);

    try {
      if (id !== undefined && id !== "") {
        await MovieDataService.updateMovie(id, newMovie);
        setMovieId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await MovieDataService.addMovie(newMovie);
        // getAllMovies(newMovie);
        setMessage({ error: false, msg: "New Movie added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setDirector("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await MovieDataService.getMovie(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().title);
      setDirector(docSnap.data().director);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
    {/* <Navbar1/> */}
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formMovieTitle">
            <InputGroup>
              <InputGroup.Text id="formMovieTitle">M</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Movie Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMoviedirector">
            <InputGroup>
              <InputGroup.Text id="formMoviedirector">D</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Director"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Watched");
                setFlag(true);
              }}
            >
              Watched
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Watched");
                setFlag(false);
              }}
            >
              Not Watched
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddMovie;