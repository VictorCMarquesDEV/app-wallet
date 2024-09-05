import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled.View`
    width: ${RFValue(120)}px;
    height: ${RFValue(60)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: ${RFValue(16)}px;
    border-radius: ${RFValue(5)}px;
    background-color: #E0E0E0;
`;

export const IconGoogle = styled.Image`
    width: ${RFValue(25)}px;
    height: ${RFValue(25)}px;
`;


export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: Poppins_300Light;
    margin-left: ${RFValue(10)}px;
`;
