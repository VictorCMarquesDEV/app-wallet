import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Cadastro } from "../screens/Auth/Cadastro/Cadastro";
import { Login } from "../screens/Auth/Login/Login";
import { RecuperarSenha } from "../screens/Auth/RecuperarSenha/RecuperarSenha";

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
    return (
        <Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen
                name='Login'
                component={Login}
            />
            <Screen
                name='Cadastro'
                component={Cadastro}
            />
            <Screen
                name='RecuperarSenha'
                component={RecuperarSenha}
            />
        </Navigator>
    )
}
