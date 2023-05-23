import React, { useState } from "react";
import { Container, ContainerBody, Textheader, TextBody, Text } from "./style";
import { DateInput } from "../../../components/DateInput";
import { FooterNotes } from "../../../components/FooterNotes";

export const Relatorios = () => {
    const [initialDate, setInitialDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    return (
        <Container>
            <Textheader>Gerar Relatorios</Textheader>
            <ContainerBody>
                <TextBody>Selecione um Período</TextBody>
                <Text>Data inicial:</Text>
                <DateInput
                    onDefaultDate={initialDate}
                    changeDate={(data: Date) => setInitialDate(data)}
                />
                <Text>Data final:</Text>
                <DateInput
                    onDefaultDate={endDate}
                    changeDate={(data: Date) => setEndDate(data)}
                />
            </ContainerBody>
            <FooterNotes
                tab={0}
                isRelatorio
                title="Gerar"
                data={{ start: initialDate, end: endDate }}
            />
        </Container>
    );
};
