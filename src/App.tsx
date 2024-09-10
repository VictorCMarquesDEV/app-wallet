import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

import { NavigationContainer } from "@react-navigation/native";

import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import COLORS from "../src/styles/theme";
import { Routes } from "./routes";

const App: React.FC = () => {
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular,
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <ThemeProvider theme={COLORS}>
            <NavigationContainer>
                <StatusBar
                    style="dark"
                    translucent
                    backgroundColor="transparent"
                />
                <View style={{
                    flex: 1,
                    backgroundColor: COLORS.COLORS.WHITE,
                }}>
                    <Routes />
                </View>
            </NavigationContainer>
        </ThemeProvider>
    )
}
export default App;
