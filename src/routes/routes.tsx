import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/Auth/Login";

const { Navigator, Screen } = createNativeStackNavigator();

export const ScreenRoutes = () => {
    return (
        <Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
        >
            <Screen name="Login" component={Login} />
        </Navigator>
    );
};
