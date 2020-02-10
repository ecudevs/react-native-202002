import React, { Component } from "react";
import { View } from 'react-native'
import { Button, TextInput } from "react-native-paper";

export default class TareaForm extends Component {
  state = {};

  onInputChange(text, name) {
    const { tarea, onTareaChange } = this.props;
    tarea[name] = text;
    // this.setState({ tarea });
    onTareaChange(tarea);
  }

  submitForm() {
    const { onSubmit } = this.props;
    const { tarea } = this.props;
    onSubmit(tarea);
  }

  render() {
    const { tarea } = this.props;
    return (
      <View >
        <TextInput
          value={tarea.descripcion || ""}
          onChangeText={text => this.onInputChange(text, 'descripcion')}
        />
        <TextInput
          value={tarea.hora || ""}
          onChangeText={text => this.onInputChange(text, 'hora')}
        />
        <Button onPress={() => this.submitForm()}>Guardar</Button>
      </View>
    );
  }
}
