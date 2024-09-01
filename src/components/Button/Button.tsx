import React from 'react';
import { Container, TextButton } from './styles';
import { Text } from 'react-native';

interface buttonProps {
    TitleButton: string;
    onPress: () => void;
}

const Button: React.FC<buttonProps> = ({ TitleButton, onPress = () => { } }) => {
    return (
        <Container onPress={onPress}>
            <TextButton >{TitleButton}</TextButton>
        </Container>
    );
};

export { Button };