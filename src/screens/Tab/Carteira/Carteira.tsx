import React from "react";
import {
    Container,
    ContentBody,
    ContentCard,
    ContentFooter,
    ContentIcon,
    DescriptionCard,
    DescriptionButton,
    TitleCard,
    Link,
    ViewBalance,
    ViewIcon,
    ContentFlat,
    ContentFlatTop,
    ContentFlatBottom,
    DetailsTransaction,
    TitleFlat,
    ViewIconFlat,
} from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../components/Header/Header";
import { FontAwesome6, Fontisto, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { transactions } from "../../../utils/transactions";
import { FlatList, TouchableOpacity } from "react-native";

const Carteira = () => {

    return (

        <SafeAreaView >
            <Container>

                <Header 
                    appName="Wallet"
                    textLeft
                    nameTextLeft="Ativo"
                    iconRight
                />

                <ContentCard>
                    <ViewBalance>
                        <DescriptionCard>Valor total</DescriptionCard>
                        <TitleCard>R$ 1.000,00</TitleCard>
                    </ViewBalance>
                    <ViewBalance>
                        <DescriptionCard>Cartão</DescriptionCard>
                        <TitleCard>Wallet</TitleCard>
                    </ViewBalance>
                </ContentCard>

                <ContentBody>
                    <ContentIcon>
                        <ViewIcon>
                            <FontAwesome6 name="money-bill-transfer" size={28} color="black" />
                        </ViewIcon>
                        <DescriptionButton>Transf.</DescriptionButton>
                    </ContentIcon>
                    <ContentIcon>
                        <ViewIcon>
                            <MaterialIcons name="payment" size={30} color="black" />
                        </ViewIcon>
                        <DescriptionButton>Pagam.</DescriptionButton>
                    </ContentIcon>
                    <ContentIcon>
                        <ViewIcon>
                            <MaterialIcons name="pix" size={30} color="black" />
                        </ViewIcon>
                        <DescriptionButton>Pix</DescriptionButton>
                    </ContentIcon>
                    <ContentIcon>
                        <ViewIcon>
                            <Ionicons name="add-circle-outline" size={30} color="black" />
                        </ViewIcon>
                        <DescriptionButton>Mais</DescriptionButton>
                    </ContentIcon>
                </ContentBody>

                <ContentFooter>
                    <ContentFlatTop>
                        <TitleFlat>Últimas Transações</TitleFlat>
                        <TouchableOpacity>
                            <Link>Ver todas</Link>
                        </TouchableOpacity>
                    </ContentFlatTop>
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
                        initialNumToRender={4}
                    />
                </ContentFooter>

            </Container>
        </SafeAreaView>
    )
}

export { Carteira }
