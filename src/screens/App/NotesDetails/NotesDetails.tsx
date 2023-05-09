import React, { useState } from "react";
import { useTheme } from "styled-components";
import SelectDropdown from "react-native-select-dropdown";

import {
    Container,
    ContainerBody,
    ContainerHeader,
    TextBody,
    TextHeader,
    ContainerDropDown,
} from "./style";
import { Input } from "../../../components/Input";
import { DateInput } from "../../../components/DateInput";
import { FooterNotes } from "../../../components/FooterNotes";

export const NotesDetails = () => {
    const { COLORS } = useTheme();
    const [note, setNote] = useState({});
    const sizes = ["P", "M", "G", "GG", ""];
    return (
        <Container>
            <ContainerHeader>
                <TextHeader>Anotação</TextHeader>
            </ContainerHeader>
            <ContainerBody>
                <TextBody>Procedimento:</TextBody>
                <Input
                    secureTextEntry={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    iconColor={COLORS.TEXTDARK}
                    placeholder="Qual o Procedimento"
                    onChangeText={(text) =>
                        setNote({ ...note, procedure: text })
                    }
                />
                <TextBody>Data:</TextBody>
                <TextBody>Horario do Procedimento:</TextBody>
                <Input
                    secureTextEntry={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    iconColor={COLORS.TEXTDARK}
                    placeholder="Horario do Procedimento"
                    onChangeText={(text) =>
                        setNote({ ...note, time_procedure: text })
                    }
                />
                <TextBody>Nome do Paciente:</TextBody>
                <Input
                    secureTextEntry={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    iconColor={COLORS.TEXTDARK}
                    placeholder="Nome do Paciente"
                    onChangeText={(text) =>
                        setNote({ ...note, patient_name: text })
                    }
                />
                <TextBody>Nome do Medico:</TextBody>
                <Input
                    secureTextEntry={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    iconColor={COLORS.TEXTDARK}
                    placeholder="Nome do Medico"
                    onChangeText={(text) =>
                        setNote({ ...note, doctor_name: text })
                    }
                />
                <TextBody>Tamanho da anestésico:</TextBody>
                <ContainerDropDown>
                    <SelectDropdown
                        defaultValueByIndex={4}
                        data={sizes}
                        dropdownStyle={{
                            backgroundColor: COLORS.GRAY5,
                            borderRadius: 8,
                        }}
                        onSelect={(selectedItem, index) => {
                            setNote({ ...note, size_anesthetic: sizes[index] });
                            console.log(selectedItem, index);
                        }}
                        buttonStyle={{
                            width: "100%",
                            backgroundColor: COLORS.GRAY5,
                            borderRadius: 8,
                            height: 45,
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            return item;
                        }}
                    />
                </ContainerDropDown>
            </ContainerBody>
            <FooterNotes tab={1} notes={note} />
        </Container>
    );
};
