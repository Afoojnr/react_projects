import { useState, useEffect } from "react";
import React from "react";
import MovieCard from "./MovieCard";
// 1bec8b2e

import "./App.css";
import SearchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com?apikey=1bec8b2e";

const movie1 = {
  Title: "The Flash",
  Year: "2014",
  imdbID: "tt3107288",
  Type: "series",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('flash')

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
    // console.log(data);
  };
  useEffect(() => {
    searchMovie("flash");
  }, []);
  return (
    <div className="app">
      <h1>MovieHub</h1>

      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon}
         alt="search" 
         onClick={() => searchMovie(searchTerm)} />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
              <MovieCard movie={movie}/>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
