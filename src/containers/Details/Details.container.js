import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Details.container.css';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    // if the user is coming from a generator page, present the details, else, navigate to homepage
    location.state ? setMovie(location.state) : navigate('/');
  });

  return (
    <>
      <img src={movie.Poster} />
      <h2>Title: {movie.Title}</h2>
      <p>Type: {movie.Type}</p>
      <p>Year: {movie.Year}</p>
    </>
  );
};

export default Details;
