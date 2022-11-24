import React, {useState} from "react";
import './SelectGenerator.container.css'
import Search from "../../components/Search";
import {debounce} from "../../Helpers/Helpers";
import {searchForAMovie} from "../../services/API";
import Card from "../../components/Card";
import {useNavigate} from "react-router-dom";

const Generator = () => {
  let navigate = useNavigate();

  const [moviesList, setMoviesList] = useState([])

  const getMovie = async (event) => {
    let inputValue = event.target.value;
    const randomMovieResponse = inputValue != '' && await searchForAMovie(inputValue)
    const data = await randomMovieResponse.json();
    const moviesArray = await data?.Search;
    setMoviesList(() => moviesArray?.length > 0 ? moviesArray : [])
  }

  const onInputChange = debounce((event) => getMovie(event), 1000);

  const cardClicked = (movie) => {
    navigate("/details", {state: movie});
  }

  return (
    <div>
      <Search onInputChange={onInputChange}/>
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
    </div>
  )
}

export default Generator;