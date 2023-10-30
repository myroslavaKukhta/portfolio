import React from 'react';
import {Link} from "../../../../components/Link";
import {StyledButton} from "../../../../components/Button";
import { S } from '../Works_Styles';


type WorkPropsType = {
    title: string;
    text: string;
    src: string;
}
export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src}/>
                <StyledButton>View Project</StyledButton>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link active href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </S.Description>
        </S.Work>
    );
};
