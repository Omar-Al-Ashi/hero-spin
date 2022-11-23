import {get, post} from './service'
import endpoints from './endpoints';

export const getAllMovies = () => {
  return get({url: endpoints.omdb})
}