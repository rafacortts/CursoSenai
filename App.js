import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/Navbar";


export default function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <Header />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
