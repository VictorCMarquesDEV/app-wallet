import React from "react";
import { Container, ContentBody, ContentHeader, Title, Description, ContentFooter, ButtonLogin, TitleButtonLogin, TitleButtonLoginLink } from "./styles";
import { SimpleInput } from "../../../components/SimpleInput/SimpleInput";
import { Button } from "../../../components/Button/Button";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";


const Cadastro = () => {

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
                        <Description>Cadastro</Description>
                    </ContentHeader>

                    <ContentBody>
                        <SimpleInput
                            LeftIcon NameIconLeft={"person-outline"} SizeIconLeft={30} ColorIconLeft="#4F4F4F"
                            placeholder="Nome" placeholderTextColor={"#4F4F4F"} autoCorrect={false}
                            keyboardType="default" />
                        <SimpleInput
                            LeftIcon NameIconLeft={"person-outline"} SizeIconLeft={30} ColorIconLeft="#4F4F4F"
                            placeholder="Sobrenome" placeholderTextColor={"#4F4F4F"} autoCorrect={false}
                            keyboardType="default" />
                        <SimpleInput
                            LeftIcon NameIconLeft={"mail-outline"} SizeIconLeft={30} ColorIconLeft="#4F4F4F"
                            placeholder="E-mail" placeholderTextColor={"#4F4F4F"} autoCapitalize="none"
                            autoCorrect={false} keyboardType="email-address" />
                        <SimpleInput
                            LeftIcon NameIconLeft={"lock-closed-outline"} SizeIconLeft={30} ColorIconLeft="#4F4F4F"
                            RightIcon NameIconRight={"eye-outline"} SizeIconRight={30} ColorIconRight="#4F4F4F"
                            placeholder="Senha" placeholderTextColor={"#4F4F4F"} secureTextEntry
                            autoCorrect={false} keyboardType="default" autoCapitalize="none" />
                        <SimpleInput
                            LeftIcon NameIconLeft={"lock-closed-outline"} SizeIconLeft={30} ColorIconLeft="#4F4F4F"
                            RightIcon NameIconRight={"eye-outline"} SizeIconRight={30} ColorIconRight="#4F4F4F"
                            placeholder="Confirmar Senha" placeholderTextColor={"#4F4F4F"} secureTextEntry
                            autoCorrect={false} keyboardType="default" autoCapitalize="none" />
                        <Button
                            TitleButton="CADASTRAR"
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

export { Cadastro }
