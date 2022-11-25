import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import './RandomGenerator.container.css'
import {searchForAMovie} from "../../services/API";
import Card from "../../components/Card";
import 'primeflex/primeflex.css';
import {debounce, getARandomNumber} from "../../Helpers/Helpers";

const Generator = () => {
  let navigate = useNavigate();

  const [moviesList, setMoviesList] = useState()

  const generateRandomMovie = async () => {
    // TODO generate random RANDOM movie rather than only for iron man
    const randomMovieResponse = await searchForAMovie("SuperMan")
    const data = await randomMovieResponse.json();
    const moviesArray = await data?.Search;
    const randomMovieIndex = getARandomNumber(moviesArray?.length)
    setMoviesList(() => moviesArray?.length > 0 ? moviesArray[randomMovieIndex] : null)
  }

  const cardClicked = (movie) => {
    navigate("/details", {state: movie});
  }

  const generateButtonClicked = debounce(() => generateRandomMovie(), 1000);

  return (
    <>
      <button onClick={() => generateButtonClicked()}>{isLoading ? 'Loading ...' : 'Generate A Random Movie'}</button>
      <div className='main-container'>
        {movie ?
          <Card
            cardClicked={() => cardClicked(movie)}
            headerText={movie.Title}
            subTitle={movie.Type}
            image={movie.Poster}
          />
          : <div>Nothing to show</div>
        }
      </div>
    </>)
}

export default Generator;