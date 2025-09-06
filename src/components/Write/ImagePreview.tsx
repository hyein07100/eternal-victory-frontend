import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "@theme";
import * as S from "../../../app/write/style"; 

type Props = {
  uri: string;
  onRemove: () => void;
};

export const ImagePreview = ({ uri, onRemove }: Props) => {
  return (
    <S.PreviewImageWrapper>
      <S.PreviewImage source={{ uri }} />
      <S.DeleteButton onPress={onRemove}>
        <Ionicons name="close" size={16} color={theme.colors.gray} />
      </S.DeleteButton>
    </S.PreviewImageWrapper>
  );
};
