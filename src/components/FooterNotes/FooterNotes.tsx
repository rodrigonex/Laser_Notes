import React from "react";
import { Container } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "../Button";
import { useNavigation } from "@react-navigation/native";
import NotesServices from "../../services/App/Notes/Notes.service";

interface Notes {
    tab: number;
    notes?: any;
    isUpdate?: any;
}

export const FooterNotes = ({ tab, notes, isUpdate }: Notes) => {
    const navigation = useNavigation();

    const handleNavigationNext = () => {
        if (tab == 1) {
            navigation.navigate("Notes_Continuation", notes);
        } else {
            const noteService = new NotesServices();

            if (isUpdate) {
                noteService.update(notes);
            } else {
                noteService.create(notes);
            }

            navigation.navigate("Home");
        }
    };

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
