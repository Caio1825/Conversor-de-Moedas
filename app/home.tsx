import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import CurrencyCard from "../components/CurrencyCard";
import { getRates } from "../services/api";

export default function Home() {
  const [valor, setValor] = useState("");
  const [origem, setOrigem] = useState("BRL");
  const [destino, setDestino] = useState("USD");

  const [resultado, setResultado] = useState("--");
  const [loading, setLoading] = useState(false);

  async function converter() {
    if (!valor) {
      setResultado("Digite um valor");
      return;
    }

    try {
      setLoading(true);

      const rates = await getRates(origem);

      const taxa = rates[destino];

      const convertido =
        Number(valor.replace(",", ".")) * taxa;

      setResultado(
        `${destino} ${convertido.toFixed(2)}`
      );
    } catch (error) {
      console.log(error);
      setResultado("Erro");
    } finally {
      setLoading(false);
    }
  }

  function inverterMoedas() {
    const temp = origem;

    setOrigem(destino);

    setDestino(temp);
  }

  return (
    <SafeAreaView style={styles.container}>

      <Header
        title="💰 CoinConvert"
        subtitle="Converta moedas em tempo real"
      />

      <View style={styles.card}>

        <Text style={styles.label}>
          Valor
        </Text>

        <Input
          placeholder="Digite o valor"
          keyboardType="decimal-pad"
          value={valor}
          onChangeText={setValor}
        />

        <Text style={styles.label}>
          Moeda de origem
        </Text>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={origem}
            onValueChange={(value) => setOrigem(value)}
            dropdownIconColor={Colors.primary}
            style={styles.picker}
          >
            <Picker.Item
              label="🇧🇷 Real Brasileiro (BRL)"
              value="BRL"
            />

            <Picker.Item
              label="🇺🇸 Dólar Americano (USD)"
              value="USD"
            />

            <Picker.Item
              label="🇪🇺 Euro (EUR)"
              value="EUR"
            />

            <Picker.Item
              label="🇯🇵 Iene (JPY)"
              value="JPY"
            />
          </Picker>
        </View>

        <TouchableOpacity
          style={styles.swapButton}
          onPress={inverterMoedas}
        >
          <Ionicons
            name="swap-vertical"
            size={26}
            color={Colors.secondary}
          />
        </TouchableOpacity>

        <Text style={styles.label}>
          Moeda de destino
        </Text>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={destino}
            onValueChange={(value) => setDestino(value)}
            dropdownIconColor={Colors.primary}
            style={styles.picker}
          >
            <Picker.Item
              label="🇺🇸 Dólar Americano (USD)"
              value="USD"
            />

            <Picker.Item
              label="🇧🇷 Real Brasileiro (BRL)"
              value="BRL"
            />

            <Picker.Item
              label="🇪🇺 Euro (EUR)"
              value="EUR"
            />

            <Picker.Item
              label="🇯🇵 Iene (JPY)"
              value="JPY"
            />
          </Picker>
        </View>

        <Button
          title="CONVERTER"
          onPress={converter}
        />

      </View>

      <View style={{ marginTop: 25 }}>
        {loading ? (
          <ActivityIndicator
            size="large"
            color={Colors.primary}
          />
        ) : (
          <CurrencyCard value={resultado} />
        )}
      </View>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  card: {
    backgroundColor: Colors.card,
    borderRadius: 25,
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.border,
    elevation: 6,
  },

  label: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 10,
  },

  pickerContainer: {
    backgroundColor: "#1F1F1F",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: "hidden",
    marginBottom: 15,
  },

  picker: {
    color: Colors.white,
    height: 55,
  },

  swapButton: {
    alignSelf: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    elevation: 5,
  },

  loadingContainer: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  footer: {
    alignItems: "center",
    marginTop: 30,
  },

  footerText: {
    color: Colors.gray,
    fontSize: 13,
  },
});