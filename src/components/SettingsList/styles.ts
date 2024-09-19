import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 80px;
    justify-content: center;
    flex-direction: row;
    align-items: center;
`;

export const ContainerExt = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    border-color: #b2b2b2;
    border-bottom-width: 1px;
`;

export const Title = styled.Text`
    flex: 1;
    font-size: ${RFValue(14)}px;
    color: #000000;
    font-family: Poppins_500Medium;
`;

export const ViewIcon = styled.View`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    padding: ${RFValue(10)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(10)}px;
    
`;
