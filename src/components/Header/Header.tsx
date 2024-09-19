import React from "react";
import { Container, ContentHeader, Avatar, Title, Description } from "./styles";

interface HeaderProps {
    appName: string;
    textLeft?: boolean;
    nameTextLeft?: string;
    iconRight?: boolean;
}

const Header = ({ appName, textLeft, nameTextLeft, iconRight }: HeaderProps) => {
    return (
        <Container>
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
