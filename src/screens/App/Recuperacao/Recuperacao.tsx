import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import toast from "react-hot-toast";
import {
    Container,
    ContainerBody,
    ContainerLogo,
    TextHeader,
    TextBody,
} from "./style";

import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import User from "../../../services/Auth/User.service";
import Storage from "../../../services/Auth/Storage.service";

export const Recuperacao = () => {
    const { COLORS } = useTheme();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const validateEmail = (str: string) => {
        if (!str) return false;
        const pattern =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(str);
    };

    const reset = async () => {
        if (email !== "") {
            const user = new User();
            const reset = user.resetPassword(email.trim());
        }
    };

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <Container>
                <TextHeader>Recuperar Senha</TextHeader>
                <TextBody>
                    Informe o e-mail para o qual deseja redefir a sua senha
                </TextBody>
                <ContainerBody>
                    <Input
                        LeftIcon
                        iconSize={25}
                        iconName="mail-outline"
                        secureTextEntry={false}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        iconColor={COLORS.TEXTDARK}
                        placeholder="Digite seu e-mail"
                        onChangeText={(text) => setEmail(text)}
                    />
                </ContainerBody>

                <Button variant="buttonExLg" title="Enviar" onPress={reset} />

                <Button
                    title="Voltar ao Login"
                    onPress={async () => {
                        navigation.navigate("Login");
                    }}
                    variant="transparent"
                />
            </Container>
        </KeyboardAvoidingView>
    );
};
