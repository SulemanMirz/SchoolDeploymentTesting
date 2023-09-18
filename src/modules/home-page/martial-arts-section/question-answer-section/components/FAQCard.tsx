import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import {
  ExpandIcon,
  FAQCardContainer,
  QuestionDetail,
  QuestionNumber,
} from "./faq.styled";

export const FAQCard = () => {
  return (
    <FAQCardContainer>
      <Accordion
        sx={{
          backgroundColor: "#3C3C3C",
          boxShadow: "none !important",
          borderBottom: "1px solid black",
          borderRadius: "4px !important",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <QuestionNumber>Question 1</QuestionNumber>
        </AccordionSummary>
        <AccordionDetails>
          <QuestionDetail>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            eleifend dolor sed purus magna ultrices ut. Sapien est lectus mattis
            <br />
            vel elit, consequat, non. Sit augue sit felis amet tincidunt.
          </QuestionDetail>
        </AccordionDetails>
      </Accordion>
    </FAQCardContainer>
  );
};
