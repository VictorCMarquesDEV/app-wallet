import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font'
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
    const [appReady, setAppReady] = useState(false)
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular,
    })

    useEffect(() => {
        (async () => {
          try {
            await Font.loadAsync({
                Poppins_300Light,
                Poppins_400Regular,
                Poppins_500Medium,
                Poppins_700Bold,
                Poppins_800ExtraBold,
                DMSans_400Regular,
                DMSerifDisplay_400Regular,
            })
          } catch (e) {
            console.warn(e)
          } finally {
            setAppReady(true)
          }
        })()
      }, [])
    
      const onLayout = useCallback(() => {
        if (appReady) {
          SplashScreen.hideAsync()
        }
      }, [appReady])
    
      if (!appReady) {
        return null
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
