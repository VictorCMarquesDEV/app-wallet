import React from "react";
import { Avatar, Container, ContentBody, ContentFooter, DescriptionCard, TitleCard, Chip, Bandeira } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../components/Header/Header";
import { TouchableOpacity } from "react-native";
import CardPNG from '../../../assets/addcard.png';
import ChipPNG from '../../../assets/chipcard.png';
import BandeiraPNG from '../../../assets/visa.png'

const AddCartao = () => {

    return (

        <SafeAreaView >
            <Container>

                <Header
                    appName="Cartões"
                    iconLeft
                />

                <ContentBody>

                    <TitleCard>Adicionar Cartão</TitleCard>
                    <Avatar source={CardPNG}>
                        <Chip source={ChipPNG} />
                        <Bandeira source={BandeiraPNG} />
                    </Avatar>
                    
                </ContentBody>

                <ContentFooter>
                    <TouchableOpacity>
                        <DescriptionCard>Adicionar Cartão</DescriptionCard>
                        <DescriptionCard>para uma vida mais fácil</DescriptionCard>
                    </TouchableOpacity>
                </ContentFooter>

            </Container>
        </SafeAreaView>
    )
}

export { AddCartao }
