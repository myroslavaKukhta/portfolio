import React from 'react';
import styled from "styled-components";
import photo from './../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain >
      <FlexWrapper align={"center"} justify={"space-around"}>
        <div>
          <Congrats>Hi There</Congrats>
          <Name>I am Myroslava Kukhta</Name>
          <MainTitle>A Web Developer</MainTitle>
        </div>

        <StyledPhoto src={photo} alt=""/>
      </FlexWrapper>

    </StyledMain >
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: antiquewhite;
`

const StyledPhoto = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MainTitle = styled.h1`
  color: red;
`

const Name = styled.h2`
  color: red;
`

const Congrats = styled.span`
  color: red;
`

