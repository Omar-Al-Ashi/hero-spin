import React, {useState} from "react";
import './SelectGenerator.container.css'
import Search from "../../components/Search";
import {debounce, getARandomNumber} from "../../Helpers/Helpers";
import {searchForAMovie} from "../../services/API";
import Card from "../../components/Card";
import {useNavigate} from "react-router-dom";

const Generator = () => {
  let navigate = useNavigate();

  const [moviesList, setMoviesList] = useState()

  const getMovie = async (event) => {
    let inputValue = event.target.value;
    const randomMovieResponse = inputValue != '' && await searchForAMovie(inputValue)
    const data = await randomMovieResponse.json();
    const moviesArray = await data?.Search;
    const randomMovieIndex = getARandomNumber(moviesArray?.length)
    setMoviesList(() => moviesArray?.length > 0 ? moviesArray[randomMovieIndex] : null)
  }

  const onInputChange = debounce((event) => getMovie(event), 1000);

  const cardClicked = (movie) => {
    navigate("/details", {state: movie});
  }

  return (
    <div>
      <Search onInputChange={onInputChange}/>
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
    </div>
  )
}

export default Generator;