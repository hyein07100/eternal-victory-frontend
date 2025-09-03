import React from "react";
import styled from "@emotion/native";
import { Body } from "@components/Typography";
import { theme } from "@theme";
import { ViewStyle, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

interface SummaryCardProps {
  icon: React.ReactNode; 
  label: string;
  value: number;
  style?: ViewStyle;
}

export const SummaryCard = ({ icon, label, value, style }: SummaryCardProps) => {
  return (
    <Container style={style}>
      <IconWrapper>{icon}</IconWrapper>
      <Body>{label}</Body>
      <Body>{value}</Body>
    </Container>
  );
};

const Container = styled.View(() => ({
  width: screenWidth * 0.435,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.colors.bg,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: theme.colors.primary,
  paddingVertical: 16,
  marginHorizontal: 6,
}));

const IconWrapper = styled.View(() => ({
  marginBottom: 8,
}));
