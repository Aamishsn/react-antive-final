import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const Button = ({ onPress, children, disabled }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.buttonWrapper, disabled && styles.disabled]}
      disabled={disabled}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 16,
    backgroundColor: "#495E57",
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
    width: 250,
    marginLeft: "auto",
    marginRight: "auto",
  },
  disabled: {
    backgroundColor: "grey",
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    color: "pink",
  },
});

export default Button;
