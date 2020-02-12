import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Todo from "./components/Todo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./components/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ClienteContainer from "./containers/ClienteContainer";
import { Provider as ReduxProvider } from "react-redux";
import store from './store'
import Header from "./components/Header";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Header title="My app" />
          <Tab.Navigator>
            <Tab.Screen
              name="Clientes"
              component={ClienteContainer}
              options={{ title: "Clientes" }}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{ title: "Profile" }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
