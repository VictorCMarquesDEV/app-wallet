import React, { useState } from 'react';
import { Container, InputText } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { TextInputProps, TouchableOpacity } from 'react-native';

interface InputProps {
    RightIcon?: boolean;
    LeftIcon?: boolean;
    NameIconLeft?: string;
    NameIconRight?: string;
    SizeIconLeft?: number;
    SizeIconRight?: number;
    ColorIconLeft?: string;
    ColorIconRight?: string;
    secureTextEntry?: boolean;
}

const SimpleInput: React.FC<InputProps & TextInputProps> = ({
    LeftIcon, NameIconLeft, RightIcon, NameIconRight, SizeIconLeft, SizeIconRight, ColorIconLeft, ColorIconRight, secureTextEntry, ...rest
}) => {

    const theme = useTheme()

    const [secury, setSecury] = useState(secureTextEntry);

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
                secureTextEntry={secury}
                underlineColorAndroid='transparent'
            />

            {RightIcon && (
                <TouchableOpacity onPress={() => setSecury(!secury)}>
                    <Ionicons
                        name={secury ? 'eye' : 'eye-off'}
                        size={SizeIconRight}
                        color={ColorIconRight || "#000000"}
                    />
                </TouchableOpacity>
            )}
        </Container>
    );
};

export { SimpleInput };
