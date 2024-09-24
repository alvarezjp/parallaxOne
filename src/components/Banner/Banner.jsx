import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const Title = styled.h1`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20vh;
  font-family: "Great Vibes", cursive;
`;
const ContentBanner = styled.div`
  /* border: 3px solid red; */
  box-sizing: border-box;
  width: 100%;
  height: 110vh;
  overflow: hidden;
  position: relative;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: left top;
    background-image: url("/beautiful-japanese-forest-scene.jpg");
    background-attachment: fixed;
    /* z-index: -1; */
    content: "";
    filter: brightness(0.8);
  }
  &::after {
      position: absolute;
      left: 0;
      width: 105%;
      height: 10vh;
      bottom: 0px;
      background-image: url(https://livedemo00.template-help.com/wt_prod-20838/images/cloud-2.png);
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: bottom ;
      content: "";
      filter: brightness(0.8);
      /* border: 5px solid green; */
    
  }
`;

const ImgBanner = styled.img`
  background-size: cover;
  width: 220px;
  position: absolute;
  left: 60%;
  bottom: 20px;
  transform: translate(-60%, 0);
  filter: brightness(0.6);
`;


const Banner = () => {
  return (
    <ContentBanner>
      {/* <Navbar/> */}
      <Title>Proyecto Fa</Title>
      <ImgBanner src="/amarillo.png" />
    </ContentBanner>
  );
};

export default Banner;
