import React from "react";
import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton,
} from "./styles";
import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonSocialFacebook } from "../../components/ButtonSocialFacebook/ButtonSocialFacebook";
import { Input } from "../../components/Input/Input";

const Login: React.FC = () => {
    return (
        <SafeAreaView>
            <Container>

                <ContentHeader>
                    <Title>Seja bem-vindo(a){"\n"}ao Wallet App!</Title>
                    <Description>Entrar com</Description>
                    <ViewButton>
                        <ButtonSocialGoogle />
                        <ButtonSocialFacebook />
                    </ViewButton>
                </ContentHeader>


                <ContentBody>
                    <Input name="email" iconName="mail-outline" placeholder="Seu e-mail"/>
                </ContentBody>


                <ContentFooter>

                </ContentFooter>

            </Container>
        </SafeAreaView>
    )
};

export { Login };