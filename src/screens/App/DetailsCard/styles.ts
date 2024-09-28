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
`;

export const ViewReqRes = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    gap: ${RFValue(10)}px;
    justify-content: center;
`;

export const TitleCard = styled.Text`
    width: 50%;
    font-size: ${RFValue(14)}px;
    color: #000000;
    text-align: right;
    font-family: Poppins_300Light;
`;

export const DescriptionCard = styled.Text`
    width: 50%;
    font-size: ${RFValue(14)}px;
    color: #000000;
    text-align: left;
    font-family: Poppins_500Medium;
`;

export const Avatar = styled.ImageBackground`
    width: ${RFValue(240)}px;
    height: ${RFValue(340)}px;
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(50)}px;
    background-color: #9038FF;
    margin-bottom: ${RFValue(10)}px;
`;

export const Chip = styled.Image`
    position: absolute;
    width: 35px;
    height: 40px;
    top: 50px;
    left: 50px;
`;

export const Bandeira = styled.Image`
    position: absolute;
    width: 66px;
    height: 20px;
    bottom: 50px;
    right: 50px;
`;
