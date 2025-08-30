import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { makeRedirectUri } from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as S from "./styles";
import GoogleButtonSVG from "@assets/login/google.svg";
import Ball from "@assets/login/ball.svg";
import Glove from "@assets/login/glove.svg";
import Logo from "@assets/logo.svg";
import { PageContainer } from "@components/PageContainer";

const { width, height } = Dimensions.get("window");

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const redirectUri = process.env.EXPO_PUBLIC_REDIRECT_URI;
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    redirectUri,
  });

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
        <S.GooglePressable
          onPress={() => {
            if (request) promptAsync(); 
          }}
          disabled={!request}
        >
          <GoogleButtonSVG width={width * 0.51} height={height * 0.06} />
        </S.GooglePressable>
      </S.BottomRight>
    </PageContainer>
  );
}
