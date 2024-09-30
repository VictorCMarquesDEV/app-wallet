import React from "react";
import {
    Container,
    ContentBody,
    TitleFlat,
    ContentFlat,
    ContentFlatBottom,
    ViewIconFlat,
    DetailsTransaction,
    DescriptionButton,
} from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../components/Header/Header";
import { transactions } from "../../../utils/transactions";
import { FlatList } from "react-native";
import { Fontisto } from "@expo/vector-icons";


const Transactions = () => {

    return (

        <SafeAreaView >
            <Container>

                <Header
                    appName="Transações"
                    iconLeft
                />

                <ContentBody>
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
                </ContentBody>

            </Container>
        </SafeAreaView>
    )
}

export { Transactions }
