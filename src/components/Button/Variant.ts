import { useTheme } from "styled-components";

const { COLORS } = useTheme();

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
            backgroundColor: COLORS.PURPLE,
        },
        title: {
            color: COLORS.WHITE,
        },
        icon: {
            color: COLORS.WHITE,
        }
    },
    disabled: {
        button: {
            backgroundColor: COLORS.GRAY_100,
        },
        title: {
            color: COLORS.WHITE,
        },
        icon: {
            color: COLORS.WHITE,
        }
    }
}

const buttonSecundary: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: COLORS.PURPLE,
        },
        title: {
            color: COLORS.PURPLE,
        },
        icon: {
            color: COLORS.PURPLE,
        }
    },
    disabled: {
        button: {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: COLORS.GRAY_100,
        },
        title: {
            color: COLORS.GRAY_100,
        },
        icon: {
            color: COLORS.GRAY_100,
        }
    }
}

const buttonBlack: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: COLORS.BLACK,
        },
        title: {
            color: COLORS.WHITE,
        },
        icon: {
            color: COLORS.WHITE,
        }
    },
    disabled: {
        button: {
            backgroundColor: COLORS.GRAY_100,
        },
        title: {
            color: COLORS.WHITE,
        },
        icon: {
            color: COLORS.WHITE,
        }
    }
}

export const variants = {
    primary: buttonPrimay,
    secundary: buttonSecundary,
    black: buttonBlack,
}