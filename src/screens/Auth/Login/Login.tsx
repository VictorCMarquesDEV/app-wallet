import React, { useState } from "react";
import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton,
    ButtonSignUp,
    TitleButtonSignUp,
    TitleButtonSignUpLink,
    ContentForgotPwd,
    ButtonForgotPwd,
    TitleForgotPwd
} from "./styles";
import { ButtonSocialGoogle } from "../../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonSocialFacebook } from "../../../components/ButtonSocialFacebook/ButtonSocialFacebook";
import { TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { SimpleInput } from "../../../components/SimpleInput/SimpleInput";
import { Button } from "../../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

const Login: React.FC = () => {

    const { COLORS } = useTheme();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const handleGoCadastro = () => {
        navigation.navigate('Cadastro');
    }

    return (
        <SafeAreaView >
            <KeyboardAvoidingView
                behavior="position"
                enabled
            >
                <Container>
                    <ContentHeader>
                        <Title>Seja bem-vindo(a){"\n"}ao Wallet App!</Title>
                        <Description>Entrar com</Description>
                        <ViewButton>
                            <TouchableOpacity>
                                <ButtonSocialGoogle />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <ButtonSocialFacebook />
                            </TouchableOpacity>
                        </ViewButton>
                    </ContentHeader>

                    <ContentBody>
                        <SimpleInput
                            LeftIcon NameIconLeft={"mail-outline"} SizeIconLeft={30} ColorIconLeft="#4F4F4F"
                            placeholder="E-mail" placeholderTextColor={"#4F4F4F"} autoCapitalize="none"
                            autoCorrect={false} keyboardType="email-address" />
                        <SimpleInput
                            LeftIcon NameIconLeft={"lock-closed-outline"} SizeIconLeft={30} ColorIconLeft="#4F4F4F"
                            RightIcon NameIconRight={"eye-outline"} SizeIconRight={30} ColorIconRight="#4F4F4F"
                            placeholder="Senha" placeholderTextColor={"#4F4F4F"} secureTextEntry
                            autoCorrect={false} keyboardType="default" autoCapitalize="none" />
                        <ContentForgotPwd>
                            <Button
                                TitleButton="Esqueceu a senha?"
                                onPress={() => { }}
                                variant='transparent'
                            />
                        </ContentForgotPwd>
                        <Button
                            TitleButton="ENTRAR"
                            onPress={() => { }}
                            variant='primary'
                        />
                    </ContentBody>

                    <ContentFooter>
                        <ButtonSignUp onPress={handleGoCadastro}>
                            <TitleButtonSignUp>Não possui cadastro?</TitleButtonSignUp>
                            <TitleButtonSignUpLink>Cadastre-se</TitleButtonSignUpLink>
                        </ButtonSignUp>
                    </ContentFooter>
                </Container>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
};

export { Login };
