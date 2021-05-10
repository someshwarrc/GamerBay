import axios from "axios";
import { gameDetails, gameScreens } from "../services/api";

const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const details = await axios.get(gameDetails(id));
  const screenshots = await axios.get(gameScreens(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: details.data,
      screenshots: screenshots.data,
    },
  });
};

export default loadDetail;
