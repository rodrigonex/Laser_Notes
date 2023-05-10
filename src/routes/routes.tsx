import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/Auth/Login";
import { NotesDetails } from "../screens/App/NotesDetails";
import { Home } from "../screens/App/Home";
import { NotesContinuation } from "../screens/App/NotesContinuation";

// create the stack routes with the params of the routes
const Stack = createNativeStackNavigator();

export const ScreenRoutes = () => {
    return (
        <Stack.Navigator
            initialRouteName="Notes"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notes" component={NotesDetails} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
                name="Notes_Continuation"
                component={NotesContinuation}
            />
        </Stack.Navigator>
    );
};
