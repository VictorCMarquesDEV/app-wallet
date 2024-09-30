import React from "react";
import {
    Container,
    ContentBody,
    Top,
    Body,
    TopTitle,
    BodyTitle,
    ContentFlat,
    ContentFlatBottom,
    ViewIconFlat,
    DetailsTransaction,
    TitleFlat,
    DescriptionButton,
} from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../../components/Header/Header";
import { FlatList } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { transactions } from "../../../utils/transactions";
import { transactionsShort } from "../../../utils/transactionsShort";


const Notificacao = () => {

    const navigation = useNavigation();

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
                            data={transactionsShort}
                            renderItem={({ item }) => (
                                <ContentFlat>
                                    <ContentFlatBottom>
                                        <ViewIconFlat>
                                            <Fontisto name={item.icon} size={30} color="black" />
                                        </ViewIconFlat>
                                        <DetailsTransaction>
                                            <TitleFlat>{item.title}</TitleFlat>
                                            <DescriptionButton>{item.subtitle}</DescriptionButton>
                                        </DetailsTransaction>
                                        <DescriptionButton>R$ {item.price}</DescriptionButton>
                                    </ContentFlatBottom>
                                </ContentFlat>
                            )}
                            contentContainerStyle={{ gap: 5 }}
                        />
                    </Top>
                    <Body>
                        <BodyTitle>Recentes</BodyTitle>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={transactions}
                            renderItem={({ item }) => (
                                <ContentFlat>
                                    <ContentFlatBottom>
                                        <ViewIconFlat>
                                            <Fontisto name={item.icon} size={30} color="black" />
                                        </ViewIconFlat>
                                        <DetailsTransaction>
                                            <TitleFlat>{item.title}</TitleFlat>
                                            <DescriptionButton>{item.subtitle}</DescriptionButton>
                                        </DetailsTransaction>
                                        <DescriptionButton>R$ {item.price}</DescriptionButton>
                                    </ContentFlatBottom>
                                </ContentFlat>
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
