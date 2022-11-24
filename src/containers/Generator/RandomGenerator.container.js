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
    <div>
      <button onClick={() => generateButtonClicked()}>Generate A Random Movie</button>

      <div className='main-container'>
        {moviesList ?
          <div onClick={() => cardClicked(moviesList)}>
            <Card
              headerText={moviesList.Title}
              subTitle={moviesList.Type}
              image={moviesList.Poster}
            />
          </div> : <div>Nothing to show</div>
        }
      </div>
    </div>)
}

export default Generator;