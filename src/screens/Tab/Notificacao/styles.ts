import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    padding: ${RFValue(20)}px;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
`;

export const ContentBody = styled.View`
    width: 100%;
    flex: 1;
    gap: 10px;
`;

export const Top = styled.View`
    width: 100%;
    gap: 10px;
`;

export const Body = styled.View`
    width: 100%;
    flex: 1;
    gap: 10px;
`;

export const TopTitle = styled.Text`
    font-size: ${RFValue(14)}px;
    color: #000000;
    text-align: center;
    font-family: Poppins_300Light;
`;

export const BodyTitle = styled.Text`
    font-size: ${RFValue(14)}px;
    color: #000000;
    text-align: center;
    font-family: Poppins_300Light;
`;
