import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    padding-top: ${RFValue(30)}px;
    width: 100%;
    display: flex;
    align-items: center
    
`;

export const ContainerHeader = styled.View`
    width: 100%;
    margin-top: ${RFValue(40)}px;
    margin-bottom: ${RFValue(40)}px;

`;

export const ContainerBody = styled.View`
`;

export const TextHeader = styled.Text`
    font-size: ${RFValue(40)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
    text-align: center;
    color: ${({ theme }) => theme.COLORS.PURPLE};
`;

export const TextBody = styled.Text`
    margin-top: ${RFValue(10)}px;
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;
