import React from "react";
import { Text, View } from "react-native";
import ComponentsScreen from "@/src/components/componentsScreen";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>amanda</Text>
      <ComponentsScreen />
    </View>
  );
}
