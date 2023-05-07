import React from "react";
import { useTheme } from "styled-components";

import {
    Container,
    ContainerBody,
    ContainerHeader,
    TextBody,
    TextHeader,
} from "./style";
import { Input } from "../../../components/Input";

export const NotesDetails = () => {
    const { COLORS } = useTheme();
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
                />

                <TextBody>Horario do Procedimento:</TextBody>
                <Input
                    secureTextEntry={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    iconColor={COLORS.TEXTDARK}
                    placeholder="Horario do Procedimento"
                />

                <TextBody>Nome do Paciente:</TextBody>
                <Input
                    secureTextEntry={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    iconColor={COLORS.TEXTDARK}
                    placeholder="Qual o Procedimento"
                />

                <TextBody>Nome do Medico:</TextBody>
                <Input
                    secureTextEntry={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    iconColor={COLORS.TEXTDARK}
                    placeholder="Nome do Medico"
                />
            </ContainerBody>
        </Container>
    );
};
