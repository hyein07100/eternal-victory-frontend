import { View } from "react-native";
import { Title, Body } from "../src/components/Typography";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Title>Eternal Victory</Title>
      <Body>직관 일기 리스트</Body>
    </View>
  );
}

