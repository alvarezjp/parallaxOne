import React from "react";
import styled from "styled-components";

const ContainImage = styled.section`
  border: 1px solid green;
  width: 284px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const IntImg = styled.img`
  border: 1px solid yellow;
  width: 100%;
  height: 537px;
`;

const BoxText = styled.article`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 8px;
`;
const TextBottom1 = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;
const TextBottom2 = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const Image = ({ img }) => {
  return (
    <ContainImage>
      <IntImg src={img} />
      <BoxText>
        <TextBottom1> Titulo</TextBottom1>
        <TextBottom2> Texto de desarrollo</TextBottom2>
      </BoxText>
    </ContainImage>
  );
};

export default Image;
