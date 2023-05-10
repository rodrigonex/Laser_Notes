import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
    background-color: ${({ theme }) => theme.COLORS.GRAY5};
    width: ${RFValue(200)}px;
    border-radius: ${RFValue(8)}px;
`;
