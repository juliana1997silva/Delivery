import React from "react";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";

const Login: React.FC = () => {
  return (
    <SafeAreaView>        
      <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
        <TextInput label="E-mail" mode="outlined" style={styles.text} />
        <TextInput label="Senha" mode="outlined" style={styles.text} />
        <Button
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={styles.button}
        >
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
    width: 130,
    height: 130,
    marginBottom: '30%'
  },
  containerimage: {
    alignItems: "center",
    justifyContent: "center"
  },
});
