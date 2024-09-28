import React from "react";
import { Avatar, Container, ContentBody, ContentFooter, ContentIcon, TitleCard, ViewIcon, Name, ContentInfo } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../components/Header/Header";
import { SettingsLits } from "../../../components/SettingsList";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";


const Profile = () => {

    return (

        <SafeAreaView >
            <Container>

                <Header
                    appName="Perfil"
                    iconLeft
                />

                <ContentBody>
                    <Avatar
                        source={{ uri: 'https://avatars.githubusercontent.com/u/113631460' }}
                    />
                    <ContentInfo>
                        <Name>@dev_vcm</Name>
                        <TouchableOpacity>
                            <MaterialIcons name="mode-edit" size={20} color="black" />
                        </TouchableOpacity>
                    </ContentInfo>
                    <SettingsLits
                        LeftIcon
                        NameIconLeft="person"
                        title="Contas Conectadas"
                        RightIcon
                        NameIconRight="arrow-forward"
                    />
                    <SettingsLits
                        LeftIcon
                        NameIconLeft="lock-closed"
                        title="Privacidade e Segurança"
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
                            <MaterialIcons name="delete" size={30} color="white" />
                        </ViewIcon>
                        <TitleCard>Apagar Conta</TitleCard>
                    </ContentIcon>
                </ContentFooter>

            </Container>
        </SafeAreaView>
    )
}

export { Profile }
