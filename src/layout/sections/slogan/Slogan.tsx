import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledButton} from "../../../components/Button";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <SectionTitle>I am Aviable for Freelance</SectionTitle>
      <StyledButton>Hire me</StyledButton>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
min-height: 30vh;
  background-color: greenyellow;
`
