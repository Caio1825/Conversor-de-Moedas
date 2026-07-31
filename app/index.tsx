import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Colors from "../constants/Colors";

export default function SplashScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <Text style={styles.logo}>💰</Text>

        <Text style={styles.title}>
          Coin<Text style={styles.gold}>Convert</Text>
        </Text>

        <Text style={styles.subtitle}>
          Converta moedas em tempo real{"\n"}
          com rapidez e segurança.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.buttonText}>
          COMEÇAR
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },

  logoContainer: {
    alignItems: "center",
    marginTop: 120,
  },

  logo: {
    fontSize: 95,
    marginBottom: 20,
  },

  title: {
    fontSize: 40,
    fontWeight: "800",
    color: Colors.white,
  },

  gold: {
    color: Colors.primary,
  },

  subtitle: {
    marginTop: 18,
    fontSize: 17,
    color: Colors.gray,
    textAlign: "center",
    lineHeight: 26,
  },

  button: {
    width: "100%",
    height: 60,
    borderRadius: 18,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },

  buttonText: {
    color: Colors.secondary,
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 1,
  },
});