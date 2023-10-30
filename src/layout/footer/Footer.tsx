import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles'

const socialItemData = [
    {
      iconId: "telegram",
    },
    {
      iconId: "fb",
    }
]
export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={"column"} align={"center"}>
      <S.Name>Myroslava</S.Name>
      <S.SocialList>
          {socialItemData.map((s, index)=>{
              return (<S.SocialItem key = {index}>
                  <S.SocialLink>
                      <Icon height={"30px"} width={"30px"} iconId={s.iconId}/>
                  </S.SocialLink>
              </S.SocialItem>
              )
          })}
      </S.SocialList>
      <S.Copyright>2023 Myroslava Kukhta, All rights reserved</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};

