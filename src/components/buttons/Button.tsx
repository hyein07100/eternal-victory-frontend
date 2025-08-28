import { Pressable, ViewProps } from "react-native";
import styled from "@emotion/native";
import { BtnBig, BtnSmall } from "../Typography";
import { theme } from "../../theme";

interface Props extends ViewProps {
  variant?: "big" | "small";
  white?: boolean;
  icon?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  variant = "big",
  white = false,
  icon = false,
  children,
  ...rest
}: Props) => {
  const isBig = variant === "big";
  const height = isBig ? 62 : 48;

  return (
    <Pressable
      {...rest}
      style={({ pressed }) => ({
        opacity: pressed ? 0.9 : 1,
      })}
    >
      <ButtonWrapper height={height} white={white}>
        {icon && <Plus white={white}>＋</Plus>}
        {isBig ? (
          <BtnBig style={{ color: white ? theme.colors.primary : "#fff" }}>{children}</BtnBig>
        ) : (
          <BtnSmall style={{ color: white ? theme.colors.primary : "#fff" }}>{children}</BtnSmall>
        )}
      </ButtonWrapper>
    </Pressable>
  );
};

const ButtonWrapper = styled.View<{ height: number; white: boolean }>(
  ({ height, white, theme }) => ({
    width: 310,
    height,
    backgroundColor: white ? "#fff" : theme.colors.primary,
    borderWidth: 1,
    borderColor: white ? theme.colors.primary : "transparent",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 6,
  })
);

const Plus = styled.Text<{ white: boolean }>(({ white, theme }) => ({
  fontSize: 40,
  color: white ? theme.colors.primary : "#fff",
  marginRight: 30,
}));
