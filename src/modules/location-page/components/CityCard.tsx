import React from "react";
import { CityCardDetailContainer, CitySchoolName, DetailSection, Logo, LogoSection, MartialArtTitle, ReviewTitle, SchoolInfo, SchoolNameDetail, SchoolRating, SchoolRatingWrapper, } from "./location.styled";

type CityCardProps = {
  gymData?;
};

const CityCard: React.FC<CityCardProps> = () => {
  return (
    <CityCardDetailContainer>
      <LogoSection>
        <Logo src="https://res.cloudinary.com/de1kz0ucq/image/upload/v1681981623/Team_School_Logo_p6qxkz.png" />
      </LogoSection>
      <DetailSection>
        <SchoolInfo>
          <MartialArtTitle>Brazilian Jiu-jitsu</MartialArtTitle>
          <CitySchoolName>Gracie Barra São José dos Campos</CitySchoolName>
          <SchoolNameDetail>124 Trinity Plaze | 9.6 mi</SchoolNameDetail>
          <SchoolRatingWrapper>
            {[...new Array(5)].map(() => (
              <SchoolRating src="/icons/star-rating.svg" />
            ))}
            <ReviewTitle>113 reviews</ReviewTitle>
          </SchoolRatingWrapper>
        </SchoolInfo>
      </DetailSection>
    </CityCardDetailContainer>
  );
};

export default CityCard;
