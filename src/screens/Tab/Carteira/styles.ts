import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    padding: ${RFValue(20)}px;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: ${RFValue(10)}px;
`;

export const ContentCard = styled.View`
    width: 100%;
    height: ${RFValue(160)}px;
    background-color: #9038FF;
    align-items: center;
    padding-left: ${RFValue(30)}px;
    padding-right: ${RFValue(40)}px;
    justify-content: space-between;
    border-radius:${RFValue(50)}px;
    flex-direction: row;
`;

export const ContentBody = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const ContentIcon = styled.TouchableOpacity`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: ${RFValue(100)}px;
    gap: ${RFValue(5)}px;
`;

export const ViewIcon = styled.View`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    background-color: #FFFFFF;
    padding: ${RFValue(10)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(10)}px;
    
`;

export const ViewBalance = styled.View`
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius:${RFValue(30)}px;
`;


export const ContentFooter = styled.View`
    width: 100%;
    height: max-content;
    align-items: center;
    justify-content: center;
`;

export const TitleCard = styled.Text`
    font-size: ${RFValue(16)}px;
    color: #FFFFFF;
    text-align: center;
    font-family: Poppins_500Medium;
`;

export const TitleFlat = styled.Text`
    font-size: ${RFValue(16)}px;
    color: #000000;
    text-align: center;
    margin-bottom: -10px;
    font-family: Poppins_500Medium;
`;

export const DescriptionCard = styled.Text`
    font-size: ${RFValue(14)}px;
    color: #FFFFFF;
    font-family: Poppins_300Light;
`;

export const DescriptionButton = styled.Text`
    font-size: ${RFValue(10)}px;
    color: #000000;
    font-family: Poppins_300Light;
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

