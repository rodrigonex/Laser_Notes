import React from "react";
import { Container } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "../Button";
import { useNavigation } from "@react-navigation/native";

interface Notes {
    tab: number;
    notes: any;
}

export const FooterNotes = ({ tab, notes }: Notes) => {
    const navigation = useNavigation();
    const handleNavigationNext = () => {};
    const handleNavigationBack = () => {
        if (tab == 2) {
            navigation.navigate("Notes");
        } else {
            navigation.navigate("Home");
        }
    };
    return (
        <Container>
            <AntDesign
                name="left"
                style={{ paddingTop: 20 }}
                size={40}
                color="black"
                onPress={handleNavigationBack}
            />
            <Button
                variant="buttonSm"
                title="Continuar"
                onPress={handleNavigationNext}
            />
        </Container>
    );
};
