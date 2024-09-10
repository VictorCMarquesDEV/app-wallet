import React from "react";
import { Container, ContentHeader, Avatar, Title, Description } from "./styles";

const Header: React.FC = () => {
    return (
        <Container>
            <ContentHeader>
                <Title>Wallet</Title>
                <Description>Ativo</Description>
            </ContentHeader>
            <Avatar
                source={{ uri: 'https://avatars.githubusercontent.com/u/113631460' }}
            />
        </Container >
    )
}

export { Header };
