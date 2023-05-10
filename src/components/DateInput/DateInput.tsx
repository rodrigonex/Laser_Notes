import React, { useState } from "react";
import { useTheme } from "styled-components";
import DateField from "react-native-datefield";
import { Container } from "./style";
export const DateInput = (props: any) => {
    const { COLORS } = useTheme();
    return (
        <Container>
            <DateField
                containerStyle={{
                    height: 50,
                    backgroundColor: COLORS.GRAY5,
                    width: 150,
                    marginStart: 25,
                    paddingEnd: 10,
                }}
                labelDate="Dia"
                labelMonth="Mês"
                labelYear="Ano"
                onSubmit={props.changeDate}
            />
        </Container>
    );
};
