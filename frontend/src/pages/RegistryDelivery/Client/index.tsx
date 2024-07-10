import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {  Button, Card, Text, TextInput } from "react-native-paper";
import Registrations from "..";

const Client: React.FC = () => {
  const [goBack, setGoBack] = useState(false);

  if (goBack) {
    return <Registrations />;
  }

  return (
    <Card>
      <Card.Content>
        <Text variant="titleLarge">Cadastro Clientes</Text>
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

export default Client;

const styles = StyleSheet.create({
  text: {
    width: "85%",
    marginVertical: "2%",
  },
});
