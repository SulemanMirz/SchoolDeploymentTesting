import React from "react";
import { FAQCard } from "./components/FAQCard";
import {
  FAQContainer,
  FaqDescription,
} from "./components/faq.styled";

const FAQ = () => {
  return (
    <FAQContainer>
      <FaqDescription>Frequently Asked Questions and Answers</FaqDescription>
      {[...new Array(5)].map(() => {
        return <FAQCard />;
      })}
    </FAQContainer>
  );
};

export default FAQ;
