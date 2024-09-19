import React from "react";
import { Container, ContentBody, ContentFooter } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../../components/Header/Header";


const Settings = () => {

    const navigation = useNavigation();

    const handleGoLogin = () => {
        navigation.navigate('Login');
    }

    return (

        <SafeAreaView >
            <Container>

                <Header 
                    appName="Configurações"
                />

                <ContentBody>

                </ContentBody>

                <ContentFooter>

                </ContentFooter>

            </Container>
        </SafeAreaView>
    )
}

export { Settings }
