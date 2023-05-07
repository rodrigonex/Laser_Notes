import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";
import { AntDesign } from "@expo/vector-icons";

import { variantes } from "./Variante";
import { Container, Title, Content } from "./style";

interface IButtonProps {
    title: string;
    onPress: () => void;
    iconName?: keyof typeof AntDesign.glyphMap;
    isLoading?: boolean;
    disable?: boolean;
    variant?: "buttonLg" | "buttonSm" | "transparent";
    style?: TouchableOpacityProps["style"];
}

export const Button = ({
    title,
    onPress = () => {},
    isLoading,
    iconName,
    disable,
    variant = "buttonSm",
    style,
}: IButtonProps) => {
    const { COLORS } = useTheme();
    const buttonVariant = variantes[variant];
    const buttonStyle = disable
        ? buttonVariant.desabled
        : buttonVariant.enabled;

    return (
        <Container
            onPress={onPress}
            disabled={isLoading || disable}
            style={[buttonStyle.button, style]}
        >
            {isLoading ? (
                <ActivityIndicator color={COLORS.GRAY1} />
            ) : (
                <Content>
                    {iconName && (
                        <AntDesign
                            name={iconName}
                            size={25}
                            color={buttonStyle.icon.color}
                            style={{
                                marginRight: 15,
                            }}
                        />
                    )}
                    <Title style={buttonStyle.title}>{title}</Title>
                </Content>
            )}
        </Container>
    );
};
