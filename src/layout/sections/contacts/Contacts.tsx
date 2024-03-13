import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledButton} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from './Contacts_Styles';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs.sendForm('service_bvbi36q', 'template_guvgisw', form.current, 'mPNvi-N3nVtRCMkib')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };
        return (
            <S.Contacts id={"contact"}>
                <Container>
                    <SectionTitle>Contact</SectionTitle>
                    <S.Form ref={form} onSubmit={sendEmail}>
                        <S.Field required placeholder={"name"} name={'user_name'}/>
                        <S.Field required placeholder={"email"} name={'email'}/>
                        <S.Field required placeholder={"subject"} name={'subject'}/>
                        <S.Field required as={"textarea"} placeholder={"message"} name={'message'}/>
                        <StyledButton type={"submit"}>Send message</StyledButton>
                    </S.Form>
                </Container>
            </S.Contacts>
        );
}
