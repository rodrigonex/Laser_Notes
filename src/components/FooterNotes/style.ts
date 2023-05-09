import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    height: ${RFValue(80)}px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${RFValue(60)}px;
    padding-right: ${RFValue(15)}px;
    padding-left: ${RFValue(15)}px;
`;
