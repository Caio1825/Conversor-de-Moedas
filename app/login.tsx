import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Logo />

      <Text style={styles.title}>Bem-vindo de volta</Text>

      <View style={styles.inputContainer}>
        <Ionicons
          name="mail-outline"
          size={22}
          color={Colors.gray}
          style={styles.icon}
        />

        <Input
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={22}
          color={Colors.gray}
          style={styles.icon}
        />

        <Input
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!mostrarSenha}
        />

        <TouchableOpacity
          onPress={() => setMostrarSenha(!mostrarSenha)}
        >
          <Ionicons
            name={
              mostrarSenha
                ? "eye-off-outline"
                : "eye-outline"
            }
            size={22}
            color={Colors.gray}
          />
        </TouchableOpacity>
      </View>

      <Button
        title="ENTRAR"
        onPress={() => router.push("/home")}
      />

      <TouchableOpacity
        style={styles.register}
        onPress={() => router.push("/cadastro")}
      >
        <Text style={styles.registerText}>
          Não possui uma conta?{" "}
          <Text style={styles.gold}>Criar Conta</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 25,
    justifyContent: "center",
  },

  title: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.card,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 18,
    paddingHorizontal: 12,
  },

  icon: {
    marginRight: 8,
  },

  register: {
    marginTop: 25,
    alignItems: "center",
  },

  registerText: {
    color: Colors.gray,
    fontSize: 15,
  },

  gold: {
    color: Colors.primary,
    fontWeight: "bold",
  },
});