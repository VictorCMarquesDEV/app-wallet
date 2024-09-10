import React from "react";
import { Container, ContentBody, ContentHeader, ContentFooter } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";


const Carteira = () => {

    const navigation = useNavigation();

    const handleGoLogin = () => {
        navigation.navigate('Login');
    }

    return (

        <SafeAreaView >
            <Container>

                <ContentHeader>

                </ContentHeader>

                <ContentBody>

                </ContentBody>

                <ContentFooter>

                </ContentFooter>

            </Container>
        </SafeAreaView>
    )
}

export { Carteira }
