import React from "react";
import { Avatar, Container, ContentBody, ContentFooter, ViewReqRes, TitleCard, DescriptionCard } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../components/Header/Header";
import { Button } from "../../../components/Button/Button";
import { Bandeira, Chip } from "../AddCard/styles";
import CardPNG from '../../../assets/addcard.png';
import ChipPNG from '../../../assets/chipcard.png';
import BandeiraPNG from '../../../assets/visa.png'

const DetailsCard = () => {

    return (

        <SafeAreaView >
            <Container>

                <Header
                    appName="Detalhes do Cartão"
                    iconLeft
                />


                <ContentBody>

                    <Avatar source={CardPNG}>
                        <Chip source={ChipPNG} />
                        <Bandeira source={BandeiraPNG} />
                    </Avatar>
                    <ViewReqRes>
                        <TitleCard>Nome</TitleCard>
                        <DescriptionCard>@dev_vcm</DescriptionCard>
                    </ViewReqRes>
                    <ViewReqRes>
                        <TitleCard>Banco</TitleCard>
                        <DescriptionCard>Wallet</DescriptionCard>
                    </ViewReqRes>
                    <ViewReqRes>
                        <TitleCard>Conta</TitleCard>
                        <DescriptionCard>XXXXX-X</DescriptionCard>
                    </ViewReqRes>
                    <ViewReqRes>
                        <TitleCard>Status</TitleCard>
                        <DescriptionCard>Ativo</DescriptionCard>
                    </ViewReqRes>
                    <ViewReqRes>
                        <TitleCard>Validade</TitleCard>
                        <DescriptionCard>XX/XX</DescriptionCard>
                    </ViewReqRes>

                </ContentBody>

                <ContentFooter>
                    <Button
                        TitleButton="Deletar Cartão"
                        variant="transparent"
                        onPress={() => { }}
                    />
                </ContentFooter>

            </Container>
        </SafeAreaView>
    )
}

export { DetailsCard }
