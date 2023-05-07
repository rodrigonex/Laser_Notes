import styled from "styled-components/native";
import { Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(50)}px;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(15)}px;
    border-radius: ${RFValue(8)}px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.COLORS.BACKGROUNDDARK};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
`;
