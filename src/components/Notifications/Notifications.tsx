import React, { useState } from 'react';
import { Container, ContainerTexts, Title, Description, ViewIcon, Ball } from './styles';
import { Fontisto } from '@expo/vector-icons';
import theme from '../../styles/theme';

interface SettingsListProps {
    data: {
        datetime: string
        title: string
        type: string
        entry: boolean
        ativo: boolean
    }
}

const Notifications: React.FC<SettingsListProps> = ({
    data
}) => {

    const [ative, setAtive] = useState<boolean>(data.ativo);
    const handleAtive = () => {
        setAtive(!ative)
    }

    return (
        <Container onPress={handleAtive}>
            {ative && (
                <Ball />
            )}
            <ContainerTexts>
                <Description>{data.datetime}</Description>
                <Title>{data.title}</Title>
                <Description>{data.type}</Description>
            </ContainerTexts>
            <ViewIcon>
                <Fontisto name={data.entry ? "angle-dobule-up" : "angle-dobule-down"} size={30} color={data.entry ? theme.COLORS.GREEN1 : theme.COLORS.RED} />
            </ViewIcon>
        </Container>
    );
};

export { Notifications };
