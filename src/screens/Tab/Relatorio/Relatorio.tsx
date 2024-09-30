import React from "react";
import {
    Container,
    ContentBody,
    ContentFooter,
    BalanceImg,
    ContentFlatTop,
    TitleFlat,
    Link,
    ContentFlat,
    ContentFlatBottom,
    ViewIconFlat,
    DetailsTransaction,
    DescriptionButton,
    AmountValue,
    ViewContent,
    TitleAmount,
    ValueAmount
} from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../components/Header/Header";
import BalancePNG from '../../../assets/estatistica.png';
import { transactionsShort } from "../../../utils/transactionsShort";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const Relatorio = () => {

    const navigation = useNavigation();

    function handleGoTransactions() {
        navigation.navigate('Transactions' as never)
    }

    return (

        <SafeAreaView >
            <Container>

                <Header
                    appName="Relatórios"
                />

                <ContentBody>

                    <BalanceImg source={BalancePNG} resizeMode="contain">
                        <AmountValue>R$ 500</AmountValue>
                    </BalanceImg>

                    <ViewContent>
                        <TitleAmount>Valor Total</TitleAmount>
                        <ValueAmount>R$ 10.000,00</ValueAmount>
                    </ViewContent>

                </ContentBody>

                <ContentFooter>
                    <ContentFlatTop>
                        <TitleFlat>Últimas Transações</TitleFlat>
                        <TouchableOpacity onPress={handleGoTransactions}>
                            <Link>Ver todas</Link>
                        </TouchableOpacity>
                    </ContentFlatTop>
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
                </ContentFooter>

            </Container>
        </SafeAreaView>
    )
}

export { Relatorio }
