import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const HomePageWrapper = styled("div")({});

export const MartialArtSectionWrapper = styled("div")(({ theme }) => ({
  backgroundColor: "#282828",
  paddingInline: "153px",
  paddingBottom: "114px",
  [theme.breakpoints.down("md")]: {
    paddingInline: "16px",
    paddingBottom: "16px",
  },
  [theme.breakpoints.down("lg")]: {
    paddingBottom: "40px",
    paddingInline: "25px",
  },
}));

export const QuestionAnswerSection = styled("div")(({ theme }) => ({
  marginTop: "50px",
  [theme.breakpoints.down("md")]: {
    marginTop: "20px",
  },
}));
export const PopularGymLocation = styled("div")({
  backgroundColor: "white",
});

export const Container = styled("div")(({ theme }) => ({
  paddingBlock: "130px",
  paddingInline: "68px",
  width: "100%",
  position: "absolute",
  height: "830px",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  [theme.breakpoints.down("md")]: {
    paddingInline: "16px",
    paddingBlock: "30px",
    height: "650px",
  },
}));
export const Section1 = styled("div")(({ theme }) => ({
  width: "33%",

  [theme.breakpoints.down("lg")]: {
    width: "56%",
  },
  [theme.breakpoints.down("md")]: {
    width: "70%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
export const DojoName = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "228px",
  height: "81px",
  [theme.breakpoints.down("sm")]: {
    width: "115px",
    height: "24px",
  },
}));
export const DojoIcon = styled("img")({});
export const SchoolForm = styled("div")(({ theme }) => ({
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    paddingBlock: "16px",
  },
}));
export const SchoolTitle = styled("div")(({ theme }) => ({
  fontFamily: "Saira",
  fontSize: "40px",
  fontWeight: "700",
  lineHeight: "60px",
  letterSpacing: "-0.011em",
  textAlign: "left",
  color: "#FCFCFC",
  paddingBottom: "16px",
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
    marginTop: "34px",
    lineHeight: "30px",
  },
}));
export const TextFieldContainer = styled("div")({
  font: "Saira",
  fontWeight: "600",
  fontSize: "18px",
});
export const SelectWrapper = styled("div")({
  margin: "16px 0px 8px",
  display: "flex",
  flexDirection: "row",
  width: "100%",
});
export const SearchButton = styled("div")(({ theme }) => ({
  marginTop: "32px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
export const StyledImage = styled("div")(({ theme }) => ({
  backgroundImage:
    'url("https://res.cloudinary.com/de1kz0ucq/image/upload/v1681809441/HeroImage_fpytpw.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "830px",
  color: "#FCFCFC",
  position: "absolute",
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  [theme.breakpoints.down("md")]: {
    height: "650px",
  },
}));

export const MainDiv = styled("div")(({ theme }) => ({
  position: "relative",
  top: "0",
  minHeight: "830px",
  [theme.breakpoints.down("md")]: {
    minHeight: "650px",
  },
}));


export const LocationContainer = styled("div")(({ theme }) => ({
  paddingTop: "70px",
  paddingBottom: "76px",
  backgroundColor: "#111111",
  [theme.breakpoints.down("md")]: {
    paddingInline: "16px",
    paddingBlock: "56px",
  },
}));

export const SearchGymTitle = styled("div")(({ theme }) => ({
  textAlign: "center",
  fontWeight: "700",
  fontSize: "40px",
  color: "#FCFCFC",
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
    fontWeight: "400",
  },
}));

export const Section = styled("div")(({ theme }) => ({
  marginTop: "50px",
  color: "#FCFCFC",
  [theme.breakpoints.down("md")]: {
    marginTop: "50px",
    paddingInline: "16px",
  },
}));
export const Address = styled("div")({
  fontSize: "16px",
  fontWeight: "400",
  display: "flex",
});
export const BottomLine = styled("div")(({ theme }) => ({
  marginTop: "105px",
  height: "1px",
  background: "#404040",
  [theme.breakpoints.down("md")]: {
    marginInline: "16px",
  },
}));
export const SchoolName = styled("div")(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "400",
  fontStyle: "normal",
  paddingBottom: "16px",
  color: "#FCFCFC",
  [theme.breakpoints.down("md")]: {
    fontSize: "10px",
    textAlign: "center",
  },
}));

export const FAQContainer = styled("div")(({ theme }) => ({
  background: "#3C3C3C",
  paddingInline: "90px",
  paddingBlock: "80px",
  color: "#FCFCFC",
  [theme.breakpoints.down("md")]: {
    paddingInline: "16px",
    paddingBlock: "40px",
  },
}));

export const FaqTitle = styled("div")(({ theme }) => ({
  fontWeight: "700",
  fontSize: "40px",
  Font: "Saira",
  [theme.breakpoints.down("sm")]: {
    fontWeight: "200",
    fontSize: "25px",
    Font: "Saira",
  },
  [theme.breakpoints.down("md")]: {
    fontWeight: "400",
    fontSize: "30px",
    Font: "Saira",
  },
}));

export const FaqDescription = styled("div")(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "400",
  [theme.breakpoints.down("sm")]: {
    fontWeight: "100",
    fontSize: "14px",
    Font: "Saira",
  },
}));

export const FAQCardContainer = styled("div")({
  marginTop: "16px",
});
export const QuestionDetail = styled(Typography)(({ theme }) => ({
  color: "#FCFCFC",
  paddingLeft: "18px",
  fontSize: "17px",
  fontWeight: "200",
  fontStyle: "Inter",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    fontWeight: "400",
  },
}));
export const QuestionNumber = styled(Typography)(({ theme }) => ({
  color: "#FCFCFC",
  paddingLeft: "30px",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "0px",
  },
}));

export const ExpandIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  marginInline: "30px",
  color: "#FCFCFC",
  [theme.breakpoints.down("md")]: {
    marginInline: "0px",
  },
}));

export const MartialArtContainer = styled("div")({});
export const Title = styled("div")(({ theme }) => ({
  fontFamily: "Saira",
  fontSize: "28px",
  fontWeight: 600,
  lineHeight: "34px",
  letterSpacing: "0em",
  textAlign: "left",
  color: " #FCFCFC",
  [theme.breakpoints.down("md")]: {
    marginTop: "17px",
    fontSize: "22px",
    fontWeight: "600",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "10px",
    fontSize: "14px",
    fontWeight: "600",
  },
}));
export const CardSection = styled("div")(({ theme }) => ({
  marginTop: "30px",
  display: "flex",
  overflowX: "scroll",
  "::-webkit-scrollbar": {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "16px",
  },
}));
export const ScheduleCardContainer = styled("div")(({ theme }) => ({
  marginTop: "72px",
  [theme.breakpoints.down("md")]: {
    marginTop: "36px",
  },
}));
export const ScheduleTitle = styled("div")(({ theme }) => ({
  fontWeight: "600",
  fontSize: "28px",
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
  },
}));
export const DescriptionButton = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const SkeletonCardDetailContainer = styled("div")(({ theme }) => ({
  width: "260px",
  minWidth: "260px",
  height: "256px",
  minHeight: "256px",
  marginRight: "17px",
  [theme.breakpoints.down("md")]: {
    width: "150px",
    minWidth: "110px",
    margin: "15px 5px 15px 5px",
  },
}));

export const Description = styled("div")(({ theme }) => ({
  fontFamily: "Saira",
  fontSize: "18px",
  fontWeight: 400,
  lineHeight: "22px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "#FCFCFC",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));
export const MoreButton = styled("div")(({ theme }) => ({
  fontFamily: "Saira",
  fontSize: "12px",
  fontWeight: 600,
  lineHeight: "16px",
  letterSpacing: "0em",
  textAlign: "center",
  color: "#FCFCFC",
  padding: "12px",
  border: "1px solid #4F4F4F",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    fontSize: "8px",
    padding: "8px",
  },
}));
export const LoadingWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  marginTop: "20px",
  justifyContent: "center",
});

export const MartialArtistContainer = styled("div")(({ theme }) => ({
  border: "1px solid black",
  borderRadius: "6px",
  marginTop: "108px",
  paddingBottom: "39px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "10px",
    paddingBottom: "20px",
  },
}));
export const MartialArtistTitle = styled("div")(({ theme }) => ({
  marginTop: "49px",
  marginBottom: "34px",
  marginLeft: "30px",
  fontSize: "28px",
  fontWeight: "600",
  font: "Saira",
  lineHeight: "33px",
  [theme.breakpoints.down("md")]: {
    margin: "20px 0px 20px 15px",
  },
}));
export const CardContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const BackwardIcon = styled("img")({});
export const ForwardIcon = styled("img")({});

export const ScheduleWrapper = styled("div")({
  width: "330px",
  minWidth: "330px",
  paddingRight: "23px",
  height: "258px",
});

export const AddresSection = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#111111",
  height: "138px",
  paddingInline: "27px",
  paddingBlock: "48px",
  borderRadius: "7px",
  [theme.breakpoints.down("sm")]: {
    paddingInline: "13px",
    paddingBlock: "24px",
    height: "138px",
  },
}));
export const AvatarAddres = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const Image = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "60px",
    height: "60px",
  },
}));
export const School = styled("div")({
  display: "flex",
  alignItems: "center",
});
export const SchoolAddress = styled("div")({
  paddingLeft: "10px",
  color: "#FCFCFC",
});
export const SchoolCityAddress = styled("div")({});
export const GymTitle = styled("div")({
  fontSize: "18px",
  fontWeight: "600",
  display: "flex",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  width: "100px",
});
export const Rating = styled("div")({});
export const ScheduleContainer = styled("div")(({ theme }) => ({
  marginTop: "15px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "8px",
  },
}));
export const SchoolPlan = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});
export const Name = styled("div")(({ theme }) => ({
  fontFamily: "Saira",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "20.7898px",
  paddingRight: "25px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));
export const Time = styled("div")({
  fontFamily: "Saira",
  fontSize: " 18px",
  fontWeight: " 400",
  lineHeight: " 22px",
  color: "#696C74",
});
export const Price = styled("div")(({ theme }) => ({
  fontFamily: "Saira",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "20.7898px",
}));
export const PerMonth = styled("div")({
  paddingRight: "6px",
  fontWeight: "400",
  fontSize: " 13.8599px",
});
export const PriceWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const MartialArtistCardContainer = styled("div")({
  width: "100%",
  textAlign: "center",
  paddingRight: "10px",
});
export const MartialArtImage = styled("img")({
  width: "100%",
});
export const CoachName = styled("div")({
  marginTop: "12px",
});

export const GymCardContainer = styled("div")(({ theme }) => ({
  width: "415px",
  minWidth: "415px",
  paddingRight: "25px",
  [theme.breakpoints.down("md")]: {
    minWidth: "180px",
    width: "180px",
    height: "228px",
    paddingRight: "12px",
  },
}));
export const ImageContainer = styled("div")({});

export const GymDescription = styled("div")(({ theme }) => ({
  marginTop: "12px",
  fontSize: "18px",
  fontWeight: "600",
  font: "Saira",
  lineHeight: "21px",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
    marginTop: "8px",
  },
}));

export const GymImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    height: "177px",
  },
}));
export const SchoolsQuantity = styled("div")(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "400",
  font: "Saira",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));

export const PopularSearchContainer = styled("div")(({ theme }) => ({
  paddingTop: "60px",
  fontSize: "16px",
  fontWeight: "400",
  font: "Saira",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));

export const SearchTitle = styled("div")(({ theme }) => ({
  fontWeight: "600",
  fontSize: "28px",
  marginBottom: "22px",
  color: "#FCFCFC",
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
  },
}));
export const SchoolNameText = styled("div")(({ theme }) => ({
  fontWeight: "600",
  fontSize: "12px",
  marginLeft: "8px",
  letterSpacing: "0.08em",
  color: "#828282",
  [theme.breakpoints.down("md")]: {
    fontSize: "8px",
  },
}));
export const SearchButtonPopular = styled("div")(({ theme }) => ({
  border: "1px solid #828282",
  borderRadius: "4px",
  display: "flex",
  padding: "12px",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "30px",
  marginRight: "8px",
  cursor: "pointer",
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
  },
}));

// New Designing

export const SearchMainHeaderSection = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
}));

export const BackgroundImage = styled("img")(({ theme }) => ({
  display: "block",
  width: "100%",
  height: "352px",
  [theme.breakpoints.down("lg")]: {
    height: "320px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "462px",
  },
}));
export const SchoolLocation = styled("div")(({ theme }) => ({
  fontFamily: "Saira",
  fontSize: "48px",
  fontWeight: 600,
  lineHeight: "58px",
  letterSpacing: "0em",
  textAlign: "center",
  [theme.breakpoints.down("lg")]: {
    fontSize: "38px",
    lineHeight: "38px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
  },
}));
export const CompleteLocation = styled("div")(({ theme }) => ({
  fontFamily: "Saira",
  fontSize: "24px",
  fontWeight: 400,
  lineHeight: "29px",
  letterSpacing: "0em",
  textAlign: "center",
  [theme.breakpoints.down("lg")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));
export const LocationTextContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  color: "white",
  fontSize: "24px",
  fontWeight: "bold",
  transform: "translate(-50%,-50%)",
}));

export const SearchBarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: "40px",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    marginTop: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "20px",
  },
}));

export const FirstSearchBar = styled("div")(({ theme }) => ({
  fontFamily: "Saira",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "28px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "gray",
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

export const SecondSearchBar = styled("div")(({ theme }) => ({
  fontFamily: "Saira",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "28px",
  width: "360px",
  letterSpacing: "0px",
  textAlign: "left",
  padding: "16px",
  color: "gray",
  background:
    "linear-gradient(0deg, #3C3C3C, #3C3C3C), linear-gradient(0deg, #111111, #111111)",
  border: "1px solid #3C3C3C",
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

export const GetApp = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: "12px",
  justifyContent: "center",
  alignItems: "center",
}));

export const AppDownloadIcon = styled("img")(({ theme }) => ({
  padding: "10px",
  cursor: "pointer",
}));

export const GetAppTitle = styled("div")(({ theme }) => ({
  fontFamily: "Saira",
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "19px",
  letterSpacing: "0em",
  textAlign: "center",
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

export const PlanPrice = styled("div")({
  fontFamily: "Saira",
  fontSize: "32px",
  fontWeight: 600,
  letterSpacing: "0em",
  color: "#333333",
  "@media screen and (max-width: 960px)": {
    fontSize: "11px",
  },
});

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

export const MartialArtSchoolContainer = styled("div")({});

export const MartialArtTitleContainer = styled("div")(({ theme }) => ({
  paddingTop: "45px",
  [theme.breakpoints.down("md")]: {
    paddingTop: "20px",
  },
}));

export const FindSchoolLocation = styled("div")({
  marginTop: "60px",
  color: "#FCFCFC",
});

export const FindSchoolLocationTitle = styled("div")({
  fontSize: "28px",
  fontWeight: 600,
  letterSpacing: "0em",
  lineHeight: "33px",
});

export const FindSchoolDescription = styled("div")({
  fontSize: "16px",
  fontWeight: 400,
  letterSpacing: "0em",
  lineHeight: "19px",
});

export const CityHead = styled("div")({
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "19px",
  color: "#BDBDBD",
});

export const CityName = styled("div")({
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "19px",
  color: "#FCFCFC",
  marginTop: "16px",
  cursor: "pointer",
});

export const FAQWrapper = styled("div")({});
export const FooterWrapper = styled("div")({});






