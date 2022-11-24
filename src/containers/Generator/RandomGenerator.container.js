import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import './RandomGenerator.container.css'
import {searchForAMovie} from "../../services/API";
import Card from "../../components/Card";
import 'primeflex/primeflex.css';
import {debounce} from "../../Helpers/Helpers";

const Generator = () => {
  let navigate = useNavigate();

  const [moviesList, setMoviesList] = useState([])

  const generateRandomMovie = async () => {
    // TODO generate random RANDOM movie rather than only for iron man
    const randomMovieResponse = await searchForAMovie("SuperMan")
    const data = await randomMovieResponse.json();
    const moviesArray = await data?.Search;
    setMoviesList(() => moviesArray?.length > 0 ? moviesArray : [])
  }

  const cardClicked = (movie) => {
    navigate("/details", {state: movie});
  }

  const generateButtonClicked = debounce(() => generateRandomMovie(), 1000);

  return (
    <div>
      <button onClick={() => generateButtonClicked()}>Generate A Random Movie</button>

      <div className='main-container'>
        {moviesList?.length > 0 ? moviesList.map(movie => {
          return (
            <div onClick={() => cardClicked(movie)}>
              <Card
                headerText={movie.Title}
                subTitle={movie.Type}
                image={movie.Poster}
              />
            </div>) // TODO remove the initial rendering of this
        }) : <div> We couldn't recommend anything for you that matches your search </div>}
      </div>
    </div>)
}

export default Generator;