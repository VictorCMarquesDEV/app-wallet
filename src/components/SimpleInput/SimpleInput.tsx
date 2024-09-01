import React from 'react';
import { Container, InputText } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

interface InputProps {
    RightIcon?: boolean;
    LeftIcon?: boolean;
    NameIconLeft?: string;
    NameIconRight?: string;
    SizeIconLeft?: number;
    SizeIconRight?: number;
    ColorIconLeft?: string;
    ColorIconRight?: string;
}

const SimpleInput: React.FC<InputProps & TextInputProps> = ({
    LeftIcon, NameIconLeft, RightIcon, NameIconRight, SizeIconLeft, SizeIconRight, ColorIconLeft, ColorIconRight, ...rest
}) => {

    const theme = useTheme()

    return (
        <Container>
            {LeftIcon && (
                <Ionicons
                    name={NameIconLeft}
                    size={SizeIconLeft}
                    color={ColorIconLeft || "#000000"}
                />
            )}

            <InputText
                {...rest}
            />

            {RightIcon && (
                <Ionicons
                    name={NameIconRight}
                    size={SizeIconRight}
                    color={ColorIconRight || "#000000"}
                />
            )}
        </Container>
    );
};

export { SimpleInput };