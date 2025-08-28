import { View, ViewProps } from "react-native";
import { PropsWithChildren } from "react";
import { theme } from "../theme";

export const PageContainer = ({ children, ...rest }: PropsWithChildren<ViewProps>) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.bg, 
      }}
      {...rest}
    >
      {children}
    </View>
  );
};
