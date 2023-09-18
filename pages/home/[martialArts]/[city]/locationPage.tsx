import React from "react";
import { styled } from "@mui/system";
import Location from "src/modules/location-page";
import Header from "components/HeaderComponent";
import { useRouter } from "next/router";
import axios from "axios";

const Container = styled("div")({
  backgroundColor: "#fff",
  overflowY: "scroll",
  width: "100%",
  scrollbarWidth: "none",
  height: "100vh",
});

const Section = styled("div")({});

const LocationPage = ({ data }) => {
  return (
    <Container>
      <Header searchField={true} />
      <Section>
        <Location schoolData={data} />
      </Section>
    </Container>
  );
};

export async function getServerSideProps({ query }) {
  const { city, martialArts } = query;

  try {
    const response = await axios.get(
      "http://localhost:9000/api/Schools/filter-basedon-martialart-city/",
      {
        params: {
          city,
          martialArts,
        },
      }
    );
    if (response.statusText === "OK") {
      const data = response?.data;
      return {
        props: {
          data,
        },
      };
    }
  } catch (error) {
    console.error(error);
  }

  return {
    props: {},
  };
}

export default LocationPage;
