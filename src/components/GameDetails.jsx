import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import PC from "../images/PC.svg";
import mac from "../images/MacOS.svg";
import nintendo from "../images/Nintendo.svg";
import XOne from "../images/Xbox_one.svg";
import Xbox from "../images/Xbox.svg";
import ps4 from "../images/PS4.svg";
import ps5 from "../images/PS5.svg";
import ios from "../images/IOS.svg";
import android from "../images/Android.svg";
import psp from "../images/PSP.svg";
import psvita from "../images/PS_Vita.png";

const getPlatformImg = (platformName) => {
  switch (platformName) {
    case "Nintendo Switch":
      return nintendo;
    case "macOS":
      return mac;
    case "PC":
      return PC;
    case "Xbox One":
      return XOne;
    case "Xbox Series S/X":
      return Xbox;
    case "PlayStation 4":
      return ps4;
    case "PlayStation 5":
      return ps5;
    case "iOS":
      return ios;
    case "Android":
      return android;
    case "PSP":
      return psp;
    case "PS Vita":
      return psvita;
    default:
      return platformName;
  }
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.2rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Card = styled(motion.div)`
  width: 80%;
  min-height: 100vh;
  padding: 2% 10%;
  background: white;
  border-radius: 1rem;
  position: absolute;
  z-index: 999;
  left: 10%;
  top: 5%;
  img {
    width: 100%;
    padding: 1rem;
  }
`;

const Screenshots = styled(motion.div)`
  font-size: 1.5rem;
  span {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-row-gap: 0;
    grid-column-gap: 0;
    img {
      padding: 0;
    }
  }
`;

const Description = styled(motion.div)`
  padding: 3rem 0;
`;

const Stats = styled(motion.div)`
  .title {
    font-size: 3rem;
    font-family: "Abril Fatface", cursive;
  }
  .platform {
    text-align: right;
    img {
      width: auto;
      max-width: 5rem;
      display: inline;
      padding: 0 0.1rem;
      @media (max-width: 800px) {
        height: 2.5rem;
      }
    }
  }
  .rating {
    span {
      width: 1rem;
      font-size: 1rem;
    }
    .checked {
      color: orange;
    }
    .star {
      content: "\f005";
    }
  }
`;

const getRatingStars = (rating) => {
  let stars = [];
  let ratingInt = Math.floor(rating);
  let ratingFloat = rating - ratingInt;
  if (parseFloat(rating) === 0.0) {
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span>
          <i class="fa fa-star"></i>
        </span>
      );
    }
    return stars;
  }
  for (let i = 1; i <= 5; i++) {
    if (i <= ratingInt) {
      stars.push(
        <span>
          <i class="fa fa-star checked"></i>
        </span>
      );
    } else {
      if (ratingFloat > 0) {
        stars.push(
          <span>
            <i
              class="fa fa-star checked"
              style={{
                opacity: `${ratingFloat}`,
              }}
            ></i>
          </span>
        );
        ratingFloat = 0;
      }
      stars.push(
        <span>
          <i
            class="fa fa-star "
            style={{ transform: "translateX(-100%)", opacity: 0.5 }}
          ></i>
        </span>
      );
    }
  }
  return stars;
};

function GameDetails({ pathid }) {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  const { game, screenshots, isLoading } = useSelector(
    (state) => state.details
  );
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Card layoutId={pathid}>
            <Stats>
              <div className={"title"}>{game.name}</div>
              <div className={"platform"}>
                {game.platforms.map((platform) => (
                  <img src={getPlatformImg(platform.platform.name)} alt="" />
                ))}
              </div>
              <div className={"rating"}>
                {`${game.rating}`} {getRatingStars(game.rating)}
              </div>
            </Stats>
            <div className="background">
              <img src={game.background_image} alt="background"></img>
            </div>
            <Description>{game.description_raw}</Description>
            <Screenshots>
              Screenshots
              <span>
                {screenshots.results.map((image) => (
                  <img src={image.image} alt=""></img>
                ))}
              </span>
            </Screenshots>
          </Card>
        </CardShadow>
      )}
    </>
  );
}

export default GameDetails;
