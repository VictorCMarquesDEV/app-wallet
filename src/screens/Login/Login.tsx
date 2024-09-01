import React from "react";
import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton,
} from "./styles";
import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonSocialFacebook } from "../../components/ButtonSocialFacebook/ButtonSocialFacebook";
import { TouchableOpacity } from "react-native";
import { SimpleInput } from "../../components/SimpleInput/SimpleInput";
import { Button } from "../../components/Button/Button";

const Login: React.FC = () => {
    return (
        <SafeAreaView>
            <Container>
                <ContentHeader>
                    <Title>Seja bem-vindo(a){"\n"}ao Wallet App!</Title>
                    <Description>Entrar com</Description>
                    <ViewButton>
                        <TouchableOpacity>
                            <ButtonSocialGoogle />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ButtonSocialFacebook />
                        </TouchableOpacity>
                    </ViewButton>
                </ContentHeader>

                <ContentBody>
                    <SimpleInput
                        LeftIcon NameIconLeft={"mail-outline"} SizeIconLeft={30} ColorIconLeft="#4F4F4F"
                        placeholder="E-mail" placeholderTextColor={"#4F4F4F"} />
                    <SimpleInput
                        LeftIcon NameIconLeft={"lock-closed-outline"} SizeIconLeft={30} ColorIconLeft="#4F4F4F"
                        RightIcon NameIconRight={"eye-outline"} SizeIconRight={20} ColorIconRight="#4F4F4F"
                        placeholder="Senha" placeholderTextColor={"#4F4F4F"} />
                    <TouchableOpacity>
                        <Button TitleButton="ENTRAR" onPress={() => {}}/>
                    </TouchableOpacity>
                </ContentBody>

                <ContentFooter>
                </ContentFooter>
            </Container>
        </SafeAreaView>
    )
};

export { Login };