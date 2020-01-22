import React from "react";
import { View, TextInput } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 30 }}>
      <View>
        <TextInput
          placeholder="Course Goal"
          style={{ borderColor: "black", borderWidth: 1, padding: 10 }}
        />
        <Button title="ADD" />
      </View>
      <View>...</View>
    </View>
  );
}

const styles = StyleSheet.create({});
