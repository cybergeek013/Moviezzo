import React from "react";
import Card from "react-bootstrap/Card";

function MovieCards({ movie }) {
  return (
    <div>
      <Card
        style={{
          width: "16rem",
          boxShadow: "0 3px 10px 0 #aaa",
          margin: "20px", 
        }}
      >
        <Card.Img
          variant="top"
          src={movie.Poster}
          alt="Image"
          style={{ height: "260px" ,objectFit: "cover"}}
        />
        <Card.Body>
          <Card.Title>
            <b>{movie.Title}</b>
          </Card.Title>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "10px",
              paddingRight: "10px",
              paddingBottom: "10px",
            }}
          >
            <Card.Subtitle>Year: {movie.Year}</Card.Subtitle>
            <Card.Subtitle>Type: {movie.Type}</Card.Subtitle>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCards;
