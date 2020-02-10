import React from 'react';
import ClienteList from '../components/ClienteList';
import { View } from 'react-native';
import { connect } from 'react-redux';

// const clientes = [
//     {
//         nombre: "Cristhian Lopez",
//         foto: "",
//         correo: "thianlopezz@gmail.com",
//         numero: "0990901765",
//         etiqueta: ["react", "contactado"]
//     },
//     {
//         nombre: "Ricardo García",
//         foto: "",
//         correo: "ragseg@donargento.com",
//         numero: "0998562048",
//         etiqueta: ["power-bi"]
//     },
//     {
//         nombre: "Paula Iniguez",
//         foto: "",
//         correo: "hol@ecudevs.com",
//         numero: "0993648292",
//         etiqueta: ["python"]
//     }
// ];


function Clientes(props) {
    debugger;
    return (
        <View>
            <ClienteList clientes={props.clientes} />
        </View>
    )
}

const mapStateToProps = ({ clienteState }) => {
    debugger;
    const { clientes, cliente } = clienteState;
    return {
        clientes,
        clienteData: cliente
    }
}

export default connect(mapStateToProps, {})(Clientes);


