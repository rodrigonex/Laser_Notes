import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    padding-top: ${RFValue(37)}px;
    height: ${RFValue(400)}px;
    width: 100%;
`;

export const ContainerLogo = styled.Image`
    align-items: center;
    width: ${RFValue(350)}px;
`;

export const ContainerBody = styled.View`
    width: 100%;
`;

export const ContainerFooter = styled.View``;
