import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabRoutes } from "./tab.routes";
import { Profile } from "../screens/App/Profile/Profile";
import { AddCartao } from "../screens/App/AddCartao/AddCartao";

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
            <Screen name="Profile" component={Profile} />
            <Screen name="AddCartao" component={AddCartao} />
        </Navigator>
    )
}
