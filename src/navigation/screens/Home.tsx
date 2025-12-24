import { useAuthStore } from "@/store/auth";
import { Text } from "@react-navigation/elements";
import { Button, StyleSheet, View } from "react-native";

export function Home() {
  const { setUser } = useAuthStore();

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          setUser(null);
        }}
        title="Log out"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
