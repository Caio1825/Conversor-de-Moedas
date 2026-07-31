import { TextInput, StyleSheet, TextInputProps } from "react-native";
import Colors from "../constants/Colors";

export default function Input({ style, ...props }: TextInputProps) {
  return (
    <TextInput
      {...props}
      placeholderTextColor={Colors.gray}
      style={[styles.input, style]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 55,
    color: Colors.white,
    fontSize: 16,
    paddingHorizontal: 10,
  },
});