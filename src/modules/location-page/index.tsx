import React, { useEffect, useRef, useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import { Box, Grid } from "@mui/material";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import {
  FilterButton,
  FilterButtonWrapper,
  FilterText,
  FooterWrapper,
  LocationPageSection,
  LocationPageWrapper,
  LocationTitleFilterCard,
  MapSection,
} from "./components/location.styled";
import LocationFooter from "components/LocationFooter";
import SchoolCard from "components/SchoolCard";
import { useRouter } from "next/router";
import ModalOverlay from "../modal-overlay";
import FilterCard from "./components/FilterCard";

const Location = ({ schoolData }) => {
  const { query } = useRouter();

  const containerRef = useRef(null);
  const [cardContainerHeight, setCardContainerHeight] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal: () => void = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    setCardContainerHeight(containerRef?.current?.clientHeight + 40);
  }, []);

  const containerStyle = {
    width: "100%",
    height: cardContainerHeight,
  };

  const center = {
    lat: schoolData[0]?.lat,
    lng: schoolData[0]?.long,
  };

  const mapStyles: any = [
    {
      stylers: [
        {
          hue: "#ff1a00",
        },
        {
          invert_lightness: true,
        },
        {
          saturation: -100,
        },
        {
          lightness: 33,
        },
        {
          gamma: 0.5,
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#2D333C" }],
    },
  ];

  const Markers = ({ markers }) => {
    return markers.map((marker, index) => {
      const position = { lat: marker.lat, lng: marker.long };
      console.log(
        "markers data",
        marker.schoolLogo?.[0]?.thumbnails?.small?.url
      );
      return (
        <Marker
          key={index}
          position={position}
          icon={{
            url: `${marker.schoolLogo?.[0]?.thumbnails?.small?.url}`,
            fillOpacity: 1,
            strokeColor: "black",
            strokeWeight: 8,
            scale: 8,
          }}
        />
      );
    });
  };

  return (
    <>
      <LocationPageWrapper>
        <LocationPageSection ref={containerRef}>
          <LocationTitleFilterCard>
            {schoolData?.length} Best {query?.martialArts} near {query?.city}
          </LocationTitleFilterCard>
          <FilterButton onClick={handleModal}>
            <FilterButtonWrapper>
              <TuneIcon
                sx={{
                  color: "#828282",
                  marginRight: "8px",
                }}
              />
              <FilterText>FILTERS</FilterText>
            </FilterButtonWrapper>
          </FilterButton>
          <Grid
            container
            sx={{
              paddingTop: { sx: "10px", sm: "25px" },
              width: "100%",
              display: "flex",
              justifyContent: { sx: "center", md: "left" },
            }}
          >
            {schoolData?.map((data) => {
              return (
                <div
                  style={{
                    marginBottom: "15px",
                  }}
                >
                  <SchoolCard data={data} />
                </div>
              );
            })}
          </Grid>
        </LocationPageSection>
        <MapSection>
          <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={16}
              options={{
                styles: mapStyles,
              }}
            >
              <Markers markers={schoolData} />
            </GoogleMap>
          </LoadScript>
        </MapSection>
      </LocationPageWrapper>
      <FooterWrapper>
        <LocationFooter />
      </FooterWrapper>
      <ModalOverlay
        open={isModalVisible}
        maxWidth="788px"
        onCloseClick={handleModal}
        title="Filters"
        headerStyle={{
          backgroundColor: "#282828",
        }}
        height="100%"
      >
        <Box
          sx={{
            overflow: "scroll",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <FilterCard />
        </Box>
      </ModalOverlay>
    </>
  );
};

export default Location;
