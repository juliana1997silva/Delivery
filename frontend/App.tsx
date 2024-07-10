import "react-native-gesture-handler";
import React from "react";
import { StatusBar, StyleSheet, View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RouteStackRoutes from "./src/routes";

LogBox.ignoreAllLogs(true);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <RouteStackRoutes />
      </View>
    </NavigationContainer>
  );
};

export default App;
