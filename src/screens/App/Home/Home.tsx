import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../../components/Button";
import { Container, Text } from "./style";

export const Home = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <Text>Home</Text>
            <Button
                title="Notes List"
                onPress={async () => {
                    navigation.navigate("Notes_List");
                }}
                variant="transparent"
            />
            <Button
                title="Criar anotação"
                onPress={async () => {
                    navigation.navigate("Notes");
                }}
                variant="transparent"
            />
            <Button
                title="relatorio"
                onPress={async () => {
                    navigation.navigate("Relatorio");
                }}
                variant="transparent"
            />
        </Container>
    );
};
