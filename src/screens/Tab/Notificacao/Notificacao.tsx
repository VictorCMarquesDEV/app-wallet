import React from "react";
import {
    Container,
    ContentBody,
    Top,
    Body,
    TopTitle,
    BodyTitle,
} from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../components/Header/Header";
import { FlatList } from "react-native";
import { notifications } from "../../../utils/notifications";
import { new_notifications } from "../../../utils/new_notifications";
import { useTheme } from "styled-components";
import { Notifications } from "../../../components/Notifications/Notifications";


const Notificacao = () => {

    const theme = useTheme();

    return (

        <SafeAreaView >
            <Container>

                <Header
                    appName="Notificações"
                />

                <ContentBody>
                    <Top>
                        <TopTitle>Novas</TopTitle>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={new_notifications}
                            renderItem={({ item }) => (
                                <Notifications
                                    data={{
                                        datetime: item.datetime,
                                        title: item.title,
                                        entry: item.entry,
                                        ativo: item.ativo,
                                        type: item.type,
                                    }}
                                />
                            )}
                            contentContainerStyle={{ gap: 5 }}
                        />
                    </Top>
                    <Body>
                        <BodyTitle>Recentes</BodyTitle>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={notifications}
                            renderItem={({ item }) => (
                                <Notifications
                                    data={{
                                        datetime: item.datetime,
                                        title: item.title,
                                        entry: item.entry,
                                        ativo: item.ativo,
                                        type: item.type,
                                    }}
                                />
                            )}
                            contentContainerStyle={{ gap: 5 }}
                        />
                    </Body>
                </ContentBody>

            </Container>
        </SafeAreaView>
    )
}

export { Notificacao }
