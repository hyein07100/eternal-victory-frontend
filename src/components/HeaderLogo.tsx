import { Pressable } from "react-native";
import { router } from "expo-router";
import Logo from "@assets/logo.svg"; 
import { View } from "react-native";

export function HeaderLogo() {
  return (
    <Pressable onPress={() => router.push("/")}>
       <View style={{ padding: 7 }}>
        <Logo width={160} height={40} />
      </View>
    </Pressable>
  );
}
