import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seja Bem-Vindo ao , MyApp</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Coloque Seu Email"
     
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Coloque Sua Senha"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastro</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.recuperarConta}> Recupere sua conta </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F0500C",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 3,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: "#fff",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap:"10px",
    marginTop: 0,
  },

  button: {
    marginTop: "10px",
    backgroundColor: "Transparent",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "#FFf",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  recuperarConta:{
    color:"#fff",
    marginTop : "10px",
    fontSize:14
  }
});
