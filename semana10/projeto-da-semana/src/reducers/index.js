import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import trips from './trips';
import planets from './planets'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    // Outros reducers aqui
    trips,
    planets,
  });
