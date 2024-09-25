import styled from "styled-components";

export const ContainContact = styled.section`
  border: 3px solid red;
  width: 100%;
  height: 100vh;
  background-color: #1F2538;
`;

export const BoxText = styled.article`
  border: 1px solid yellow;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  padding: 8px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

export const BoxContent = styled.article`
  border: 1px solid blue;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 80%;
`;
export const BoxImg = styled.article`
  border: 1px solid yellow;
  width: 50%;
`;

export const ImgClient = styled.img`
  width: 500px;
  height: 500px;
`
export const BoxSocial = styled.article`
  border: 1px solid red;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2,300px);
  grid-template-rows: repeat(2,1fr);
  align-items  : center;
  justify-items: center;
  `;

export const ItemSocial = styled.div`
border: 3px solid green;
width: 100px;
height: 100px;
`
