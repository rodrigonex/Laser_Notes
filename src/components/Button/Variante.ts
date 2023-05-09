import theme from "../../styles/theme";

interface ButtonStyle {
    button: {
        backgroundColor: string;
        borderWidth?: number;
        borderColor?: string;
        width: number;
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
            width: 129,
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
            width: 129,
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
            width: 176,
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
            width: 176,
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
            width: 129,
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
            width: 129,
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
