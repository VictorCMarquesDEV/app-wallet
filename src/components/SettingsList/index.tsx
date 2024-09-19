import React from 'react';
import { Container, ContainerExt, Title, ViewIcon } from './styles';
import { Ionicons } from '@expo/vector-icons';

interface SettingsListProps {
    RightIcon?: boolean;
    LeftIcon?: boolean;
    NameIconLeft?: string;
    NameIconRight?: string;
    title: string;
    onPress?: () => void;
}

const SettingsLits: React.FC<SettingsListProps> = ({
    LeftIcon, NameIconLeft, RightIcon, NameIconRight, title, onPress
}) => {

    return (
        <ContainerExt>
            <Container onPress={onPress}>
                {LeftIcon && (
                    <ViewIcon>
                        <Ionicons
                            name={NameIconLeft}
                            color={"#000000"}
                            size={30}
                        />
                    </ViewIcon>
                )}

                <Title>{title}</Title>

                {RightIcon && (
                    <ViewIcon>
                        <Ionicons
                            name={NameIconRight}
                            color={"#000000"}
                            size={15}
                        />
                    </ViewIcon>
                )}
            </Container>
        </ContainerExt>
    );
};

export { SettingsLits };
