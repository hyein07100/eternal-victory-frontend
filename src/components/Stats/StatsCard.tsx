import React from "react";
import styled from "@emotion/native";
import { SmallTitle, Footer, Body } from "@components/Typography";
import { theme } from "@theme";
import { Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

interface StatCardProps {
  label: string;   
  value: string;  
  count: number;  
  unit?: string;   
  max?: number;    
}

export const StatCard = ({ label, value, count, unit = "회", max = 20 }: StatCardProps) => {
  const progress = Math.min(count / max, 1);

  return (
    <Container>
      <SmallTitle style={{marginBottom : 12}}>{label}</SmallTitle>
      <Row>
        <Body>{value}</Body>
        <Footer>{count}{unit}</Footer>
      </Row>
      <ProgressBar>
        <Progress style={{ flex: progress }} />
        <Remain style={{ flex: 1 - progress }} />
      </ProgressBar>
    </Container>
  );
};

const Container = styled.View(() => ({
  width: screenWidth * 0.9,
  height: screenWidth * 0.25,
  backgroundColor: theme.colors.bg,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: theme.colors.primary,
  padding: 12,
  marginVertical: 6,
}));

const Row = styled.View(() => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 4,
}));

const ProgressBar = styled.View(() => ({
  flexDirection: "row",
  height: 6,
  borderRadius: 3,
  overflow: "hidden",
  marginTop: 8,
}));

const Progress = styled.View(() => ({
  backgroundColor: theme.colors.primary,
  borderRadius: 3,
  height: "100%",
}));

const Remain = styled.View(() => ({
  backgroundColor: "#E5E5E5",
  height: "100%",
}));
