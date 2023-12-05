import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { AppNavigation } from "./src/infrastructure/navigation/core.navigation";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useRalewayFont,
  Raleway_900Black,
} from "@expo-google-fonts/raleway";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  const [isFontsLoaded] = useRalewayFont({ Raleway_900Black });
  console.log({ isFontsLoaded });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <AppNavigation />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
