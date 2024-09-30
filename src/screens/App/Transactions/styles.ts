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
    align-items: center;
    justify-content: center;
`;

export const ContentFlat = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const ContentFlatBottom = styled.View`
    flex-direction: row;
    width: 100%;
    gap: ${RFValue(10)}px;
    align-items: center;
    justify-content: space-between;
`;

export const DetailsTransaction = styled.View`
    flex: 1;
    height: ${RFValue(50)}px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;


export const ViewIconFlat = styled.View`
    width: ${RFValue(30)}px;
    height: ${RFValue(30)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(10)}px;  
`;

export const TitleFlat = styled.Text`
    font-size: ${RFValue(16)}px;
    color: #000000;
    text-align: center;
    margin-bottom: -10px;
    font-family: Poppins_500Medium;
`;

export const DescriptionButton = styled.Text`
    font-size: ${RFValue(10)}px;
    color: #000000;
    font-family: Poppins_300Light;
`;

