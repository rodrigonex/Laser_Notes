import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    align-items: center;
    height: ${RFValue(400)}px;
    margin: ${RFValue(40)}px ${RFValue(20)}px 0 ${RFValue(20)}px;
`;

export const ContainerLogo = styled.Image`
    align-items: center;
    width: ${RFValue(350)}px;
`;

export const ContainerBody = styled.View`
    width: 100%;
    margin-top: ${RFValue(50)}px;
    margin-bottom: ${RFValue(20)}px;
`;

export const TextHeader = styled.Text`
    font-size: ${RFValue(40)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
    text-align: center;
    color: ${({ theme }) => theme.COLORS.PURPLE};
    margin-top: ${RFValue(100)}px;

`;

export const TextBody = styled.Text`
    margin-top: ${RFValue(10)}px;
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
    text-align: center;
`;