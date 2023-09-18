import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

import {
  AppDownloadIcon,
  BackgroundImage,
  CompleteLocation,
  GetApp,
  GetAppTitle,
  HomePageWrapper,
  IconSearch,
  LocationTextContainer,
  MartialArtSectionWrapper,
  SchoolIcon,
  SchoolLocation,
  SearchBarContainer,
  SearchBarWrapper,
  SearchIconContainer,
  SearchMainHeaderSection,
  FooterWrapper,
} from "./components/home.styled";
import MartialArtSection from "./martial-arts-section";
import { useForm, Controller } from "react-hook-form";
import AutoComplete from "src/shared/components/AutoComplete/AutoComplete";
import axios from "axios";
import LocationFooter from "../../../components/LocationFooter";

const HomePage = ({ location, city }) => {
  const [homePageFieldData, setHomePageFieldData] = useState([]);
  const [getCountryAndCount, setGetCountryAndCount] = useState([]);
  const [isFieldLoading, setIsFieldLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [cities, setCities] = useState<any>();
  const [martialArtist, setMartialArtist] = useState<any>();
  const [schoolNameMartialArts, setSchoolNameMartialArts] = useState<any>();
  const theme = useTheme();
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  const countryData = homePageFieldData?.map((ele) => ele?.country?.trim());
  // @ts-ignore
  const country = [...new Set(countryData)]?.map((ele) => {
    return { country: ele };
  });
  const stateData = homePageFieldData?.map((ele) => ele?.state?.trim());
  // @ts-ignore
  const state = [...new Set(stateData)]?.map((ele) => {
    return { state: ele };
  });

  const onSubmit = (data) => {
    axios("/api/SchoolWithCache/search-homepage-gym", {
      params: {
        country: data?.country,
        city: data?.city,
        martialArts: data?.martialArts?.martialArts,
      },
    })
      .then((res) => {
        setSearchData(res?.data);
      })
      .catch((error) => {
        console.log("Error at Search Gym", error);
      });
  };

  const getHomePageFieldFilterData = () => {
    setCities([]);
    setMartialArtist([]);
    setIsFieldLoading(true);
    axios("/api/SchoolWithCache/filter-homepage-fields")
      .then((res) => {
        setHomePageFieldData(res?.data);
        const cityData = res?.data?.map((ele) => ele?.city?.trim());
        // @ts-ignore
        const city = [...new Set(cityData)]?.map((ele) => {
          return { city: ele };
        });
        setCities(city);

        const martialArtsData = res.data?.map((ele) =>
          ele?.martialArts?.trim()
        );
        // @ts-ignore
        const martialArts = [...new Set(martialArtsData)]?.map((ele) => {
          return { martialArts: ele };
        });
        setMartialArtist(martialArts);
        // school
        const schoolData = res.data?.map((ele) => ele?.schoolName?.trim());
        // @ts-ignore
        const schoolName = [...new Set(schoolData)]?.map((ele) => {
          return { schoolName: ele };
        });

        const schoolNameMartialArt = [...schoolName, ...martialArts];
        setSchoolNameMartialArts(schoolNameMartialArt);

        setIsFieldLoading(false);
      })
      .catch((error) => {
        setIsFieldLoading(false);
        console.log("error", error);
      });
  };

  const getAllCountriesAndCounts = () => {
    axios("/api/SchoolWithCache/all-country-counts")
      .then((res) => {
        setGetCountryAndCount(res?.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const onChangeCountry = (value) => {
    if (!value?.country) {
      setMartialArtist(martialArtist);
      setCities(cities);
    } else {
      const filterCityBasedCountry = homePageFieldData
        ?.filter((data) => data?.country === watch("country"))
        .map((data) => ({
          city: data?.city,
        }));
      const allCityData = filterCityBasedCountry?.map((ele) =>
        ele?.city?.trim()
      );
      const uniqueCityData = [
        //@ts-ignore
        ...new Set(allCityData),
      ]?.map((ele) => ({ city: ele }));

      setCities(uniqueCityData);

      const filterMartialArtsBasedCountry = homePageFieldData
        ?.filter((ele) => ele?.country === watch("country"))
        .map((ele) => ele?.martialArts);
      const allMartialArtData = filterMartialArtsBasedCountry?.map((ele) =>
        ele?.trim()
      );
      const uniqueMartialArtsData = [
        //@ts-ignore
        ...new Set(allMartialArtData),
      ]?.map((ele) => ({ martialArts: ele }));
      setMartialArtist(uniqueMartialArtsData);
    }
  };

  const onChangeCity = (value) => {
    if (!value?.city) {
      setMartialArtist(martialArtist);
    } else {
      const filterMartialArtBasedCity = (homePageFieldData || [])
        ?.filter((ele) => ele?.city === watch("city"))
        .map((ele) => ele?.martialArts);
      const allMartialArtData = filterMartialArtBasedCity?.map((ele) => ele);
      const uniqueMartialArtsData = [
        //@ts-ignore
        ...new Set(allMartialArtData),
      ]?.map((ele) => ({ martialArts: ele }));
      setMartialArtist(uniqueMartialArtsData);
    }
  };

  useEffect(() => {
    getHomePageFieldFilterData();
    getAllCountriesAndCounts();
  }, []);

  return (
    <HomePageWrapper>
      <SearchMainHeaderSection>
        <BackgroundImage src="https://res.cloudinary.com/de1kz0ucq/image/upload/v1689002020/site-background_iowcyo.png" />
        <LocationTextContainer>
          <SchoolLocation>Martial Arts Schools in {city?.name}</SchoolLocation>
          <CompleteLocation>
            Discover the 5,652 martial arts dojos near you
          </CompleteLocation>
          <SearchBarContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
              <SearchBarWrapper>
                <Controller
                  name="martialArts"
                  control={control}
                  render={({ field }) => {
                    return (
                      <AutoComplete
                        style={{
                          borderTopLeftRadius: "0px !important",
                          borderBottomLeftRadius: "0px !important",
                          [theme.breakpoints.up("sm")]: {
                            width: "360px",
                          },
                          [theme.breakpoints.down("md")]: {
                            width: "260px",
                            marginTop: "10px",
                          },
                        }}
                        startIcon={<SchoolIcon src="/icons/school-icon.svg" />}
                        keyName="schoolName"
                        keyName2="martialArts"
                        value={field?.value}
                        options={schoolNameMartialArts}
                        placeholder="Search for School name or Martial Art"
                        onChange={(_, value) => {
                          field?.onChange(value);
                        }}
                        error={errors.martialArts && "Please Select Option"}
                      />
                    );
                  }}
                />

                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <AutoComplete
                      style={{
                        borderTopRightRadius: "0px !important",
                        borderBottomRightRadius: "0px !important",
                        borderRight: "none !important",
                        [theme.breakpoints.up("sm")]: {
                          width: "360px",
                        },
                        [theme.breakpoints.down("md")]: {
                          width: "260px",
                          marginTop: "10px",
                        },
                      }}
                      keyName="country"
                      value={field?.value}
                      options={country}
                      placeholder="Atlanta, GA, US"
                      onChange={(_, value) => {
                        field?.onChange(value);
                        setValue("country", value?.country);
                        onChangeCountry(value);
                      }}
                      error={errors?.country && "Please Select Option"}
                    />
                  )}
                />

                <SearchIconContainer>
                  <IconSearch />
                </SearchIconContainer>
              </SearchBarWrapper>
            </form>
          </SearchBarContainer>
          <GetApp>
            <AppDownloadIcon src="/icons/android.svg" />
            <AppDownloadIcon src="/icons/apple.svg" />
            <GetAppTitle>Get DOJO+ app today</GetAppTitle>
          </GetApp>
        </LocationTextContainer>
      </SearchMainHeaderSection>
      <MartialArtSectionWrapper>
        <MartialArtSection location={location} city={city} />
      </MartialArtSectionWrapper>
      <FooterWrapper>
        <LocationFooter />
      </FooterWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
