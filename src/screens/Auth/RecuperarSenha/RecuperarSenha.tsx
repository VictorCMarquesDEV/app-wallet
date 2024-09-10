import React from "react";
import { Container, ContentBody, ContentHeader, Title, Description, ContentFooter, ButtonLogin, TitleButtonLogin, TitleButtonLoginLink } from "./styles";
import { SimpleInput } from "../../../components/SimpleInput/SimpleInput";
import { Button } from "../../../components/Button/Button";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";


const RecuperarSenha = () => {

    const navigation = useNavigation();

    const handleGoLogin = () => {
        navigation.navigate('Login');
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
                        <Description>Recuperar a Senha</Description>
                    </ContentHeader>

                    <ContentBody>
                        <SimpleInput
                            LeftIcon NameIconLeft={"mail-outline"} SizeIconLeft={30} ColorIconLeft="#4F4F4F"
                            placeholder="E-mail" placeholderTextColor={"#4F4F4F"} autoCapitalize="none"
                            autoCorrect={false} keyboardType="email-address" />
                        <Button
                            TitleButton="RECUPERAR"
                            onPress={() => { }}
                            variant='primary'
                        />
                    </ContentBody>

                    <ContentFooter>
                        <ButtonLogin onPress={handleGoLogin}>
                            <TitleButtonLogin>Já possui login?</TitleButtonLogin>
                            <TitleButtonLoginLink>Entre</TitleButtonLoginLink>
                        </ButtonLogin>
                    </ContentFooter>

                </Container>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export { RecuperarSenha }
