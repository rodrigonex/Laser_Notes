import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../views/Login';
import Home from '../views/Home';
import Reset from '../views/Reset';
import Notes from '../views/Notes';
import updateNotes from '../views/updateNotes';

const Stack = createStackNavigator();

export default props =>(
    <Stack.Navigator initialRouteName="Notes" >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Reset" component={Reset} options={{ headerShown: false }}/>
        <Stack.Screen name="Notes" component={Notes} options={{ headerShown: false }}/>
        <Stack.Screen name="updateNotes" component={updateNotes} options={{ headerShown: false }}/>
    </Stack.Navigator>
)