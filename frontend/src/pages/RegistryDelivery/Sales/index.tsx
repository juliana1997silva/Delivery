import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {  Button, Card, Text, TextInput } from "react-native-paper";
import Registrations from "..";

const Sales: React.FC = () => {
  const [goBack, setGoBack] = useState(false);

  if (goBack) {
    return <Registrations />;
  }

  return (
    <Card>
      <Card.Content>
        <Text variant="titleLarge">Cadastro Vendas/Pacotes</Text>
        <TextInput label="Produto" mode="outlined" style={styles.text} />
        <TextInput label="CEP Destino" mode="outlined" style={styles.text} />
        <TextInput label="CEP Origem" mode="outlined" style={styles.text} />
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => setGoBack(!goBack)}>Cancelar</Button>
        <Button>Salvar</Button>
      </Card.Actions>
    </Card>
  );
};

export default Sales;

const styles = StyleSheet.create({
  text: {
    width: "85%",
    marginVertical: "2%",
  },
});
