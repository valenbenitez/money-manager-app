import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

const Stack = createStackNavigator()

function AppStack() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name='Home' component={Home} /> */}
            <Stack.Screen name='Iniciar sesion' component={SignIn} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
function RootNavigator() {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
}

export default function Main() {
    return <RootNavigator />
}

