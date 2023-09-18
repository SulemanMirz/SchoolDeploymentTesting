import React from "react";
import {
  CityCardDetailContainer,
  DetailSection,
  Logo,
  LogoSection,
  SchoolInfo,
  CitySchoolName,
  SchoolNameDetail,
  SchoolRating,
  MartialArtTitle,
  SchoolRatingWrapper,
  ReviewTitle,
} from "../../components/home.styled";

type CityCardProps = {
  gymData?;
  data?;
};

const CityCard: React.FC<CityCardProps> = ({ gymData, data }) => {
  return (
    <CityCardDetailContainer>
      <LogoSection>
        <Logo src={data?.schoolLogo?.[0]?.url || "/logo/dojo.png"} />
      </LogoSection>
      <DetailSection>
        <SchoolInfo>
          <MartialArtTitle>{data?.martialArtsLookup?.[0]}</MartialArtTitle>
          <CitySchoolName>{data?.schoolName}</CitySchoolName>
          <SchoolNameDetail>{data?.address1}</SchoolNameDetail>
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
