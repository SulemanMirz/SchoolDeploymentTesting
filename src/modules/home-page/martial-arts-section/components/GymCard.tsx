import React from "react";
import {
  GymCardContainer,
  GymDescription,
  GymImage,
  ImageContainer,
  SchoolsQuantity,
} from "../../components/home.styled";
import { useRouter } from "next/router";

const GymCard = ({ data }) => {
  const  router  = useRouter();
  return (
    <GymCardContainer>
      <ImageContainer>
        <GymImage src={data?.url} />
      </ImageContainer>
      <GymDescription onClick={() => router.push(`/city?city=${data?.city}`)}>
        Martial Arts Gym in {data?.city}
      </GymDescription>
      <SchoolsQuantity>{data?.count} schools</SchoolsQuantity>
    </GymCardContainer>
  );
};

export default GymCard;
