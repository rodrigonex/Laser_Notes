import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import SelectDropdown from "react-native-select-dropdown";

import {
    Container,
    ContainerBody,
    ContainerHeader,
    TextHeader,
    TextBody,
    ContainerDropDown,
} from "./style";
import { Input } from "../../../components/Input";
import { FooterNotes } from "../../../components/FooterNotes";

export const NotesContinuation = (props: any) => {
    const { COLORS } = useTheme();
    const [note, setNote] = useState(props.route.params);
    const [visibleSecundaryLaser, setVisibleSecundaryLaser] = useState(false);
    const sizes = ["P", "M", "G", "GG", ""];
    const [timeLaser, setTimeLaser] = useState([
        "Eletroderme",
        "Ethera Erbium",
        "CO2",
        "Fraxel",
    ]);
    const laserList = [
        "Eletroderme",
        "Ethera Erbium",
        "CO2",
        "Fraxel",
        "Ultraformer",
        "Light Sheer",
        "Light Sheer Duet",
        "M22",
        "Ethera MX",
        "Hand Pico",
        "Vbeam",
        "Spectra",
        "",
    ];

    const handleText = (text: string) => {
        if (timeLaser.includes(note?.laser)) {
            setNote({ ...note, application_time: parseInt(text) });
        } else {
            setNote({ ...note, place_application: text });
        }
    };

    useEffect(() => {
        let laser = "";
        if (note.laser == undefined || note.laser !== laser) {
            laser = note.laser;
            setVisibleSecundaryLaser(true);
        }
    }, [note]);

    return (
        <Container>
            <ContainerHeader>
                <TextHeader>Anotação</TextHeader>
            </ContainerHeader>
            <ContainerBody>
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
                <TextBody>Laser</TextBody>
                <ContainerDropDown>
                    <SelectDropdown
                        defaultValueByIndex={12}
                        data={laserList}
                        dropdownStyle={{
                            backgroundColor: COLORS.GRAY5,
                            borderRadius: 8,
                        }}
                        onSelect={(selectedItem, index) => {
                            setNote({
                                ...note,
                                laser: laserList[index],
                            });
                            setVisibleSecundaryLaser(false);
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
                {visibleSecundaryLaser && (
                    <TextBody>
                        {timeLaser.includes(note?.laser)
                            ? "Tempo de Aplicação:"
                            : "Quantidade de Disparos"}
                    </TextBody>
                )}
                {visibleSecundaryLaser && (
                    <Input
                        placeholder={
                            timeLaser.includes(note?.laser)
                                ? "Tempo de Aplicação"
                                : "Quantidade de Disparos"
                        }
                        onChangeText={handleText}
                        keyboardType={
                            timeLaser.includes(note?.laser)
                                ? "numeric"
                                : "default"
                        }
                    />
                )}
                <TextBody>Local da Aplicação: </TextBody>
                <Input
                    placeholder="Local da Aplicação"
                    onChangeText={(text) =>
                        setNote({ ...note, place_application: text })
                    }
                />
                <TextBody>Observações: </TextBody>
                <Input
                    placeholder="Observações"
                    onChangeText={(text) =>
                        setNote({ ...note, comments: text })
                    }
                />
            </ContainerBody>
            <FooterNotes tab={2} notes={note} />
        </Container>
    );
};
