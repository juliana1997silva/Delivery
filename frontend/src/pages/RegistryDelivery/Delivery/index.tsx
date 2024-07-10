import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {  Button, Card, Text, TextInput } from "react-native-paper";
import Registrations from "..";

const Delivery: React.FC = () => {
  const [goBack, setGoBack] = useState(false);

  if (goBack) {
    return <Registrations />;
  }

  return (
    <Card>
      <Card.Content>
        <Text variant="titleLarge">Cadastro Entregador</Text>
        <TextInput label="Nome" mode="outlined" style={styles.text} />
        <TextInput label="E-mail" mode="outlined" style={styles.text} />
        <TextInput label="CPF" mode="outlined" style={styles.text} />
        <TextInput label="Senha" mode="outlined" style={styles.text} />
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => setGoBack(!goBack)}>Cancelar</Button>
        <Button>Salvar</Button>
      </Card.Actions>
    </Card>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  text: {
    width: "85%",
    marginVertical: "2%",
  },
});
