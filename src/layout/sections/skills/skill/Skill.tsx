import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

export const Skill = () => {
  return (
    <StyledSkill>
      <Icon iconId={"code"}/>
      <SkillTitle>html5</SkillTitle>
      <SkillText>Lorem
      </SkillText>
    </StyledSkill>
);
};

const StyledSkill = styled.div`

`
const SkillTitle = styled.h3`

`

const SkillText = styled.p`
`
