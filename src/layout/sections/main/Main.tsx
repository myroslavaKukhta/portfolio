import React from 'react';
import photo from './../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from "react-parallax-tilt";

export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.Congrats>Hi There</S.Congrats>
                        <S.Name>I am <span>Myroslava Kukhta</span></S.Name>
                        <S.MainTitle>
                            <p>A Frontend Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['A Frontend<br>Developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150,
                                }}
                            />
                        </S.MainTitle>
                    </div>

                    <Tilt>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt=""/>
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
