import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet } from "react-native";

import {
    Container,
    FlatList,
    TextBody,
    TextHeader,
    TextFlatList,
    ContainerFlat,
    TextFlatHeader,
    ContainerCaseVoid,
    Text,
} from "./style";
import NotesServices from "../../../services/App/Notes/Notes.service";
import { Notes } from "../../../utils/Interfaces/Notes";

export const Notes_List = () => {
    const [notesList, setNoteList] = useState<Notes[]>([]);
    const [isVisibleNotes, setIsVisibleNotes] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        const notesService = new NotesServices();

        const notes = async () => {
            const result = await notesService.getAll();

            if (typeof result == "object") {
                if (result.length > 0) {
                    setIsVisibleNotes(true);
                    setNoteList(result);
                }
            }
        };

        notes();
    }, [notesList]);

    const handleNavigationBack = () => {
        navigation.navigate("Home");
    };

    const handleSeletedNote = (note: Notes) => {
        navigation.navigate("Notes", note);
    };

    return (
        <Container>
            <TextHeader>Editar Anotação</TextHeader>
            <TextBody>Selecione a Anotação:</TextBody>
            {isVisibleNotes ? (
                <FlatList
                    renderItem={({ index }) => (
                        <ContainerFlat>
                            <TouchableOpacity
                                style={styles.container}
                                onPress={() =>
                                    handleSeletedNote(notesList[index])
                                }
                            >
                                <TextFlatHeader>Procedimento:</TextFlatHeader>
                                <TextFlatList>
                                    {notesList[index].procedure}
                                </TextFlatList>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.container}
                                onPress={() =>
                                    handleSeletedNote(notesList[index])
                                }
                            >
                                <TextFlatHeader>Nome Paciente:</TextFlatHeader>
                                <TextFlatList>
                                    {notesList[index].patient_name}
                                </TextFlatList>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.container}
                                onPress={() =>
                                    handleSeletedNote(notesList[index])
                                }
                            >
                                <TextFlatHeader>
                                    Data Procedimento:
                                </TextFlatHeader>
                                <TextFlatList>
                                    {notesList[
                                        index
                                    ].date_procedure?.toString()}
                                </TextFlatList>
                            </TouchableOpacity>
                        </ContainerFlat>
                    )}
                    data={notesList}
                />
            ) : (
                <ContainerCaseVoid>
                    <Text>Você não possui Anotações salvas</Text>
                </ContainerCaseVoid>
            )}

            <AntDesign
                name="left"
                style={{ position: "absolute", top: 620, paddingLeft: 10 }}
                size={40}
                color="black"
                onPress={handleNavigationBack}
            />
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
});
