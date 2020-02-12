import React from 'react';
import { View } from 'react-native'
import { connect } from 'react-redux';
import { TextInput, Button } from 'react-native-paper';
import { CLIENTE_CHANGE } from '../actions/actionTypes';

function ClienteForm({ navigation, cliente, onClienteSave, onClienteChange }) {

    const onInputChange = (text, name) => {
        cliente[name] = text;
        onClienteChange(cliente);
    }

    return (
        <View style={{ flex: 1 }}>
            <TextInput
                label="Nombre"
                mode="outlined"
                value={cliente.nombre || ""}
                onChangeText={text => onInputChange(text, 'nombre')}
            />
            <TextInput
                label="foto"
                mode="outlined"
                value={cliente.foto || ""}
                onChangeText={text => onInputChange(text, 'foto')}
            />
            <TextInput
                label="Correo"
                mode="outlined"
                value={cliente.correo || ""}
                onChangeText={text => onInputChange(text, 'correo')}
            />
            <TextInput
                label="Número"
                mode="outlined"
                value={cliente.numero || ""}
                onChangeText={text => onInputChange(text, 'numero')}
            />
            <Button mode="contained" onPress={() => {
                onClienteSave(cliente);
                onClienteChange({});
                navigation.goBack();
            }
            }>Guardar</Button>
        </View >
    )
}

const mapStateToProps = ({ clienteState }) => {
    const { cliente } = clienteState;
    return {
        cliente
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClienteChange: (cliente) => dispatch({ type: CLIENTE_CHANGE, cliente }),
        onClienteSave: (cliente) => dispatch({ type: 'CLIENTE_SAVE_SUCCESS', cliente })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ClienteForm);
