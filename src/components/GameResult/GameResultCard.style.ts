import styled from "@emotion/native";
import { SmallTitle,Body } from "@components/Typography";
import { theme } from "../../theme";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const CardContainer = styled.View({
  width: screenWidth * 0.9,
  height: screenWidth * 0.4,
  backgroundColor: theme.colors.bg,
  padding: 16,
  borderRadius: 12,
  borderWidth: 0.5,
  borderColor: theme.colors.gray,
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
  marginBottom: 12,
  alignSelf: "center",
});

export const TopRow = styled.View({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Left = styled.View({
  flexDirection: "row",
  alignItems: "center",
});

export const LeftTexts = styled.View({
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: 10,
});

export const GameDate = styled(SmallTitle)({
 
});

export const GameLocation = styled(Body)({
  color: theme.colors.gray,
  marginTop: 2, 
});

export const MiddleRow = styled.View({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 20,
});

export const Team = styled.View({
  justifyContent: "center",
  alignItems: "center",
  marginHorizontal: 10,
});

export const ScoreRow = styled.View({
  flexDirection: "row",
  alignItems: "center",
});

export const VsText = styled(SmallTitle)({
  color: theme.colors.gray,
  marginHorizontal: 30,
});

export const Menu = styled.View({
  position: "absolute",
  top: 48,
  right: 16,
  backgroundColor: theme.colors.bg,
  borderRadius: 8,
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 5,
  zIndex: 10,
});

export const MenuButton = styled.TouchableOpacity({
  paddingVertical: 10,
  paddingHorizontal: 16,
});


export const KebabIconArea = styled.View({
  position: "absolute",
  top: 16,       
  right: 10,    
  zIndex: 20,
});
