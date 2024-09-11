import React from "react";
import styled from "styled-components";

const ContentBanner = styled.div`
  border: 3px solid red;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url("/beautiful-japanese-forest-scene.jpg");
    background-attachment: fixed;
    /* z-index: -1; */
    content: "";
    filter: brightness(0.8);
  }
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20vh;
  font-family: "Great Vibes", cursive;
`;
const ImgBanner = styled.img`
  background-size: cover;
  width: 200px;
  position: absolute;
  left: 60%;
  bottom: 0;
  transform: translate(-60%, 0);
  filter: brightness(0.6);
`;
const Degrader = styled.div`
  /* border: 1px solid yellow; */
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 30vh;
  background: linear-gradient(to bottom, transparent, black);
  /* transform: translate(0,-4%); */

  /* filter: brightness(0.1); */
`;

const Banner = () => {
  return (
    <ContentBanner>
      <Title>Proyecto Fa</Title>
      <ImgBanner src="/amarillo.png" />
      <Degrader />
    </ContentBanner>
  );
};

export default Banner;
