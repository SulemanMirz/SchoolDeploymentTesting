import HomePage from "src/modules/home-page";
import React from "react";
import { styled } from "@mui/system";
import Header from "components/HeaderComponent";
import axios from "axios";

const Container = styled("div")({
  backgroundColor: "#fff",
  overflowY: "scroll",
  width: "100%",
  scrollbarWidth: "none",
  height: "100vh",
});

const Section = styled("div")({});

const Home = ({ location, city }) => {
  return (
    <Container>
      <Header />
      <Section>
        <HomePage location={location} city={city} />
      </Section>
    </Container>
  );
};

export async function getServerSideProps({ req }) {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  try {
    const response = await axios.get(
      `https://api.geoapify.com/v1/ipinfo?ip=${
        ip != 127 ? "50.73.157.178" : ip
      }&apiKey=6e1f3d71cc814df884a09e6469b931d5`
    );

    if (response.statusText === "OK") {
      const { location, city } = response?.data;
      return {
        props: {
          location,
          city,
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

export default Home;
