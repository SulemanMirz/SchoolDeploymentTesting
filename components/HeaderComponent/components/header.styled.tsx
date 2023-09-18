import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

export const TitleContainer = styled("div")({});

export const Icon = styled("img")(({ theme }) => ({
  width: "144px",
  height: "25px",
  [theme.breakpoints.down("md")]: {
    width: "100px",
    height: "18px",
  },
}));

export const Section = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "40px 120px ",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    padding: "16px 18px",
  },
}));

export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  backgroundColor: "#111111",
  [theme.breakpoints.down("md")]: {
    backgroundColor: "#111111",
  },
}));

export const HeaderButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#D21632",
  fontSize: "12px",
  fontWeight: "600",

  "&:hover": {
    backgroundColor: "#AA9B9D",
  },
  color: "white",
  padding: "20px 30px",
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

export const SearchBarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    marginTop: "30px",
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "20px",
  },
}));

export const SearchBarWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const SchoolIcon = styled("img")(({ theme }) => ({
  width: "24px",
  height: "24px",
  marginRight: "6px",
  borderRadius: "4px",
}));

export const SearchIconContainer = styled("div")(({ theme }) => ({
  marginLeft: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#333333",
  padding: "16px",
  borderRadius: "4px",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    marginTop: "10px",
  },
}));

export const IconSearch = styled(SearchIcon)(({ theme }) => ({
  width: "24",
  height: "24",

  [theme.breakpoints.down("sm")]: {
    width: "16",
    height: "16",
  },
}));
