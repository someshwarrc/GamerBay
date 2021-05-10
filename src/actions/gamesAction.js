import axios from "axios";
import {
  newGames,
  popularGamesLastYearUrl,
  popularUpcomingGamesUrl,
  searchedGames,
} from "../services/api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesLastYearUrl);
  const upcomingData = await axios.get(popularUpcomingGamesUrl);
  const newData = await axios.get(newGames);

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newest: newData.data.results,
    },
  });
};

export const loadSearched = (search_term) => async (dispatch) => {
  const searchedData = await axios.get(searchedGames(search_term));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchedData.data.results,
    },
  });
};
