import React, { useEffect, useRef, useState } from "react";
import { CircularProgress, Grid, Skeleton } from "@mui/material";
import axios from "axios";
import {
  CardSection,
  CityHead,
  CityName,
  Description,
  DescriptionButton,
  FAQWrapper,
  FindSchoolDescription,
  FindSchoolLocation,
  FindSchoolLocationTitle,
  LoadingWrapper,
  MartialArtContainer,
  MartialArtSchoolContainer,
  MartialArtTitle,
  MartialArtTitleContainer,
  MoreButton,
  PopularSearchContainer,
  SchoolInfo,
  SchoolName,
  SchoolNameText,
  SearchButtonPopular,
  SearchTitle,
  SkeletonCardDetailContainer,
  Title,
} from "../components/home.styled";
import SearchIcon from "@mui/icons-material/Search";
import FAQ from "./question-answer-section";
import { useRouter } from "next/router";
import SchoolCard from "components/SchoolCard";

const gymData = [
  {
    id: "1",
    url: "https://res.cloudinary.com/de1kz0ucq/image/upload/v1681812879/CardImage3_bvtyel.jpg",
  },
  {
    id: "2",
    url: "https://res.cloudinary.com/de1kz0ucq/image/upload/v1681812879/CardImage1_v3i16f.jpg",
  },
  {
    id: "3",
    url: "https://res.cloudinary.com/de1kz0ucq/image/upload/v1681812879/CardImage2_znvxok.jpg",
  },
  {
    id: "4",
    url: "https://res.cloudinary.com/de1kz0ucq/image/upload/v1681812879/CardImage1_v3i16f.jpg",
  },
];

const MartialArtSection = ({ location, city }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userLocation, setUserLocation] = useState(null);
  const [recentGymData, setRecentGymData] = useState([]);
  const [nearestSchoolData, setNearestSchoolData] = useState([]);
  const [arrayData, setArrayData] = useState<number>(12);
  const { push } = useRouter();

  const groupedObjects = nearestSchoolData.reduce((grouped, obj) => {
    const martialArts = obj.martialArtsLookup;
    martialArts?.forEach((martialArt) => {
      if (!grouped[martialArt]) {
        grouped[martialArt] = [];
      }
      grouped[martialArt].push(obj);
    });
    return grouped;
  }, {});

  const citySchoolCount = nearestSchoolData.reduce((grouped, obj) => {
    const city = obj.city;
    if (!grouped[city]) {
      grouped[city] = 1;
    } else {
      grouped[city]++;
    }
    return grouped;
  }, {});

  const citySchoolCountArray = Object.entries(citySchoolCount).map(
    ([city, count]) => ({
      city,
      count,
    })
  );

  const fetchSchools: (
    searchQuery?: string,
    nearest?: boolean,
    lat?: number,
    long?: number
  ) => void = (searchQuery, nearest = false, lat, long) => {
    setIsLoading(true);
    if ((nearest || userLocation) && !searchQuery) {
      axios("/api/Schools/nearest-schools", {
        params: {
          lat: lat || userLocation?.lat || location?.latitude,
          long: long || userLocation?.long || location?.longitude,
        },
      })
        .then((res) => {
          setIsLoading(false);
          setNearestSchoolData(res?.data);
        })
        .catch((e) => {
          console.log(e);
        });
      return;
    }
  };
  const getRecentlyGym = () => {
    axios("/api/Schools/recently-added", {
      params: {
        count: 6,
      },
    })
      .then((res) => {
        setRecentGymData(res?.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const showPosition: (position: any) => void = (position) => {
    setUserLocation({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
    if (isLoading) {
      fetchSchools(
        "",
        true,
        position.coords.latitude,
        position.coords.longitude
      );
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      return;
    }
    if (isLoading) {
      fetchSchools("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getRecentlyGym();
  }, []);

  return (
    <MartialArtContainer>
      <MartialArtSchoolContainer>
        <>
          {isLoading ? (
            <>
              {[...new Array(2)].map(() => {
                return (
                  <MartialArtTitleContainer>
                    <Title>
                      <Skeleton
                        sx={{
                          background: "gray",
                          height: "35px",
                          width: "40%",
                        }}
                      />
                    </Title>
                    <Description>
                      <Skeleton
                        sx={{
                          background: "gray",
                          height: "20px",
                          width: "40% ",
                        }}
                      />
                    </Description>
                    <CardSection>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "-40px",
                        }}
                      >
                        {[...new Array(4)].map(() => {
                          return (
                            <>
                              <SkeletonCardDetailContainer>
                                <Skeleton
                                  sx={{ background: "gray" }}
                                  height={200}
                                />
                                <SchoolInfo>
                                  <MartialArtTitle>
                                    <Skeleton
                                      sx={{
                                        background: "gray",
                                        marginTop: "-20px",
                                      }}
                                    />
                                  </MartialArtTitle>
                                  <SchoolName>
                                    <Skeleton sx={{ background: "gray" }} />
                                  </SchoolName>
                                </SchoolInfo>
                              </SkeletonCardDetailContainer>
                            </>
                          );
                        })}
                      </div>
                    </CardSection>
                  </MartialArtTitleContainer>
                );
              })}
            </>
          ) : (
            <div>
              {
              Object.entries(groupedObjects).map(
                ([martialArt, objects]: any) => {
                  return (
                    <MartialArtTitleContainer>
                      <Title>{martialArt}</Title>
                      <DescriptionButton>
                        <Description>
                          {objects.length} {martialArt} near {city?.name}
                        </Description>
                        <MoreButton
                          onClick={() =>
                            push(
                              `/home/${martialArt}/${city?.name}/locationPage`
                            )
                          }
                        >
                          VIEW MORE
                        </MoreButton>
                      </DescriptionButton>
                      <div style={{ overflow: "hidden" }}>
                        <CardSection>
                          {objects.map((data) => {
                            return (
                              <>
                                <SchoolCard data={data} />
                              </>
                            );
                          })}
                        </CardSection>
                      </div>
                    </MartialArtTitleContainer>
                  );
                }
              )}
            </div>
          )}
        </>
      </MartialArtSchoolContainer>

      <PopularSearchContainer>
        <SearchTitle>Popular Searches</SearchTitle>
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
          {[...new Array(9)].map(() => {
            return (
              <SearchButtonPopular>
                <SearchIcon
                  sx={{
                    color: "#828282",
                  }}
                />
                <SchoolNameText>Martial arts school</SchoolNameText>
              </SearchButtonPopular>
            );
          })}
        </div>
      </PopularSearchContainer>
      <FindSchoolLocation>
        <FindSchoolLocationTitle>
          DOJO+ find martial arts schools everywhere you are
        </FindSchoolLocationTitle>
        <FindSchoolDescription>
          Check out in some of our most popular cities
        </FindSchoolDescription>
        {isLoading ? (
          <LoadingWrapper style={{ marginTop: 80 }}>
            <CircularProgress sx={{ color: "red" }} size={40} />
          </LoadingWrapper>
        ) : (
          <Grid
            container
            sx={{
              marginTop: "65px",
              width: "100%",
            }}
          >
            <Grid item xs={12} sm={6} lg={arrayData <= 12 ? 4 : 12}>
              <CityHead>Nearby cities</CityHead>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  height: "410px",
                }}
              >
                {citySchoolCountArray.slice(0, 22).map((data: any) => {
                  return (
                    <>
                      <CityName>
                        {data?.city} ({data?.count})
                      </CityName>
                    </>
                  );
                })}
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={arrayData <= 12 ? 4 : 12}>
              <CityHead>Neighborhoods</CityHead>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  height: "410px",
                }}
              >
                {citySchoolCountArray.slice(0, 22).map((data: any) => {
                  return (
                    <>
                      <CityName>
                        {data?.city} ({data?.count})
                      </CityName>
                    </>
                  );
                })}
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={arrayData <= 12 ? 4 : 12}>
              <CityHead>More</CityHead>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  height: "410px",
                }}
              >
                {citySchoolCountArray.slice(22, 44).map((data) => {
                  return (
                    <>
                      <CityName>{data?.city}</CityName>
                    </>
                  );
                })}
              </div>
            </Grid>
          </Grid>
        )}
      </FindSchoolLocation>
      <FAQWrapper>
        <FAQ />
      </FAQWrapper>
    </MartialArtContainer>
  );
};

export default MartialArtSection;
