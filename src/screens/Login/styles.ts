import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    padding: ${RFValue(20)}px;
`;

export const ContentHeader = styled.View`
    align-items: center;
    justify-content: center;
    padding: ${RFValue(20)}px;
`;

export const ContentBody = styled.View`
    gap: 10px;
`;

export const ContentFooter = styled.View``;

export const ViewButton = styled.View`
    flex-direction: row;
    gap: ${RFValue(10)}px;
`;

export const Title = styled.Text`
    margin-top: ${RFValue(40)}px;
    font-size: ${RFValue(24)}px;
    text-align: center;
    font-family: Poppins_500Medium;
`;

export const Description = styled.Text`
    margin-top: ${RFValue(60)}px;
    font-size: ${RFValue(12)}px;
    font-family: Poppins_300Light;
    margin-bottom: ${RFValue(10)}px;
`;
