import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import MovieDataService from "../services/movie.services";

const MoviesList = ({ getMovieId }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const data = await MovieDataService.getAllMovies();
    console.log(data.docs);
    setMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await MovieDataService.deleteMovie(id);
    getMovies();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getMovies}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(Movies, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Movie Title</th>
            <th>Director</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.title}</td>
                <td>{doc.director}</td>
                <td>{doc.status}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getMovieId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default MoviesList;