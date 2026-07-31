import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Colors from "../constants/Colors";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>

        {subtitle && (
          <Text style={styles.subtitle}>{subtitle}</Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.profile}
        onPress={() => router.push("/perfil")}
      >
        <Ionicons
          name="person"
          size={24}
          color={Colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 30,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  title: {
    color: Colors.primary,

    fontSize: 28,

    fontWeight: "bold",
  },

  subtitle: {
    color: Colors.gray,

    marginTop: 4,

    fontSize: 15,
  },

  profile: {
    width: 52,

    height: 52,

    borderRadius: 26,

    backgroundColor: Colors.card,

    justifyContent: "center",

    alignItems: "center",

    borderWidth: 1,

    borderColor: Colors.border,
  },
});