import React from "react";
import { CoachName,  MartialArtImage, MartialArtistCardContainer, } from "../../components/home.styled";


const MartialArtist = () => {
  return <MartialArtistCardContainer>
    <MartialArtImage src="https://res.cloudinary.com/de1kz0ucq/image/upload/v1676464351/collection/smallCardImg_qilj3l.svg"/>
    <CoachName>JIU JITSU</CoachName>
  </MartialArtistCardContainer>;
};

export default MartialArtist;
