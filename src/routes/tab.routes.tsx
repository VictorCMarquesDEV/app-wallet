import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Carteira } from "../screens/Tab/Carteira/Carteira";
import { Notificacao } from "../screens/Tab/Notificacao/Notificacao";
import { Relatorio } from "../screens/Tab/Relatorio/Relatorio";
import { Settings } from "../screens/Tab/Settings/Settings";
import theme from "../styles/theme";

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Navigator
            initialRouteName="Carteira"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: theme.COLORS.GRAY4,
                tabBarActiveTintColor: theme.COLORS.WHITE,
                tabBarStyle: {
                    padding: 10,
                    backgroundColor: theme.COLORS.PURPLE
                },
            }}
        >
            <Screen
                name='Carteira'
                component={Carteira}
            />
            <Screen
                name='Relatorio'
                component={Relatorio}
            />
            <Screen
                name='Notificacao'
                component={Notificacao}
            />
            <Screen
                name='Settings'
                component={Settings}
            />
        </Navigator>
    )
}
