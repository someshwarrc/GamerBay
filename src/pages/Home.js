import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import styled from "styled-components";
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";
import { FadeIn } from "../services/animations";

const GameList = styled(motion.div)`
  padding: 0 5rem;

  h2 {
    padding: 2rem 0;
  }

  hr {
    margin: 0.5rem 0;
    background: #333;
    height: 0.2rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  margin-bottom: 5rem;
`;

function Home() {
  const location = useLocation();

  const gameIDonPath = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newest, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList variants={FadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {gameIDonPath && <GameDetails pathid={gameIDonPath} />}
        </AnimatePresence>
        {searched.length ? (
          <>
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  img={game.background_image}
                  rating={game.rating}
                  key={game.id}
                />
              ))}
            </Games>
          </>
        ) : (
          <>
            <h2>Upcoming Games</h2>
            <Games>
              {upcoming.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  img={game.background_image}
                  rating={game.rating}
                  key={game.id}
                />
              ))}
            </Games>
            <hr />
            <h2>Popular Games</h2>
            <Games>
              {popular.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  img={game.background_image}
                  rating={game.rating}
                  key={game.id}
                />
              ))}
            </Games>
            <hr />
            <h2>New Games</h2>
            <Games>
              {newest.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  img={game.background_image}
                  rating={game.rating}
                  key={game.id}
                />
              ))}
            </Games>
          </>
        )}
      </AnimateSharedLayout>
    </GameList>
  );
}

export default Home;
