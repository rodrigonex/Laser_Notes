import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Container, InputContainer } from "./style";
import { useTheme } from "styled-components";
import { TextInputProps, TouchableOpacity } from "react-native";

interface InputProps {
    RightIcon?: boolean;
    LeftIcon?: boolean;
    iconName?: React.ComponentProps<typeof Ionicons>["name"];
    iconSize?: number;
    iconColor?: string;
    secureTextEntry?: boolean;
}

export const Input: React.FC<InputProps & TextInputProps> = ({
    RightIcon,
    LeftIcon,
    iconColor,
    iconName,
    iconSize,
    secureTextEntry,
    ...rest
}) => {
    const { COLORS } = useTheme();
    const [secury, setSecurity] = useState(secureTextEntry);
    return (
        <Container>
            {LeftIcon && (
                <Ionicons
                    name={iconName}
                    size={iconSize}
                    color={iconColor || COLORS.TEXTDARK}
                    style={{ padding: 5 }}
                />
            )}

            <InputContainer
                {...rest}
                secureTextEntry={secury}
                placeholderTextColor={COLORS.GRAY3}
            />

            {RightIcon && (
                <TouchableOpacity onPress={() => setSecurity(!secury)}>
                    <Ionicons
                        name={!secury ? "eye" : "eye-off"}
                        size={iconSize}
                        color={iconColor || COLORS.TEXTDARK}
                        style={{ padding: 5 }}
                    />
                </TouchableOpacity>
            )}
        </Container>
    );
};
