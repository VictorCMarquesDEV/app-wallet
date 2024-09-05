import theme from "../../styles/theme";

interface ButtonStyle {
    button: {
        backgroundColor: string;
        borderWidth?: number;
        borderColor?: string;
    };
    title: {
        color: string;
    };
    icon: {
        color: string;
    };
}

export interface ButtonVariant {
    enabled: ButtonStyle;
    disabled: ButtonStyle;
};

const buttonPrimay: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: theme.COLORS.PURPLE,
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        }
    },
    disabled: {
        button: {
            backgroundColor: theme.COLORS.GRAY_100,
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        }
    }
}

const buttonSecundary: ButtonVariant = {
    enabled: {
        title: {
            color: theme.COLORS.PURPLE,
        },
        icon: {
            color: theme.COLORS.PURPLE,
        },
        button: {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: theme.COLORS.PURPLE,
        }
    },
    disabled: {
        button: {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: theme.COLORS.GRAY_100,
        },
        title: {
            color: theme.COLORS.GRAY_100,
        },
        icon: {
            color: theme.COLORS.GRAY_100,
        }
    }
}

const buttonBlack: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: theme.COLORS.BLACK,
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        }
    },
    disabled: {
        button: {
            backgroundColor: theme.COLORS.GRAY_100,
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        }
    }
}

const buttonTransparent: ButtonVariant = {
    enabled: {
        title: {
            color: theme.COLORS.GRAY3,
        },
        button: {
            backgroundColor: 'transparent',
        },
        icon: {
            color: theme.COLORS.GRAY3,
        }
    },
    disabled: {
        button: {
            backgroundColor: 'transparent',
        },
        title: {
            color: theme.COLORS.GRAY3,
        },
        icon: {
            color: theme.COLORS.GRAY3,
        }
    }
}

export const variants = {
    primary: buttonPrimay,
    secundary: buttonSecundary,
    black: buttonBlack,
    transparent: buttonTransparent,
}
