import React from "react";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";

export default function Home () {
  return (
    <SafeAreaView>       
      <Image source={require("../../assets/logo.png")} style={styles.image} /> 
      <View style={styles.container}>
      
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "20%",
  },
  text: {
    width: "85%",
    marginVertical: '2%'
  },
  button: {
    width: "85%",
    padding: '2%',
    marginTop: '10%'
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: '30%'
  },
  containerimage: {
    alignItems: "center",
    justifyContent: "center"
  },
});