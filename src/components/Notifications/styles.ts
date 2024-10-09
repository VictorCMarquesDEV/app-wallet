import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(100)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: ${RFValue(20)}px;
    padding: ${RFValue(20)}px;
    border-radius: ${RFValue(20)}px;
    border: ${RFValue(1)}px;
    border-color: #c2c2c2;
`;

export const ContainerTexts = styled.View`
    flex: 1;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(10)}px;
    color: #000000;
    text-align: left;
    font-family: Poppins_500Medium;
`;

export const Description = styled.Text`
    font-size: ${RFValue(10)}px;
    color: #000000;
    font-family: Poppins_300Light;
`;

export const ViewIcon = styled.View`
    width: ${RFValue(30)}px;
    height: ${RFValue(30)}px;
    align-items: center;
    justify-content: center;
`;

export const Ball = styled.View`
    width: ${RFValue(8)}px;
    height: ${RFValue(8)}px;
    position: absolute;
    top: 2px;
    right: 2px;
    background-color: red;
    border-radius: ${RFValue(5)}px;
`;
