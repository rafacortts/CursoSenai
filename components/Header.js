import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Com Rafael, cada linha de código é uma jornada rumo à{" "}
          <Text style={styles.span}>inovação e excelência.</Text>
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="Saiba Mais" color={'#0866FF'}/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  header: {
    alignItems: "center",
    textAlign: "center",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "400",
    paddingBottom: 0,
    textAlign:'center'
  },
  span: {
    fontWeight: "bold",
    color:'#0866FF'
  },
  buttonContainer: {
    marginTop: 20,

  },
});
