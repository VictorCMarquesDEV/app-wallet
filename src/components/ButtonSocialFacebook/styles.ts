import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Fontisto from '@expo/vector-icons/Fontisto';

export const Button = styled.View`
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: ${RFValue(16)}px;
    border-radius: ${RFValue(5)}px;
    background-color: #4368C7;
`;

export const IconFacebook = styled(Fontisto)`
    font-size: ${RFValue(25)}px;
    color: #ffffff;
`;


export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: Poppins_300Light;
    color: #ffffff;
    margin-left: ${RFValue(10)}px;
`;