import endpoints from "./endpoints";
import constants from '../constants/constants'

export const omdbKeyConstructor = () => {
  return `${endpoints.omdb}/?apikey=${constants.apiKey}`
}