import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} align={"center"}>
      <Name>Myroslava</Name>

      <SocialList>
        <SocialItem>
          <SociaLink>
            <Icon height={"31px"} width={"31px"}  iconId={"telegram"}/>
            </SociaLink>
        </SocialItem>

        <SocialItem>
          <SociaLink>
            <Icon height={"31px"} width={"31px"}  iconId={"fb"}/>
          </SociaLink>
        </SocialItem>
      </SocialList>
      <Copyright>2023 Myroslava Kukhta, All rights reserved</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: yellow;
  min-height: 20vh;
`

const Name = styled.span`
`

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
  
`

const SocialItem = styled.li`
`

const SociaLink = styled.a`
`

const Copyright = styled.small`
`
