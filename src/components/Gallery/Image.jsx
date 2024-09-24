import React from "react";
import styled from "styled-components";

const ContainImage = styled.div`
  border: 1px solid green;
  width: 200px;
  height: 100%;
`;
const IntImg = styled.img`
  border: 1px solid yellow;
  width: 100%;
  height: 400px;
`;
const TextBottom1 = styled.h2`
font-size: 24px;
font-weight: 600;
`
const TextBottom2 = styled.p`
font-size: 16px;
font-weight: 600;
`

const Image = ({img}) => {
    return (
        <ContainImage>
            <IntImg src={img}/>
            <TextBottom1> Titulo</TextBottom1>
            <TextBottom2> Texto de desarrollo</TextBottom2>

        </ContainImage>
  );
};

export default Image;
