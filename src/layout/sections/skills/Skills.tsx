import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>

        My Skills
      </SectionTitle>
      <FlexWrapper wrap={"wrap"} justify={"space-between"}>
        <Skill iconId={"code"}
               title={"html5"}
               description={"html bla-bla"}/>
        <Skill iconId={"css"}
               title={"css"}
               description={"css bla-bla"}/>
        <Skill iconId={"react"}
               title={"react"}
               description={"react cool"}/>
        <Skill iconId={"typeScript"}
               title={"type script"}
               description={"typescript cool"}/>
        <Skill iconId={"styledCompon"}
               title={"styled components"}
               description={"styled ipsum"}/>
        <Skill iconId={"design"}
               title={"web design"}
               description={"figma etc"}/>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
background-color: cornflowerblue;
  min-height: 100vh;
`
