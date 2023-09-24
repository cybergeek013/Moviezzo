import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import MovieCards from "../components/MovieCards";
import logo from "../Images/Logo.png";
import "../HomePage.css";

function HomePage() {
  // Hooks
  const [SearchParams, setSearchParams] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterYear, setFilterYear] = useState("");
  const [filterType, setFilterType] = useState("movie");

  // API key for OMDB API
  const API_KEY = "8bfca2da";

  // To Handle the Search Event on click
  const handleSearchClick = () => {
    setLoading(true);

    // If the year and Type filter is added then add that to the Api Url else just fetch the data.
    let apiUrl = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${SearchParams}`;

    if (filterYear) {
      apiUrl += `&y=${filterYear}`;
    }
    if (filterType) {
      apiUrl += `&type=${filterType}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
        setLoading(false);
        if (!data.Search) {
          setLoading(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  return (
    <div className="homepage-container">
      <h5>Search for any Movie or Series</h5>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Movie Title"
          value={SearchParams}
          onChange={(e) => setSearchParams(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>
        <Button variant="dark" onClick={handleSearchClick}>
          Search
        </Button>
      </div>

      {loading ? (
        <img src={logo} alt="Loading" />
      ) : (
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCards key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
