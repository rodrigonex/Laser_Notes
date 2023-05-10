import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.ScrollView`
    padding-top: ${RFValue(30)}px;
    width: 100%;
`;

export const ContainerHeader = styled.View`
    width: 100%;
`;

export const ContainerBody = styled.View`
    margin-left: ${RFValue(20)}px;
    margin-right: ${RFValue(20)}px;
    margin-bottom: ${RFValue(15)}px;
`;

export const TextHeader = styled.Text`
    font-size: ${RFValue(26)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
    text-align: center;
    color: ${({ theme }) => theme.COLORS.PURPLE};
`;

export const TextBody = styled.Text`
    margin-top: ${RFValue(10)}px;
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;
