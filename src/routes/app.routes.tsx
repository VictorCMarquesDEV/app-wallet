import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabRoutes } from "./tab.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
    return (
        <Navigator
            initialRouteName="Carteira"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="TabRoutes" component={TabRoutes} />
        </Navigator>
    )
}
