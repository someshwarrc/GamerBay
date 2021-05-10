import { combineReducers } from "redux";
import detailsReducer from "./detailsReducer";
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  details: detailsReducer,
});

export default rootReducer;
