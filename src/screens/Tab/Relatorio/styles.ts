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
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 30px;
`;

export const ContentFooter = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const BalanceImg = styled.ImageBackground`
    width: 100%;
    height: ${RFValue(215)}px;
`;

export const ContentFlat = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const ContentFlatTop = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${RFValue(10)}px;
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

export const Link = styled.Text`
    font-size: ${RFValue(12)}px;
    color: #9038FF;
    font-family: Poppins_300Light;
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

export const AmountValue = styled.Text`
    font-size: ${RFValue(14)}px;
    color: #FFFFFF;
    text-align: center;
    position: absolute;
    top: 70px;
    left: 137px;
    font-family: Poppins_500Medium;
`;

export const DescriptionButton = styled.Text`
    font-size: ${RFValue(10)}px;
    color: #000000;
    font-family: Poppins_300Light;
`;


export const ViewContent = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const TitleAmount = styled.Text`
    font-size: ${RFValue(16)}px;
    color: #000000;
    text-align: center;
    font-family: Poppins_500Medium;
    margin-bottom: -10px;
`;

export const ValueAmount = styled.Text`
    font-size: ${RFValue(30)}px;
    color: #9038FF;
    text-align: center;
    font-family: Poppins_500Medium;
`;
