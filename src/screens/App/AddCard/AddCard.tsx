import React from "react";
import { Avatar, Container, ContentBody, ContentFooter, DescriptionCard, TitleCard, Chip, Bandeira } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../components/Header/Header";
import { Pressable, TouchableOpacity } from "react-native";
import CardPNG from '../../../assets/addcard.png';
import ChipPNG from '../../../assets/chipcard.png';
import BandeiraPNG from '../../../assets/visa.png';
import { useNavigation } from "@react-navigation/native";

const AddCard = () => {

    const navigation = useNavigation();
    
    function handleGoAddCard() {
        navigation.navigate('DetailsCard' as never)
    }

    return (

        <SafeAreaView >
            <Container>

                <Header
                    appName="Cartões"
                    iconLeft
                />


                <ContentBody>
                    
                    <Pressable onPress={handleGoAddCard}>
                        <TitleCard>Adicionar Cartão</TitleCard>
                        <Avatar source={CardPNG}>
                            <Chip source={ChipPNG} />
                            <Bandeira source={BandeiraPNG} />
                        </Avatar>
                    </Pressable>

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

export { AddCard }
