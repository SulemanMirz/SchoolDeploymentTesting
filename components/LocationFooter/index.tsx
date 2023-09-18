import React from "react";
import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  AboutUsTitle,
  Address,
  AppTitle,
  BottomLine,
  Company,
  DojoIcon,
  DownloadContainer,
  FollowUsTitle,
  FooterSection,
  InputFieldWrapper,
  ListSchool,
  MailText,
  MailWrapper,
  Section,
  SocialBadge,
  SocialIcon,
  SocialIconWrapper,
} from "./components/footer.styled";

const LocationFooter = () => {
  return (
    <FooterSection>
      <Grid
        container
        sx={{
          paddingTop: { xs: "40px", md: "77px" },
          width: "100%",
        }}
      >
        <Grid item xs={12} sm={5.5} lg={6}>
          <MailWrapper>
            <MailText>
              Sign up for exclusive deals and free technique videos every single
              week
            </MailText>
            <InputFieldWrapper>
              <TextField
                variant="filled"
                label="Add Your Emails"
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#FFFFFF4D",
                  },
                  "&:focus-within .MuiInputLabel-root": {
                    color: "#FFFFFF4D",
                  },
                }}
                InputProps={{
                  sx: {
                    borderRadius: "4px !important",
                    backgroundColor: "#111111 !important",
                    width: { xs: "220px", md: "270px" },
                    border: "2px solid  #3d3d3d",

                    "&.MuiInputBase-root.MuiFilledInput-root:after": {
                      borderBottom: "1px solid #fff !important",
                    },

                    "&.MuiFilledInput-root": {
                      color: "#FFFFFF4D",
                    },
                  },
                }}
              />
              <Button
                sx={{
                  backgroundColor: "#D21632",
                  color: "#FCFCFC",
                  fontWeight: "600",
                  fontSize: {
                    xs: "8px !important",
                    md: "16px !important",
                  },
                  "&:hover": {
                    backgroundColor: "gray",
                    boxShadow: "none",
                  },
                  marginLeft: "8px",
                  padding: { sx: "8px", md: "16px" },
                  borderRadius: "4px !important",
                }}
              >
                Subscribe
              </Button>
            </InputFieldWrapper>
          </MailWrapper>
        </Grid>
        <Grid item xs={12} sm={2} lg={2}>
          <AboutUsTitle>ABOUT US</AboutUsTitle>
          <ListSchool>List Your School</ListSchool>
          <Company>Company</Company>
        </Grid>
        <Grid item xs={12} sm={2.5} lg={2}>
          <DownloadContainer>
            <AppTitle>DOJO+ App</AppTitle>
            <Link href="https://apps.apple.com/pk/app/dojo/id1568453709">
              <SocialBadge
                style={{
                  marginBottom: "15px",
                }}
                src="/assets/apple-store-badge.svg"
              />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=app.bravostudio.A01F53MDJ44JKP4EKY6JSAKNWN3">
              <SocialBadge src="/assets/google-play-badge.svg" />
            </Link>
          </DownloadContainer>
        </Grid>
        <Grid item xs={12} sm={2} lg={2}>
          <FollowUsTitle>Follow Us</FollowUsTitle>
          <SocialIconWrapper>
            <Link href="https://www.facebook.com/dojoplus.network">
              <SocialIcon src="/icons/facebook.svg" />
            </Link>
            <Link href="https://www.instagram.com/dojo.plus/">
              <SocialIcon
                style={{ paddingInline: "22px" }}
                src="/icons/instagram.svg"
              />
            </Link>
            <Link href="https://twitter.com/dojo_plus">
              <SocialIcon src="/icons/twitter.svg" />
            </Link>
          </SocialIconWrapper>
        </Grid>
      </Grid>
      <BottomLine />

      <Section>
        <Address>
          <DojoIcon
            style={{
              width: "117px",
              marginRight: "16px",
            }}
            src="https://res.cloudinary.com/de1kz0ucq/image/upload/v1681808375/dojoIcon_lglbwj.svg"
          />{" "}
          <ChevronRightIcon style={{ color: "#828282" }} /> Martial Arts{" "}
        </Address>
      </Section>
    </FooterSection>
  );
};

export default LocationFooter;
