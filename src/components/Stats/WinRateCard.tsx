import React from "react";
import { Dimensions } from "react-native";
import styled from "@emotion/native";
import { Score, Footer, SmallTitle } from "@components/Typography"; 
import { theme } from "@theme";

const { width: screenWidth } = Dimensions.get("window");

interface WinRateCardProps {
  wins: number;    
  losses: number;  
  ties?: number;   
}

export const WinRateCard = ({ wins, losses, ties = 0 }: WinRateCardProps) => {
  const total = wins + losses + ties;
  const winRate = wins + losses > 0 
    ? Math.floor((wins / (wins + losses)) * 100) 
    : 0;

  return (
    <Container>
      <SmallTitle>직관 승률</SmallTitle>
      <Circle>
        <Score style={{ color: theme.colors.bg }}>{winRate}%</Score>
      </Circle>
      <Footer>{`총 ${total}경기 ${wins}승 ${losses}패 ${ties > 0 ? `${ties}무` : ""}`}</Footer>
    </Container>
  );
};

const Container = styled.View(() => ({
  width: screenWidth * 0.9,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.colors.bg,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: theme.colors.primary,
  paddingVertical: 20,
  marginVertical: 10,
}));

const Circle = styled.View(() => ({
  width: 120,
  height: 120,
  borderRadius: 100,
  backgroundColor: theme.colors.primary,
  alignItems: "center",
  justifyContent: "center",
  marginVertical: 12,
}));
