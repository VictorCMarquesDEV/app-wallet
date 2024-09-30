import React from "react";
import { Container, ContentBody, ContentFooter } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../../components/Header/Header";


const Notificacao = () => {

    const navigation = useNavigation();

    return (

        <SafeAreaView >
            <Container>

                <Header
                    appName="Notificações"
                />

                <ContentBody>

                </ContentBody>

                <ContentFooter>

                </ContentFooter>

            </Container>
        </SafeAreaView>
    )
}

export { Notificacao }
