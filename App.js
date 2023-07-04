import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  console.log(require("./assets/icon.png"));
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up Adam to start working on your app!</Text>
      <Image
        fadeDuration={2000}
        style={{ width: 50, height: 50 }}
        source={require("./assets/d20.png")}
        resizeMode='contain'
      />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
