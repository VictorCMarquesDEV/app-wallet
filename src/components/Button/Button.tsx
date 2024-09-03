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
    variant?: 'primary' | 'secundary' | 'black';
    style?: TouchableOpacityProps["style"];
}

const Button: React.FC<buttonProps> = ({
    TitleButton, onPress = () => { }, isLoading, iconName, disabled, variant = 'primary', style
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

                            }}
                        />
                    )}
                </Content>
            )}
            <TextButton >{TitleButton}</TextButton>
        </Container>
    );
};

export { Button };
