import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { useTheme } from "styled-components";

// Import doc
import { Container, ContainerBody, ContainerLogo } from "./style";
import logo from "../../../assets/logo.png";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

export const Login = () => {
    const { COLORS } = useTheme();
    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <Container>
                <ContainerLogo source={logo} resizeMode="contain" />
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
                    />
                    <Input
                        LeftIcon
                        RightIcon
                        secureTextEntry
                        iconSize={25}
                        keyboardType="default"
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Digite sua senha"
                        iconName="lock-closed-outline"
                    />
                    <Button
                        title="Recuperar Senha"
                        onPress={() => {}}
                        variant="transparent"
                    />
                    <Button
                        variant="buttonSm"
                        title="Entrar"
                        onPress={() => {}}
                    />
                </ContainerBody>
            </Container>
        </KeyboardAvoidingView>
    );
};
