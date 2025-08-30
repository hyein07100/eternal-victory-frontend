import React from "react";
import * as S from "./styles";
import { Dimensions } from "react-native";

import GoogleButtonSVG from "@assets/login/google.svg";
import Ball from "@assets/login/ball.svg";
import Glove from "@assets/login/glove.svg";
import Logo from "@assets/logo.svg";
import { PageContainer } from "@components/PageContainer";

const { width, height } = Dimensions.get("window");

export default function LoginScreen() {
  return (
    <PageContainer>
      <S.Slogan>기적의 순간을, {"\n"}기록으로 남기다.</S.Slogan>

      <S.BallWrapper>
        <Ball width={width * 0.41} height={width * 0.41} />
      </S.BallWrapper>

      <S.LogoWrapper>
        <Logo width={width * 0.72} height={height * 0.08} />
      </S.LogoWrapper>

      <S.GloveWrapper>
        <Glove width={width * 0.61} height={width * 0.61} />
      </S.GloveWrapper>

      <S.BottomRight>
        <S.GooglePressable onPress={() => console.log("Google Login Pressed")}>
          <GoogleButtonSVG width={width * 0.51} height={height * 0.06} />
        </S.GooglePressable>
      </S.BottomRight>
    </PageContainer>
  );
}
