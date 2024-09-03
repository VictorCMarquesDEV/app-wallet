import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: #9038FF;
    width: 100%;
    height: 50px;
    padding: 0 12px;
    justify-content: center;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    gap: 15px;
`;

export const TextButton = styled.Text`
    color: #FFFFFF;
    font-size: 14px;
    font-family: 'Poppins_700Bold';
`;


export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
