import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useTheme } from "@mui/material/styles";
import AutoComplete from "src/shared/components/AutoComplete/AutoComplete";
import {
  Container,
  HeaderButton,
  Icon,
  IconSearch,
  SchoolIcon,
  SearchBarContainer,
  SearchBarWrapper,
  SearchIconContainer,
  Section,
  TitleContainer,
} from "./components/header.styled";

const Header = ({ searchField }: any) => {
  const theme = useTheme();
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  return (
    <Container>
      <Section>
        <TitleContainer>
          <Icon src="https://res.cloudinary.com/de1kz0ucq/image/upload/v1681808375/dojoIcon_lglbwj.svg" />
        </TitleContainer>
        {searchField && (
          <SearchBarContainer>
            <form>
              <SearchBarWrapper>
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
                      startIcon={<SchoolIcon src="/icons/school-icon.svg" />}
                      keyName="country"
                      value={field?.value}
                      placeholder="Search for School name or Martial Art"
                      error={errors?.country && "Please Select Option"}
                    />
                  )}
                />

                <Controller
                  name="martialArts"
                  control={control}
                  render={({ field }) => (
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
                      keyName="martialArts"
                      value={field?.value}
                      placeholder="Atlanta, GA, US"
                      onChange={(_, value) => {
                        field?.onChange(value);
                      }}
                      error={errors.martialArts && "Please Select Option"}
                    />
                  )}
                />
                <SearchIconContainer>
                  <IconSearch />
                </SearchIconContainer>
              </SearchBarWrapper>
            </form>
          </SearchBarContainer>
        )}

        <HeaderButton>ADD SCHOOL</HeaderButton>
      </Section>
    </Container>
  );
};

export default Header;
