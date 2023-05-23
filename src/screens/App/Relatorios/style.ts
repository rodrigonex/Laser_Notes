import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
    margin-top: ${RFValue(30)}px;
    margin-left: ${RFValue(25)}px;
    margin-right: ${RFValue(25)}px;
`;

export const Textheader = styled.Text`
    padding-top: ${RFValue(20)}px;
    font-size: ${RFValue(26)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
    text-align: center;
    color: ${({ theme }) => theme.COLORS.PURPLE};
`;

export const ContainerBody = styled.View`
    margin-top: ${RFValue(130)}px;
    margin-bottom: ${RFValue(140)}px;
`;

export const TextBody = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
    font-size: ${RFValue(22)}px;
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
    padding-top: ${RFValue(15)}px;
    font-size: ${RFValue(16)}px;
`;
