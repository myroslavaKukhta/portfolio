import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledButton} from "../../../components/Button";

export const Contact = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <StyledField placeholder={"name"}/>
        <StyledField placeholder={"subject"}/>
        <StyledField as={"textarea"} placeholder={"message"}/>
        <StyledButton type={"submit"}>Send message</StyledButton>
      </StyledForm>
    </StyledContacts>
  );
};


const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: cyan;
`

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`


const StyledField = styled.input`
  
`

