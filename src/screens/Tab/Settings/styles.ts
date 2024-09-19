import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    padding: ${RFValue(20)}px;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    border-radius: 8px;
`;

export const ContentBody = styled.View`
    margin-bottom: ${RFValue(20)}px;
    align-items: center;
    flex: 1;
`;

export const ContentFooter = styled.View`
    height: ${RFValue(100)}px;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
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
    background-color: #9038FF;
    padding: ${RFValue(10)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(10)}px;
    
`;

export const TitleCard = styled.Text`
    font-size: ${RFValue(14)}px;
    color: #000000;
    text-align: center;
    font-family: Poppins_300Light;
`;
