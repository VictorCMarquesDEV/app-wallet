import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    padding: ${RFValue(20)}px;
    height: 100%;
    justify-content: center;
`;

export const ContentHeader = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: ${RFValue(20)}px;
`;

export const ContentBody = styled.View`
    gap: 10px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
    text-align: center;
    font-family: Poppins_500Medium;
`;

export const Description = styled.Text`
    margin-top: ${RFValue(60)}px;
    font-size: ${RFValue(12)}px;
    font-family: Poppins_300Light;
`;

export const ContentFooter = styled.View`
    align-items: center;
    justify-content: center;
    padding: 20px 0;
`;

export const ButtonLogin = styled.TouchableOpacity`
    flex-direction: row;
    gap: 5px;
    justify-content: center;
    align-items: center;
`;

export const TitleButtonLogin = styled.Text`
    font-size: ${RFValue(12)}px;
    text-align: center;
    font-family: Poppins_500Medium;
    color: #828282;
`;

export const TitleButtonLoginLink = styled.Text`
    font-size: ${RFValue(12)}px;
    text-align: center;
    color: #9038FF;
    font-family: Poppins_500Medium;
`;
