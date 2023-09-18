import React from "react";
import {
  DetailSection,
  Logo,
  LogoSection,
  MartialArtTitle,
  ReviewTitle,
  SchoolCardDetailContainer,
  SchoolInfo,
  SchoolName,
  SchoolNameDetail,
  SchoolRating,
  SchoolRatingWrapper,
} from "./components/schoolcard.styled";

const SchoolCard = ({ data }) => {
  return (
    <SchoolCardDetailContainer>
      <LogoSection>
        <Logo src={data?.schoolLogo?.[0]?.url || "/logo/dojo.png"} />
      </LogoSection>
      <DetailSection>
        <SchoolInfo>
          <MartialArtTitle>{data?.martialArtsLookup?.[0]}</MartialArtTitle>
          <SchoolName>{data?.schoolName}</SchoolName>
          <SchoolNameDetail>{data?.address1}</SchoolNameDetail>
          <SchoolRatingWrapper>
            {[...new Array(5)].map(() => (
              <SchoolRating src="/icons/star-rating.svg" />
            ))}
            <ReviewTitle>113 reviews</ReviewTitle>
          </SchoolRatingWrapper>
        </SchoolInfo>
      </DetailSection>
    </SchoolCardDetailContainer>
  );
};

export default SchoolCard;
