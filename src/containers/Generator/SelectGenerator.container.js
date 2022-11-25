import React, { useState } from 'react';
import './SelectGenerator.container.css';
import Search from '../../components/Search';
import { debounce, getARandomNumber } from '../../Helpers/Helpers';
import { searchForAMovie } from '../../services/API';
import Card from '../../components/Card';
import { useNavigate } from 'react-router-dom';
import { ProgressSpinner } from 'primereact/progressspinner';

const Generator = () => {
  let navigate = useNavigate();

  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const onInputChange = debounce((event) => getMovie(event), 1000);

  const getMovie = async (event) => {
    setIsLoading(() => true);
    let inputValue = event.target.value;
    const randomMovieResponse = inputValue != '' && (await searchForAMovie(inputValue));
    const moviesArray = await randomMovieResponse?.Search;
    const randomMovieIndex = getARandomNumber(moviesArray?.length);
    setIsLoading(false);
    setMovie(() => (moviesArray?.length > 0 ? moviesArray[randomMovieIndex] : null));
  };

  const cardClicked = (movie) => {
    navigate('/details', { state: movie });
  };

  const renderIsLoading = () => {
    return isLoading && <ProgressSpinner />;
  };

  return (
    <>
      <Search onInputChange={onInputChange} />
      {renderIsLoading()}
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
