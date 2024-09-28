import React from "react";
import { Container, ContentHeader, Avatar, Title, Description, ViewIcon } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
    appName: string;
    textLeft?: boolean;
    nameTextLeft?: string;
    iconRight?: boolean;
    iconLeft?: boolean;
    onPress?: () => void;
}

const Header = ({ appName, textLeft, nameTextLeft, iconRight, iconLeft, onPress }: HeaderProps) => {

    const navigation = useNavigation();

    return (
        <Container>
            {iconLeft && (
                <ViewIcon onPress = {() => navigation.goBack()} >
                    <Ionicons
                        name={"arrow-back"}
                        color={"#000000"}
                        size={25}
                    />
                </ViewIcon>
            )
            }
            <ContentHeader>
                <Title>{appName}</Title>
                {textLeft && (
                    <Description>{nameTextLeft}</Description>
                )
                }
            </ContentHeader>
            {iconRight && (
                <Avatar
                    source={{ uri: 'https://avatars.githubusercontent.com/u/113631460' }}
                />
            )
            }
        </Container >
    )
}

export { Header };
