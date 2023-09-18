import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const LocationPageWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));
export const LocationPageSection = styled("div")(({ theme }) => ({
  backgroundColor: "#282828",
  paddingLeft: "140px",
  paddingTop: "30px",
  width: "50%",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    paddingInline: "20px",
    paddingTop: "15px",
  },
}));
export const LocationTitle = styled("div")(({ theme }) => ({
  fontFamily: "Saira",
  fontSize: "28px",
  fontWeight: 500,
  lineHeight: "34px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "#FCFCFC",
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
}));
export const FilterButton = styled("div")(({ theme }) => ({}));
export const FilterButtonWrapper = styled("div")(({ theme }) => ({
  border: "1px solid #828282",
  borderRadius: "4px",
  display: "flex",
  padding: "12px",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "10px",
  marginRight: "8px",
  cursor: "pointer",
  backgroundColor: "#333333",
  ":hover": {
    border: "1px solid #E0E0E0",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    padding: "8px",
    height: "30px",
    marginBottom: "10px",
    marginRight: "4px",
    width: "100%",
  },
  width: "20%",
}));
export const FilterIcon = styled("div")(({ theme }) => ({}));
export const FilterText = styled("div")(({ theme }) => ({
  fontFamily: "Saira",
  fontSize: "12px",
  fontWeight: 600,
  lineHeight: "16px",
  letterSpacing: "0.08em",
  textAlign: "center",
  color: "#FCFCFC",
}));

// City Card Design
export const CityCardDetailContainer = styled("div")(({ theme }) => ({
  width: "260px",
  minWidth: "260px",
  marginRight: "17px",
  [theme.breakpoints.down("md")]: {
    width: "110px",
    minWidth: "110px",
    margin: "15px 5px 15px 5px",
  },
}));

export const DetailSection = styled("div")(({ theme }) => ({
  backgroundColor: "#282828",
  paddingTop: "4px",
  paddingBottom: "5px",
  alignItems: "center",
  borderBottomLeftRadius: "4px",
  borderBottomRightRadius: "4px",
  [theme.breakpoints.down("md")]: {
    paddingInline: "7px",
    paddingBlock: "5px",
  },
}));

export const LogoSection = styled("div")({
  "@media screen and (max-width: 450px)": {
    height: "72px",
  },
  background: "linear-gradient(101.65deg, #535151 -3.18%, #3C3C3C 73.93%)",
  borderTopRightRadius: "4px",
  borderTopLeftRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Logo = styled("img")(({ theme }) => ({
  marginBlock: "19px",
  width: "85px",
  height: "85px",
  [theme.breakpoints.down("md")]: {
    width: "44px",
    height: "44px",
    marginBlock: "14px",
  },
}));

export const SchoolInfo = styled("div")({});

export const MartialArtTitle = styled("div")({
  fontFamily: "Saira",
  fontSize: "10px",
  fontWeight: 400,
  letterSpacing: "0em",
  color: "#BDBDBD",
});

export const CitySchoolName = styled("div")({
  fontFamily: "Saira",
  fontSize: "18px",
  fontWeight: 600,
  color: "#FCFCFC",
  "@media screen and (max-width: 960px)": {
    fontSize: "7px",
    width: "50px",
  },
});

export const SchoolNameDetail = styled("div")({
  fontSize: "14px",
  fontWeight: 400,
  letterSpacing: "0em",
  color: "#828282",
  "@media screen and (max-width: 960px)": {
    fontSize: "5px",
    width: "44px",
  },
});

export const SchoolRatingWrapper = styled("div")({
  display: "flex",
});

export const SchoolRating = styled("img")(({ theme }) => ({
  marginRight: "8px",

  [theme.breakpoints.down("md")]: {
    marginRight: "4px",
    width: "8px",
    height: "10",
  },
}));

export const ReviewTitle = styled("div")(({ theme }) => ({
  fontSize: "10px",
  fontWeight: 400,
  color: "#D8D8D8",
  [theme.breakpoints.down("md")]: {
    fontSize: "6px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "5px",
  },
}));

export const CardSection = styled("div")(({ theme }) => ({
  marginTop: "30px",
  "::-webkit-scrollbar": {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "16px",
  },
}));

export const MapSection = styled("div")(({ theme }) => ({
  width: "50%",
  height: "100%",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));
export const FooterWrapper = styled("div")(({ theme }) => ({}));
export const Icon = styled("img")(({ theme }) => ({}));

// Filter Card Style
export const FilterCardWrapper = styled("div")(({ theme }) => ({
  paddingInline: "50px",
  marginTop: "30px",
  color: "#FCFCFC",
  [theme.breakpoints.down("md")]: {
    paddingInline: "20px",
    marginTop: "10px",
  },
}));
export const Amenities = styled("div")(({ theme }) => ({
  fontSize: "28px",
  fontWeight: "600",
}));
export const AmenitiesDescription = styled("div")(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "400",
}));

export const AmenitiesLogoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #282828",
  padding: "25px 35px",
  marginRight: "20px",
  borderRadius: "6px",
  backgroundColor: "#5E5E5E",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    width: "90px",
    height: "50px",
    marginTop: "12px",
    marginBottom: "15px",
    marginRight: "10px",
  },
}));
export const AmenitiesLogo = styled("img")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    width: "20px",
    height: "20px",
  },
}));

export const AmenitiesName = styled("div")(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "600",
  paddingLeft: "16px",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "8px",
    fontSize: "12px",
    fontWeight: "600",
  },
}));

export const AmenitiesWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "39px",
  marginBottom: "32px",
  [theme.breakpoints.down("md")]: {
    marginBlock: "10px",
  },
}));
export const LocationWrapper = styled("div")({});
export const ClassWrapper = styled("div")({
  marginTop: "32px",
});
export const LocationTitleFilterCard = styled("div")({
  fontSize: "28px",
  fontWeight: "600",
  color: "#FCFCFC",
});
export const ClassTitle = styled("div")({
  fontSize: "28px",
  fontWeight: "600",
});

export const CheckBoxContainer = styled("div")({
  marginTop: "8px",
  padding: "8px",
  borderRadius: "4px",
});

export const CheckBoxSelected = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "16px",
  minWidth: "16px",
  height: "16px",
  minHeight: "16px",
  padding: "2px",
  background: "#7062ff",
  borderRadius: "2px",
});

export const CheckBoxTic = styled("img")({
  height: "16px",
  width: "16px",
});
export const BottomLine = styled("div")({
  width: "100%",
  height: "2px",
  backgroundColor: "#D9D9D9",
  marginTop: "10px",
});
export const ButtonWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  margin: "25px 50px 45px 50px",
  alignItems: "center",
});
export const CleanAll = styled("div")({
  fontSize: "18px",
  fontWeight: "400",
  color: "#FCFCFC",
  borderBottom: "1px solid #FCFCFC",
  cursor: "pointer",
});

export const FooterButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#D21632",
  fontSize: "12px",
  fontWeight: "600",
  "&:hover": {
    backgroundColor: "#AA9B9D",
  },
  color: "white",
  padding: "20px 24px",
  borderRadius: "4px",
  [theme.breakpoints.down("md")]: {
    height: "40px",
    color: "white",
    fontSize: "8px",
    whiteSpace: "nowrap",
    fontWeight: "600",
  },
  [theme.breakpoints.down("lg")]: {
    height: "30px",
    color: "white",
    fontSize: "10px",
    whiteSpace: "nowrap",
    fontWeight: "600",
  },
}));
