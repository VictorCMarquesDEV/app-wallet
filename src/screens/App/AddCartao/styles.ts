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
    width: 100%;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const ContentFooter = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
`;

export const TitleCard = styled.Text`
    font-size: ${RFValue(18)}px;
    color: #000000;
    text-align: center;
    font-family: Poppins_300Light;
`;

export const DescriptionCard = styled.Text`
    font-size: ${RFValue(14)}px;
    color: #000000;
    text-align: center;
    font-family: Poppins_300Light;
`;

export const Avatar = styled.ImageBackground`
    width: ${RFValue(240)}px;
    height: ${RFValue(340)}px;
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(50)}px;
    background-color: #9038FF;
    margin: 30px 0;
`;

export const Chip = styled.Image`
    position: absolute;
    top: 50;
    left: 50;
`;

export const Bandeira = styled.Image`
    position: absolute;
    bottom: 50;
    right: 50;
`;
