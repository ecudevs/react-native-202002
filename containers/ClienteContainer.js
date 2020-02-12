import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Clientes from './Clientes';
import ClienteForm from './ClienteForm';

const Stack = createStackNavigator();

export default function ClienteContainer() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Lista"
                component={Clientes}
            />
            <Stack.Screen
                name="ClieteForm"
                component={ClienteForm}
            />
        </Stack.Navigator>
    )
}
