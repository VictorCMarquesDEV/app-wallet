import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabRoutes } from "./tab.routes";
import { Profile } from "../screens/App/Profile/Profile";
import { AddCard } from "../screens/App/AddCard/AddCard";
import { DetailsCard } from "../screens/App/DetailsCard/DetailsCard";
import { Transactions } from "../screens/App/Transactions/Transactions";


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
            <Screen name="AddCard" component={AddCard} />
            <Screen name="DetailsCard" component={DetailsCard} />
            <Screen name="Transactions" component={Transactions} />
        </Navigator>
    )
}
