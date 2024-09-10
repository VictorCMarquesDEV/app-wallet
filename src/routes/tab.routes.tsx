import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

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
                tabBarInactiveTintColor: theme.COLORS.GRAY3,
                tabBarActiveTintColor: theme.COLORS.WHITE,
                tabBarStyle: {
                    backgroundColor: theme.COLORS.PURPLE
                },
            }}
        >
            <Screen
                name='Carteira'
                component={Carteira}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            < AntDesign
                                name={'creditcard'}
                                size={25}
                                color={focused ? theme.COLORS.WHITE : theme.COLORS.GRAY3}
                                style={{
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Screen
                name='Relatorio'
                component={Relatorio}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            < AntDesign
                                name={'barschart'}
                                size={25}
                                color={focused ? theme.COLORS.WHITE : theme.COLORS.GRAY3}
                                style={{
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Screen
                name='Notificacao'
                component={Notificacao}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            < AntDesign
                                name={'inbox'}
                                size={25}
                                color={focused ? theme.COLORS.WHITE : theme.COLORS.GRAY3}
                                style={{
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Screen
                name='Settings'
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            < AntDesign
                                name={'setting'}
                                size={25}
                                color={focused ? theme.COLORS.WHITE : theme.COLORS.GRAY3}
                                style={{
                                }}
                            />
                        </View>
                    )
                }}
            />
        </Navigator>
    )
}
