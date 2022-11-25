import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RandomGenerator.container.css';
import { searchForAMovie } from '../../services/API';
import Card from '../../components/Card';
import 'primeflex/primeflex.css';
import { debounce, getARandomNumber } from '../../Helpers/Helpers';
import constants from '../../constants/constants';

const Generator = () => {
  let navigate = useNavigate();

  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const generateRandomMovie = async () => {
    setIsLoading(() => true);
    const randomSuperHeroMovie =
      constants.superheros[getARandomNumber(constants.superheros.length)].superhero;
    const randomMovieResponse = await searchForAMovie(randomSuperHeroMovie);
    const moviesArray = await randomMovieResponse?.Search;
    const randomMovieIndex = getARandomNumber(moviesArray?.length);
    setIsLoading(false);
    setMovie(() => (moviesArray?.length > 0 ? moviesArray[randomMovieIndex] : null));
  };

  const cardClicked = (movie) => {
    navigate('/details', { state: movie });
  };

  const generateButtonClicked = debounce(() => generateRandomMovie(), 1000);

  return (
    <>
      <button className='button__generate' onClick={() => generateButtonClicked()}>
        {isLoading ? 'Loading ...' : 'Generate A Random Movie'}
      </button>
      <div className='main-container'>
        {movie ? (
          <Card
            cardClicked={() => cardClicked(movie)}
            headerText={movie.Title}
            subTitle={movie.Type}
            image={movie.Poster}
          />
        ) : (
          <div>Nothing to show</div>
        )}
      </div>
    </>
  );
};

export default Generator;
