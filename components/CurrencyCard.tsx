import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

interface CurrencyCardProps {
  value: string;
}

export default function CurrencyCard({
  value,
}: CurrencyCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Resultado
      </Text>

      <Text style={styles.value}>
        {value || "--"}
      </Text>

      <Text style={styles.subtitle}>
        Conversão em tempo real
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.card,

    borderRadius: 20,

    padding: 25,

    alignItems: "center",

    marginTop: 25,

    borderWidth: 1,

    borderColor: Colors.border,
  },

  title: {
    color: Colors.gray,

    fontSize: 16,
  },

  value: {
    color: Colors.primary,

    fontSize: 40,

    fontWeight: "bold",

    marginVertical: 12,
  },

  subtitle: {
    color: Colors.gray,

    fontSize: 14,
  },
});