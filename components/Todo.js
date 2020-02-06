import React, { Component, useState } from "react";
import { View, Text } from "react-native";
import { Button, List } from "react-native-paper";
import Titulo from "./Titulo";
import TareaForm from "./TareaForm";

const tareasList = [
  { descripcion: "Levantarse", hora: "6 am", realizado: false },
  { descripcion: "Desayunar", hora: "7 am", realizado: false },
  { descripcion: "Hacer deberes", hora: "9 am", realizado: false }
];

export default function Todo({ input }) {
  let [loading, setLoading] = useState(false);
  let [tarea, setTarea] = useState({});
  let [mensaje, setMensaje] = useState("Cargando!");
  let [tareas, setTareas] = useState(tareasList);

  const onInputChange = tarea => {
    setTarea({ ...tarea });
  };

  const cargarDatos = () => {
    // loading = true;
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const cargarTarea = tarea => {
    setTarea({ ...tarea });
  };

  const eliminarTarea = index => {
    tareas.splice(index, 1);
    setTareas([...tareas]);
  };

  return (
    <View>
      {/* <TareaForm
        tarea={tarea}
        onTareaChange={tarea => onInputChange(tarea)}
        onSubmit={tarea => {
          if (tarea.index !== undefined) {
            // logica de actulaizar
            let { index } = tarea;
            delete tarea.index;
            tareas[index] = tarea;
            setTarea({ descripcion: "", hora: "" });
            setTareas([...tareas]);
          } else {
            tareas.push(tarea);
            setTareas([...tareas]);
          }
        }}
      /> */}
      <List.Section>
        <List.Subheader>Tareas</List.Subheader>
        {tareas.map((item, index) => {
          return (
            <List.Item
              key={item.descripcion}
              title={item.hora}
              description={item.descripcion}
              right={() => (
                <View style={{ flex: 2, flexDirection: "row" }}>
                  <Button onPress={() => cargarTarea({ ...item, index })}>
                    Editar
                  </Button>
                  <Button onPress={() => eliminarTarea(index)}>Eliminar</Button>
                </View>
              )}
            />
          );
        })}
      </List.Section>
    </View>
  );
}
