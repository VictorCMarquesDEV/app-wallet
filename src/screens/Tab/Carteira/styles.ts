import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    padding: ${RFValue(20)}px;
    margin-top: ${RFValue(80)}px;
    height: 100%;
`;

export const ContentBody = styled.View`
    gap: 10px;
`;

export const ContentFooter = styled.View`
    align-items: center;
    justify-content: center;
    padding: 20px 0;
`;
