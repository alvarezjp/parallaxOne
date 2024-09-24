import styled from "styled-components";

export const ContainGallery = styled.article`
  background-color: #cfdadb;
  border: 5px solid blue;
  height: 120vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  
`;

export const BoxGallery = styled.section`
  border: 1px solid red;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const ContainText = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid black;
  align-items: center;
`

export const TextInsta = styled.p`
  font-size: 16px;
`;

export const TitleSection = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;
