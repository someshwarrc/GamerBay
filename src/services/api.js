const baseUrl = "https://api.rawg.io/api";
const key = process.env.REACT_APP_KEY;

const padZero = (n) => {
  if (n < 10) {
    return `0${n}`;
  }
  return n;
};

const getFullDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const fullDateToday = `${year}-${padZero(month)}-${padZero(day)}`;
  const fullDateYearAgo = `${year - 1}-${padZero(month)}-${padZero(day)}`;
  const fullDateYearLater = `${year + 1}-${padZero(month)}-${padZero(day)}`;

  return { fullDateToday, fullDateYearAgo, fullDateYearLater };
};

const fullDate = getFullDate();

export const popularGamesLastYearUrl = `${baseUrl}/games?dates=${fullDate.fullDateYearAgo},${fullDate.fullDateToday}&page_size=15&ordering=-rating&key=${key}`;
export const popularUpcomingGamesUrl = `${baseUrl}/games?dates=${fullDate.fullDateToday},${fullDate.fullDateYearLater}&page_size=15&ordering=-rating&key=${key}`;
export const newGames = `${baseUrl}/games?dates=${fullDate.fullDateYearAgo},${fullDate.fullDateToday}&page_size=15&ordering=-released&key=${key}`;
export const searchedGames = (search_term) => {
  return `${baseUrl}/games?search=${search_term}&ordering=-rating&key=${key}`;
};
export const gameDetails = (id) => {
  return `${baseUrl}/games/${id}?key=${key}`;
};

export const gameScreens = (id) => {
  return `${baseUrl}/games/${id}/screenshots?key=${key}`;
};
