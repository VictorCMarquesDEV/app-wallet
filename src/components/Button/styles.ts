import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: #9038FF;
    width: 100%;
    height: 50px;
    justify-content: center;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
`;

export const TextButton = styled.Text`
    color: #FFFFFF;
    font-size: ${RFValue(12)}px;;
    text-align: center;
    font-family: Poppins_500Medium;
`;


export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
