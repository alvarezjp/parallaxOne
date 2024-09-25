import React from "react";
import {
  ContainGallery,
  BoxGallery,
  TitleSection,
  TextInsta,
  ContainText,
} from "./Styled";
import Image from "./Image";

const linkImg = [
  "https://i.pinimg.com/564x/47/b0/35/47b035736726db2e9b915b3ac9001c3e.jpg",
  "https://i.pinimg.com/564x/11/c4/60/11c460c99a5eb3d36c5a75cf597b6bbd.jpg",
  "https://i.pinimg.com/564x/74/c4/8c/74c48c8c286652456303813ac407d139.jpg",
  "https://i.pinimg.com/564x/b5/cc/5e/b5cc5e99b6f08ad2c1b1b5aca328b894.jpg",
];

const Gallery = () => {
  return (
    <ContainGallery>
      <ContainText>
        <TextInsta>@Eternal-Focus</TextInsta>
        <TitleSection>Portafolio </TitleSection>
      </ContainText>
      <BoxGallery>
        
        <Image
          img={
            "https://i.pinimg.com/564x/47/b0/35/47b035736726db2e9b915b3ac9001c3e.jpg"
          }
        />
        <Image
          img={
            "https://i.pinimg.com/564x/11/c4/60/11c460c99a5eb3d36c5a75cf597b6bbd.jpg"
          }
        />
        <Image
          img={
            "https://i.pinimg.com/564x/74/c4/8c/74c48c8c286652456303813ac407d139.jpg"
          }
        />
        <Image
          img={
            "https://i.pinimg.com/564x/b5/cc/5e/b5cc5e99b6f08ad2c1b1b5aca328b894.jpg"
          }
        />
      </BoxGallery>
    </ContainGallery>
  );
};

export default Gallery;
