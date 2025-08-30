import { View, Text, Pressable, Dimensions } from "react-native";
import styled from "@emotion/native";

const { width, height } = Dimensions.get("window");

export const Slogan = styled(Text)({
  position: "absolute",
  top: height * 0.15,   
  left: width * 0.1,   
  fontSize: width * 0.06,
});

export const BallWrapper = styled(View)({
  position: "absolute",
  top: height * 0.1,
  right: 0,
});

export const LogoWrapper = styled(View)({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginBottom: height * 0.2,
});

export const GloveWrapper = styled(View)({
  position: "absolute",
  bottom: height * 0.05,
  left: -width * 0.05,
  transform: [{ rotate: "40deg" }],
});

export const BottomRight = styled(View)({
  position: "absolute",
  bottom: height * 0.39,
  right: width * 0.05,
});

export const GooglePressable = styled(Pressable)({
  alignItems: "center",
});
