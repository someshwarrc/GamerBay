import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loadSearched } from "../actions/gamesAction";
import logoImg from "../images/logo.svg";
import { FadeIn } from "../services/animations";

const StyledNav = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
`;

const Logo = styled(motion.div)`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  font-family: "Press Start 2P", cursive;
  img {
    width: 4rem;
    padding: 0 0.1rem;
    filter: drop-shadow(0 0 0.5rem rgba(255, 165, 0, 0.5));
  }
  span {
    display: inline;
    font-size: 3em;
    text-shadow: 0.1rem 0.1rem 0.1rem rgba(255, 165, 0, 0.5);
  }
  @media (max-width: 670px) {
    flex-direction: column;
  }
`;

const Search = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  input {
    width: 80%;
    font-size: 1.5em;
    padding: 0.5rem 0.5rem;
    font-family: "Montserrat", sans-serif;
    border-radius: 0.1rem;
    box-shadow: 0 0 1rem rgba(255, 165, 0, 0.5);
    border: none;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Button = styled(motion.button)`
  width: 10rem;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  padding: 0.5rem 0.7rem;
  border: none;
  font-family: "Montserrat", sans-serif;
  box-shadow: 0 0 1rem rgba(255, 165, 0, 0.5);
  &:hover {
    filter: none;
    color: white;
    background: rgba(255, 165, 0, 0.5);
  }
`;

function Nav() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const inputHandler = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loadSearched(search));
    setSearch("");
  };

  return (
    <StyledNav variants={FadeIn} initial="hidden" animate="show">
      <Logo>
        <span>GamerB</span>
        <img src={logoImg} alt="Logo" />
        <span>y</span>
      </Logo>
      <Search>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={inputHandler}
          placeholder="Enter a name to search"
        />
        <Button onClick={handleSubmit}>Search</Button>
      </Search>
    </StyledNav>
  );
}

export default Nav;
