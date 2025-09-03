import { SafeAreaView } from "react-native-safe-area-context";
import { ViewProps } from "react-native";
import { PropsWithChildren } from "react";
import { theme } from "../theme";
import { ScrollView } from "react-native";

export const PageContainer = ({ children, ...rest }: PropsWithChildren<ViewProps>) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.bg,
      }}
      {...rest}
    >
      {children}
    </SafeAreaView>
  );
};


export const ScrollPageContainer = ({ children }: PropsWithChildren<{}>) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }}>
      <ScrollView 
        contentContainerStyle={{
          alignItems: "center", 
        }}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};
