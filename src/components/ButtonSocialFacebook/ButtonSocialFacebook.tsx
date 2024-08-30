import React from 'react';
import { Button, IconFacebook, Title } from './styles';

const ButtonSocialFacebook: React.FC = () => {
    return (
        <Button>
            <IconFacebook name="facebook" />
            <Title>Facebook</Title>
        </Button>
    );
};

export { ButtonSocialFacebook };