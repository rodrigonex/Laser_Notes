import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/Auth/Login";
import { NotesDetails } from "../screens/App/NotesDetails";
import { Home } from "../screens/App/Home";
import { NotesContinuation } from "../screens/App/NotesContinuation";
import { Notes_List } from "../screens/App/Notes";
import { Relatorios } from "../screens/App/Relatorios";
import { Recuperacao } from "../screens/App/Recuperacao";
import { Update } from "../screens/App/Update";

// create the stack routes with the params of the routes
const Stack = createNativeStackNavigator();

export const ScreenRoutes = () => {
    return (
        <Stack.Navigator
            initialRouteName="Recuperacao"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notes" component={NotesDetails} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
                name="Notes_Continuation"
                component={NotesContinuation}
            />
            <Stack.Screen name="Notes_List" component={Notes_List} />
            <Stack.Screen name="Relatorio" component={Relatorios} />
            <Stack.Screen name="Recuperacao" component={Recuperacao} />
            <Stack.Screen name="Update" component={Update} />
        </Stack.Navigator>
    );
};
