import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Container } from "./style";
import { Button } from "../Button";
import NotesServices from "../../services/App/Notes/Notes.service";
import ExportXlsxService from "../../services/App/ExportXlsx/ExportXlsx.service";

interface Notes {
    tab: number;
    notes?: any;
    isUpdate?: boolean;
    isRelatorio?: boolean;
    title?: string;
    data?: any;
}

export const FooterNotes = ({
    tab,
    notes,
    isUpdate,
    isRelatorio,
    title = "Continuar",
    data,
}: Notes) => {
    const navigation = useNavigation();

    const handleNavigationNext = async () => {
        if (tab == 1) {
            navigation.navigate("Notes_Continuation", notes);
        } else if (tab == 2) {
            const noteService = new NotesServices();

            if (isUpdate) {
                noteService.update(notes);
            } else {
                noteService.create(notes);
            }

            navigation.navigate("Home");
        } else if (isRelatorio) {
            const exportXls = new ExportXlsxService();
            await exportXls.generete(data.star, data.end);
            //navigation.navigate("Home");
        }
    };

    const handleNavigationBack = () => {
        if (tab == 2) {
            navigation.navigate("Notes");
        } else if (tab == 1) {
            navigation.navigate("Home");
        } else if (isRelatorio) {
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
                title={title}
                onPress={handleNavigationNext}
            />
        </Container>
    );
};
