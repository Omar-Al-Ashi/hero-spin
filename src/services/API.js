import {get, post} from './service'
import {omdbKeyConstructor} from './urlConstructor'

export const searchForAMovie = (searchItem) => {
  let url = `${omdbKeyConstructor()}&s=${searchItem}`;
  return get({url})
}