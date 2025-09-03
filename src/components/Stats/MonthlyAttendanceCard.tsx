import React from "react";
import styled from "@emotion/native";
import { SmallTitle, Body } from "@components/Typography";
import { theme } from "@theme";
import { Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

type Attendance = {
  month: string; 
  count: number; 
};

interface MonthlyAttendanceCardProps {
  data: Attendance[];
  max?: number; 
}

export const MonthlyAttendanceCard = ({ data, max = 10 }: MonthlyAttendanceCardProps) => {
  return (
    <Container>
      <SmallTitle style={{marginBottom : 12}}>월별 관람 횟수</SmallTitle>
      {data.map((item, idx) => {
        const progress = Math.min(item.count / max, 1);
        return (
          <Row key={idx}>
            <Body>{item.month}</Body>
            <ProgressBar>
              <Progress style={{ flex: progress }} />
              <Remain style={{ flex: 1 - progress }} />
            </ProgressBar>
            <Body>{item.count}</Body>
          </Row>
        );
      })}
    </Container>
  );
};

const Container = styled.View(() => ({
  width: screenWidth * 0.9,
  backgroundColor: theme.colors.bg,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: theme.colors.primary,
  padding: 16,
  marginVertical: 10,
}));

const Row = styled.View(() => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 8,
}));

const ProgressBar = styled.View(() => ({
  flex: 1,
  flexDirection: "row",
  height: 8,
  borderRadius: 4,
  overflow: "hidden",
  marginHorizontal: 12,
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
