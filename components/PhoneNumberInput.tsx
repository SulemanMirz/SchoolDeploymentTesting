import React, { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
// @ts-ignore
import en from "react-phone-number-input/locale/en";
import "react-phone-number-input/style.css";
import { styled } from "@mui/system";
import { CountryCode } from "libphonenumber-js/core";

type FromControlProps = {
  isError: boolean;
  isFocus: boolean;
};

const Label = styled("div")(() => ({
  lineHeight: "1rem",
  color: "#323c3c",
  position: "absolute",
  left: "68px",
  top: "10%",
  paddingLeft: "1rem",
  fontSize: "0.75rem",
  pointerEvents: "none",
}));

const Container = styled("div")({
  width: "100%",
  marginTop: "1rem",
  marginBottom: "8px",
});

const FormControl = styled("div")<FromControlProps>(({ isError, isFocus }) => ({
  paddingTop: "0",
  paddingBottom: "0",
  borderRadius: "0.375rem",
  marginTop: "0.5rem",
  marginBottom: "0.1rem",
  border: isError ? "2.5px solid #d32f2f" : "2px solid #3d3d3d",

  backgroundColor: isFocus ? "#fff" : "#1b1b1b",
  transition: "all 0.1s ease-in",
  position: "relative",
}));

const HelperText = styled("div")({
  whiteSpace: "nowrap",
  textTransform: "capitalize",
  fontSize: "14px",
  color: "gray",
  fontWeight: "500",
  margin: "0",
  paddingInline: "16px",
  paddingTop: "5px",
});

const Error = styled("p")({
  fontWeight: "500",
  fontSize: "12px",
  paddingLeft: "1rem",
  marginTop: "0",
  marginBottom: "0",
  color: "#d32f2f",
});
type PhoneNumberInputProps = {
  onChange?: (e) => void;
  helperText?: string;
  value?: string;
  onCountryChange?: (country) => void;
};

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  value,
  onChange,
  helperText,
  onCountryChange,
}) => {
  const [isFocus, setFocus] = useState(false);
  const [validateNumber, setValidateNumber] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const focus = Boolean(isFocus);
  const onFocus = (): void => {
    setFocus((state) => !state);
  };

  return (
    <>
      <Container>
        <FormControl
          onBlur={onFocus}
          onFocus={onFocus}
          isFocus={isFocus}
          isError={validateNumber}
        >
          <Label
            // htmlFor="name"
            className="text-xs text-dojogray-600"
          >
            PHONE NUMBER
          </Label>

          <PhoneInput
            value={value}
            onChange={(number) => {
              onChange(number);
              setValidateNumber(
                isValidPhoneNumber(value, selectedCountry as CountryCode)
              );
            }}
            defaultCountry={selectedCountry as CountryCode}
            error={validateNumber}
            helperText="Enter Country Input"
            label="Phone Number"
            initialValueFormat="national"
            onCountryChange={(country) => {
              onCountryChange(en?.[country]);
              setSelectedCountry(country);
            }}
            countrySelectProps={{
              style: {
                backgroundColor: "gray",
              },
            }}
          />
        </FormControl>
        {validateNumber &&
          (validateNumber ? (
            <Error>{validateNumber}</Error>
          ) : (
            <HelperText>{helperText || ""}</HelperText>
          ))}
      </Container>
    </>
  );
};

export default PhoneNumberInput;
