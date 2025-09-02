import React from "react";
import { ImageSourcePropType, Dimensions } from "react-native";
import styled from "@emotion/native";
import { SmallTitle, Body } from "@components/Typography"; 
import { theme } from "@theme";

const { width: screenWidth } = Dimensions.get("window");

interface ProfileCardProps {
  profile: ImageSourcePropType;
  nickname: string; 
  year?: number;    
}

export const ProfileCard = ({ profile, nickname, year = new Date().getFullYear() }: ProfileCardProps) => {
  return (
    <Container>
      <Profile source={profile} />
      <Info>
        <SmallTitle style={{marginBottom : 4}}>{nickname} 님의 야구 통계</SmallTitle>
        <Body style={{color:theme.colors.gray}}>{year} 기준</Body>
      </Info>
    </Container>
  );
};

const Container = styled.View(() => ({
  width: screenWidth * 0.9,
  height: screenWidth* 0.25,
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: theme.colors.primary10,
  borderRadius: 12,
  paddingHorizontal: 16,
  marginVertical: 10,
  shadowColor: theme.colors.primary,
  shadowOpacity: 0.05,
  shadowRadius: 4,
  elevation: 2,
}));

const Profile = styled.Image(() => ({
  width: 70,
  height: 70,
  borderRadius: 100,
  marginRight: 12,
  resizeMode: "cover"
}));

const Info = styled.View(() => ({
  flex: 1,
}));
