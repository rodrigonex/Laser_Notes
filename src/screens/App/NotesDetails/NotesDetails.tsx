import React, { useState } from "react";
import { useTheme } from "styled-components";
import {
    Container,
    ContainerBody,
    ContainerHeader,
    TextBody,
    TextHeader,
} from "./style";
import { Input } from "../../../components/Input";
import { DateInput } from "../../../components/DateInput";
import { FooterNotes } from "../../../components/FooterNotes";
import { Notes } from "../../../utils/Interfaces/Notes";

export const NotesDetails = (props: any) => {
    const { COLORS } = useTheme();
    const [note, setNote] = useState<Notes>({});
    const [isUpdate, setIsUpdate] = useState(false);

    useState(() => {
        if (props.route.params) {
            setNote(props.route.params);
            setIsUpdate(true);
        }
    });

    return (
        <Container>
            <ContainerHeader>
                <TextHeader>Anotação</TextHeader>
            </ContainerHeader>
            <ContainerBody>
                <TextBody>Procedimento:</TextBody>
                <Input
                    defaultValue={note.procedure ? note.procedure : ""}
                    secureTextEntry={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    iconColor={COLORS.TEXTDARK}
                    placeholder="Qual o Procedimento"
                    onChangeText={(text) => {
                        setNote({ ...note, procedure: text });
                    }}
                />
                <TextBody>Data:</TextBody>
                <DateInput
                    onDefaultDate={
                        note.date_procedure
                            ? new Date(note.date_procedure)
                            : new Date()
                    }
                    changeDate={(data: Date) =>
                        setNote({ ...note, date_procedure: new Date(data) })
                    }
                />
                <TextBody>Horario do Procedimento:</TextBody>
                <Input
                    defaultValue={
                        note.time_procedure ? note.time_procedure : ""
                    }
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
                    defaultValue={note.patient_name ? note.patient_name : ""}
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
                    defaultValue={note.doctor_name ? note.doctor_name : ""}
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
            </ContainerBody>
            <FooterNotes tab={1} notes={note} isUpdate={isUpdate} />
        </Container>
    );
};
