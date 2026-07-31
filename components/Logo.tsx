import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>💰</Text>

      <Text style={styles.title}>
        Coin<Text style={styles.gold}>Convert</Text>
      </Text>

      <Text style={styles.subtitle}>
        Conversão de moedas em tempo real
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 35,
  },

  icon: {
    fontSize: 70,
    marginBottom: 12,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: Colors.white,
  },

  gold: {
    color: Colors.primary,
  },

  subtitle: {
    marginTop: 8,
    color: Colors.gray,
    fontSize: 15,
  },
});