import React from 'react'
import { View, Button, Text } from 'react-native'

export default function Profile({ navigation, route }) {

    {/* <Text>{route.params.nombre}</Text> */ }
    return (
        <View style={{ flex: 1, alignContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Regresar"></Button>
        </View>
    )
}
