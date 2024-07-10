import React, { useState } from "react";
import Client from "./Client";
import { Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Delivery from "./Delivery";
import Sales from "./Sales";

const Registrations: React.FC = () => {
    const [type, setType]= useState<"client" | "delivery" | "sales" | "">("")

    switch(type){
        case "client": 
            return <Client />
        case 'delivery':
            return <Delivery />
        case 'sales':
            return <Sales />
    }

  return (
    <View style={styles.container}>
     <Button
      mode="contained"
      icon="account-tie"
      onPress={() => setType("client")}
      style={styles.button}
    >
      Clientes
    </Button>
    <Button
      icon="truck-delivery"
      mode="contained"
      onPress={() => setType("delivery")}
      style={styles.button}
    >
      Entregador
    </Button>
    <Button
    icon="cart"
      mode="contained"
      onPress={() => setType("sales")}
      style={styles.button}
    >
      Vendas/Pacotes
    </Button>
    </View>
   
  );
};

export default Registrations;


const styles = StyleSheet.create({
    button: {
      padding: '2%',
      marginVertical: '5%',
      fontSize: 20,
      width: '90%'
    },
    container: {
        alignItems: "center",
    justifyContent: "center",
    paddingVertical: "20%",
    }
  });