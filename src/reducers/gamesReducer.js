const initialState = {
  popular: [],
  newest: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newest: action.payload.newest,
      };
    case "FETCH_SEARCHED":
      return { ...state, searched: action.payload.searched };
    default:
      return { ...state };
  }
};

export default gamesReducer;
