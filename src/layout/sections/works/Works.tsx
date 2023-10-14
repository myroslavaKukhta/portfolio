import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/proj_1.png'
import Timer from './../../../assets/images/proj_2.png'


const worksItems = ["All", "Landing Page", "React","SPA"]
export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>
        My works
      </SectionTitle>
      <Menu menuItems={worksItems}/>

      <FlexWrapper justify={"space-around"}>
<Work title={"Social Network"} text={"Lorem ipsum dolor"} src={socialImg}/>
        <Work title={"Timer"} text={"lisks ipsum dolor amet"} src={Timer}/>
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: hotpink;
`

