import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    padding: 0 ${RFValue(20)}px;
    width: 100%;
`;

export const TextHeader = styled.Text`
    padding-top: ${RFValue(50)}px;
    font-size: ${RFValue(26)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
    text-align: center;
    color: ${({ theme }) => theme.COLORS.PURPLE};
`;

export const TextBody = styled.Text`
    margin-top: ${RFValue(10)}px;
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;

export const FlatList = styled.FlatList``;

export const TextFlatHeader = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const ContainerFlat = styled.TouchableOpacity`
    font-size: ${RFValue(16)}px;
    border: ${({ theme }) => theme.COLORS.PURPLE};
    border-radius: ${RFValue(5)}px;
    margin-top: ${RFValue(10)}px;
    padding: ${RFValue(15)}px;
`;

export const TextFlatList = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
    padding-left: ${RFValue(10)}px;
`;

export const ContainerCaseVoid = styled.View`
    align-items: center;
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
    font-size: ${RFValue(16)}px;
    margin-top: ${RFValue(200)}px;
    margin-bottom: ${RFValue(150)}px;
`;
