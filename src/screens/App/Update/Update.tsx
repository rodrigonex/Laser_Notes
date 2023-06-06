import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

// Import doc
import {
    Container,
    ContainerBody,
    ContainerLogo,
    TextHeader,
    TextBody,
} from "./style";

import logo from "../../../assets/logo.png";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import User from "../../../services/Auth/User.service";
import Storage from "../../../services/Auth/Storage.service";

export const Update = () => {
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

    const handleSingUp = async () => {
        if (email !== "") {
            const user = new User();
            const userAuth = await user.signUp(email, password);

            if (userAuth !== "Not authorize") {
                const storage = new Storage();
                await storage.setItem("@access_token", userAuth.access_token);
                await storage.setItem("@user_id", userAuth.user.id);

                navigation.navigate("Home");
            } else {
                console.log("senha invalida");
            }
        }
    };

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <Container>
                <TextHeader>Redefinir Senha</TextHeader>
                <TextBody>Informe o email e a nova senha</TextBody>
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
                    <Input
                        LeftIcon
                        RightIcon
                        secureTextEntry
                        iconSize={25}
                        keyboardType="default"
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Digite sua nova senha"
                        iconName="lock-closed-outline"
                        onChangeText={(text) => setPassword(text)}
                    />
                </ContainerBody>

                <Button
                    variant="buttonExLg"
                    title="Enviar"
                    onPress={handleSingUp}
                />

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
