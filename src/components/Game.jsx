import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import loadDetail from "../actions/detailAction";
import { PopIn } from "../services/animations";

const GameCard = styled(motion.div)`
  min-height: 50vh;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    display: block;
  }
  h3 {
    font-weight: bold;
  }
  h4 {
    font-size: 0.8em;
  }
`;

const Details = styled(motion.div)`
  height: auto;
  text-align: center;
  padding: 2rem 1rem;
`;

function Game({ name, released, img, id }) {
  const strId = id.toString();
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <GameCard layoutId={strId} onClick={loadDetailHandler} variants={PopIn}>
      <Link to={`/game/${id}`}>
        <Details>
          <h3>{name}</h3>
          <h4>{released}</h4>
        </Details>
        <img src={img} alt={name} />
      </Link>
    </GameCard>
  );
}

export default Game;
