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

export const NotesDetails = () => {
    const { COLORS } = useTheme();
    const [note, setNote] = useState({});
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
                    onChangeText={(text) => {
                        setNote({ ...note, procedure: text });
                    }}
                />
                <TextBody>Data:</TextBody>
                <DateInput
                    changeDate={(data: Date) =>
                        setNote({ ...note, date_procedure: data })
                    }
                />
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
            </ContainerBody>
            <FooterNotes tab={1} notes={note} />
        </Container>
    );
};
