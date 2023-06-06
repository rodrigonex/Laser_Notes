import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../../components/Button";

import {
    Container,
    ContainerBody,
    ContainerHeader,
    TextHeader,
    TextBody,
} from "./style";

export const Home = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <ContainerHeader>
                <TextHeader>Bem-vinda {"\n"}de volta!</TextHeader>
            </ContainerHeader>

            <Button
                title="Gerar Relatorio"
                onPress={async () => {
                    navigation.navigate("Relatorio");
                }}
                style={{ marginBottom: 20 }}
                variant="buttonLg"
            />
            <Button
                title="Editar Anotacao"
                onPress={async () => {
                    navigation.navigate("Notes_List");
                }}
                style={{ marginBottom: 20 }}
                variant="buttonLg"
            />
            <Button
                title="Nova Anotacao"
                onPress={async () => {
                    navigation.navigate("Notes");
                }}
                style={{ marginBottom: 20 }}
                variant="buttonLg"
            />
        </Container>
    );
};
