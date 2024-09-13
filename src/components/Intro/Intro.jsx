import React from "react";
import styled from "styled-components";

const IntroContainer = styled.div`
  padding: 20px;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:20px;
  background-color: #ddd;
`;

const TitleIntro = styled.h2`
  font-size: 150px;
  padding: 0;
  margin: 30px 0;
  font-family: "Great Vibes", cursive;
`;

const Paragraph = styled.p`
font-size: 24px;

`



const Intro = () => {
  return (
    <IntroContainer>
   <Paragraph>Paginas que demuestran tu identidad empresarial</Paragraph>
   <TitleIntro>Proyecto Fa</TitleIntro>
   <Paragraph>Asesoria de posicionamiento web</Paragraph>
   <Paragraph>Investigacion y diseño UX</Paragraph>
   <Paragraph>Diseño y desarrollo de paginas web</Paragraph>
    </IntroContainer>
  );
};

export default Intro;
