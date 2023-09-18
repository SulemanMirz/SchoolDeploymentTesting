import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import {
  AddresSection,
  Address,
  AvatarAddres,
  GymTitle,
  Image,
  Name,
  PerMonth,
  Price,
  PriceWrapper,
  Rating,
  ScheduleContainer,
  ScheduleWrapper,
  School,
  SchoolAddress,
  SchoolCityAddress,
  SchoolPlan,
  Time,
} from "../../components/home.styled";

type ScheduleCardProps = {
  gymData?: any;
};

const ScheduleCard: React.FC<ScheduleCardProps> = ({ gymData }) => {
  const DefaultSchoolAvatar =
    "https://res.cloudinary.com/de1kz0ucq/image/upload/v1681981623/Team_School_Logo_p6qxkz.png";

  return (
    <ScheduleWrapper>
      <AddresSection>
        <AvatarAddres>
          <Image src={DefaultSchoolAvatar} />
          <SchoolAddress>
            <School>
              <GymTitle>{gymData?.schoolName}</GymTitle>
              <StarRateIcon sx={{ marginInline: "8px" }} />
              <Rating>4.2</Rating>
            </School>
            <SchoolCityAddress>
              {gymData?.city ? `${gymData?.city},` : ""}{" "}
              {gymData?.state ? `${gymData?.state},` : ""}{" "}
              {gymData?.country ? `${gymData?.country},` : ""}
            </SchoolCityAddress>
          </SchoolAddress>
        </AvatarAddres>
      </AddresSection>
      <ScheduleContainer>
        <SchoolPlan>
          <Name>{gymData?.martialArtsLookup?.[0]}</Name>
          <PriceWrapper>
            <Price>$150</Price>
            <PerMonth>/ month</PerMonth>
          </PriceWrapper>
        </SchoolPlan>
        <Address>
          {gymData?.address1 ? `${gymData?.address1} -` : ""}{" "}
          {gymData?.city ? `${gymData?.city},` : ""}{" "}
          {gymData?.state ? `${gymData?.state},` : ""}{" "}
          {gymData?.country ? `${gymData?.country},` : ""}
        </Address>
        <Time>5:40am - 6:35am</Time>
      </ScheduleContainer>
    </ScheduleWrapper>
  );
};

export default ScheduleCard;
