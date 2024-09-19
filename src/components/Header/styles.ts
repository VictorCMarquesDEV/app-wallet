import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(60)}px;
    justify-content: space-between;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${RFValue(20)}px;
`;

export const ContentHeader = styled.View`
    flex-direction: column;
    align-items: flex-start;
`;

export const Avatar = styled.Image`
    width: ${RFValue(56)}px;
    height: ${RFValue(56)}px;
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(30)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(20)}px;
    color: #000000;
    text-align: center;
    font-family: Poppins_500Medium;
`;

export const Description = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: Poppins_300Light;
`;