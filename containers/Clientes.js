import React from 'react';
import ClienteList from '../components/ClienteList';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { FAB } from 'react-native-paper';

function Clientes({ navigation, cliente, clientes, onClienteChange }) {
    return (
        <View style={{ flex: 1 }}>
            <Text>{cliente.nombre || 'Cliente no seleccionado'}</Text>
            <ClienteList clientes={clientes} onClienteEdit={(cliente) => onClienteChange(cliente)} />
            <FAB
                style={{
                    position: 'absolute',
                    margin: 16,
                    right: 0,
                    bottom: 0,
                }}
                icon="plus"
                onPress={() => navigation.navigate('ClieteForm')}
            />
        </View>
    )
}

const mapStateToProps = ({ clienteState }) => {
    const { clientes, cliente } = clienteState;
    return {
        clientes,
        cliente
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClienteChange: (cliente) => dispatch({ type: 'CLIENTE_CHANGE', cliente })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clientes);


