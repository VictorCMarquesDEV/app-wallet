import React from 'react';
import { Container, TextButton, Content } from './styles';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { variants } from './Variant';
import { useTheme } from 'styled-components';

interface buttonProps {
    TitleButton: string;
    onPress: () => void;
    iconName?: keyof typeof AntDesign.glyphMap;
    isLoading?: boolean;
    disabled?: boolean;
    variant?: 'primary' | 'secundary' | 'black' | 'transparent';
    style?: TouchableOpacityProps["style"];
    colorText?: string
}

const Button: React.FC<buttonProps> = ({
    TitleButton, onPress = () => { }, isLoading, iconName, disabled, variant = 'primary', style, colorText
}) => {

    const theme = useTheme();
    const buttonVariant = variants[variant];
    const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled;

    return (
        <Container
            disabled={isLoading || disabled}
            onPress={onPress}
            style={[buttonStyle.button, style]}
        >
            {isLoading ? (
                <ActivityIndicator color={theme.COLORS.GRAY1} />
            ) : (
                <Content>
                    {iconName && (
                        < AntDesign
                            name={iconName}
                            size={20}
                            color={buttonStyle.icon.color}
                            style={{
                                marginRight: 15
                            }}
                        />
                    )}
                </Content>
            )}
            <TextButton 
                style={[buttonStyle.title, style]}
            >{TitleButton}</TextButton>
        </Container>
    );
};

export { Button };
