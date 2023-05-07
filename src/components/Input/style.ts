import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(50)}px;
    padding: 0 ${RFValue(12)}px;
    margin-top: ${RFValue(10)}px;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    border-radius: ${RFValue(8)}px;
    background-color: ${({ theme }) => theme.COLORS.GRAY5};
`;

export const InputContainer = styled.TextInput`
    flex: 1;
    height: ${RFValue(40)}px;
    border: 0;
    border-radius: ${RFValue(8)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;
