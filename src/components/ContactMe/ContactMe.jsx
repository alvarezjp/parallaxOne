import React from "react";
import {
  BoxContent,
  BoxImg,
  BoxSocial,
  BoxText,
  ContainContact,
  ImgClient,
  ItemSocial,
  Title,
} from "./Styled";

const ContactMe = () => {
  return (
    <ContainContact>
      <BoxText>
        <Title>Contact whit </Title>
        <Title>Eternal Focus</Title>
      </BoxText>
      <BoxContent>
        <BoxImg><ImgClient src="public/client.jpg"/></BoxImg>
        <BoxSocial> 
          <ItemSocial>Numero uno</ItemSocial>
          <ItemSocial>Numero dos</ItemSocial>
          <ItemSocial>Numero tres</ItemSocial>
          <ItemSocial>Numero cuatro</ItemSocial>

        </BoxSocial>
      </BoxContent>
    </ContainContact>
  );
};

export default ContactMe;
