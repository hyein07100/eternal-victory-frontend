import React from "react";
import { Body } from "@components/Typography";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "@theme";
import * as S from "../../../app/write/style";

type UploadButtonProps = {
  onPress: () => void;
  text?: string;
  isSmall?: boolean; 
};

export const UploadButton = ({
  onPress,
  text = "사진을 업로드하세요",
  isSmall = false,
}: UploadButtonProps) => {
  if (isSmall) {
    return (
      <S.SmallUploadBox onPress={onPress}>
        <Ionicons name="image-outline" size={20} color={theme.colors.gray} />
        <Body style={{ color: theme.colors.gray, fontSize: 16, marginTop:6 }}>+ 사진 추가</Body>
      </S.SmallUploadBox>
    );
  }

  return (
    <S.LargeUploadBox onPress={onPress}>
      <Ionicons name="image-outline" size={32} color={theme.colors.gray} style={{ marginBottom: 8 }} />
      <Body style={{ color: theme.colors.gray }}>{text}</Body>
    </S.LargeUploadBox>
  );
};
