import theme from "../../styles/theme";

interface ButtonStyle {
    button: {
        backgroundColor: string;
        borderWidth?: number;
        borderColor?: string;
        buttonWidth: string;
    };
    title: {
        color: string;
    };
    icon: {
        color: string;
    };
}

export interface ButtonVariante {
    enabled: ButtonStyle;
    desabled: ButtonStyle;
}

const buttonSm: ButtonVariante = {
    enabled: {
        button: {
            backgroundColor: theme.COLORS.PURPLE,
            buttonWidth: "129px",
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    },
    desabled: {
        button: {
            backgroundColor: theme.COLORS.GRAY_100,
            buttonWidth: "129px",
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    },
};

const buttonLg: ButtonVariante = {
    enabled: {
        button: {
            backgroundColor: theme.COLORS.PURPLE,
            buttonWidth: "176px",
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    },
    desabled: {
        button: {
            backgroundColor: theme.COLORS.GRAY_100,
            buttonWidth: "176px",
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    },
};

const buttonTransparent: ButtonVariante = {
    enabled: {
        button: {
            backgroundColor: "transparent",
            buttonWidth: "129px",
        },
        title: {
            color: theme.COLORS.RED1,
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    },
    desabled: {
        button: {
            backgroundColor: "transparent",
            buttonWidth: "129px",
        },
        title: {
            color: theme.COLORS.GRAY2,
        },
        icon: {
            color: theme.COLORS.GRAY2,
        },
    },
};

export const variantes = {
    buttonSm: buttonSm,
    buttonLg: buttonLg,
    transparent: buttonTransparent,
};
