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
`;
