import React from "react";
import { Container, ContentBody, ContentFooter, ContentIcon, TitleCard, ViewIcon } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../components/Header/Header";
import { SettingsLits } from "../../../components/SettingsList";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";


const Settings = () => {

    const navigation = useNavigation();

    function handleGoProfile() {
        navigation.navigate('perfil' as never)
    }

    return (

        <SafeAreaView >
            <Container>

                <Header
                    appName="Configurações"
                />

                <ContentBody>
                    <SettingsLits
                        LeftIcon
                        NameIconLeft="person"
                        title="Perfil"
                        RightIcon
                        NameIconRight="arrow-forward"
                        onPress={handleGoProfile}
                    />
                    <SettingsLits
                        LeftIcon
                        NameIconLeft="notifications"
                        title="Notificações"
                        RightIcon
                        NameIconRight="arrow-forward"
                    />
                    <SettingsLits
                        LeftIcon
                        NameIconLeft="wallet-outline"
                        title="Sua Carteira"
                        RightIcon
                        NameIconRight="arrow-forward"
                    />
                    <SettingsLits
                        LeftIcon
                        NameIconLeft="key"
                        title="Configurações de Login"
                        RightIcon
                        NameIconRight="arrow-forward"
                    />
                    <SettingsLits
                        LeftIcon
                        NameIconLeft="call"
                        title="Fale Conosco"
                        RightIcon
                        NameIconRight="arrow-forward"
                    />
                </ContentBody>

                <ContentFooter>
                    <ContentIcon>
                        <ViewIcon>
                            <MaterialIcons name="logout" size={30} color="white" />
                        </ViewIcon>
                        <TitleCard>Sair</TitleCard>
                    </ContentIcon>
                </ContentFooter>

            </Container>
        </SafeAreaView>
    )
}

export { Settings }
