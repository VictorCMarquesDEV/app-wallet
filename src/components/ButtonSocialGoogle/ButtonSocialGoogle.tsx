import React from 'react';
import { Button, IconGoogle, Title } from './styles';
import PNGGoogle from '../../assets/google.png';

const ButtonSocialGoogle: React.FC = () => {
    return (
        <Button>
            <IconGoogle source={PNGGoogle} resizeMode="contain" />
            <Title>Google</Title>
        </Button>
    );
};

export { ButtonSocialGoogle };