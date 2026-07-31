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

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Logo />

      <Text style={styles.title}>Criar Conta</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={22} color={Colors.gray} />
        <Input
          placeholder="Nome completo"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={22} color={Colors.gray} />
        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={22} color={Colors.gray} />
        <Input
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="shield-checkmark-outline" size={22} color={Colors.gray} />
        <Input
          placeholder="Confirmar senha"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
        />
      </View>

      <Button
        title="CRIAR CONTA"
        onPress={() => router.push("/home")}
      />

      <TouchableOpacity
        style={styles.login}
        onPress={() => router.back()}
      >
        <Text style={styles.loginText}>
          Já possui uma conta?{" "}
          <Text style={styles.gold}>Entrar</Text>
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
    textAlign: "center",
    marginBottom: 30,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.card,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: 12,
    marginBottom: 18,
  },

  login: {
    marginTop: 25,
    alignItems: "center",
  },

  loginText: {
    color: Colors.gray,
    fontSize: 15,
  },

  gold: {
    color: Colors.primary,
    fontWeight: "bold",
  },
});