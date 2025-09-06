import styled from "@emotion/native";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native";

const { width: windowWidth } = Dimensions.get("window");
const contentWidth = windowWidth * 0.9; 

export const Container = styled.View({
  width: contentWidth,
  marginTop: 20,
});

export const Row = styled.View({
  flexDirection: "row",
  marginVertical: 8,
});

export const Input = styled.TextInput(({ theme }) => ({
  borderWidth: 1,
  borderColor: theme.colors.gray,
  borderRadius: 8,
  padding: 10,
  marginVertical: 6,
  fontFamily: theme.font.regular,
  fontSize: theme.size.md,
  width: "100%",
}));

export const Button = styled.TouchableOpacity(({ theme }) => ({
  borderWidth: 1,
  borderColor: theme.colors.primary,
  borderRadius: 8,
  padding: 12,
  alignItems: "center",
  marginVertical: 8,
  width: contentWidth,
}));

export const SaveButton = styled.TouchableOpacity(({ theme }) => ({
  backgroundColor: theme.colors.primary,
  borderRadius: 8,
  padding: 14,
  alignItems: "center",
  marginTop: 20,
  width: contentWidth,
}));

export const YafuBox = styled.View({
  marginTop: 5,
  width: contentWidth,
});

export const DeleteButton = styled.TouchableOpacity({
  position: "absolute",
  top: -1,
  right: -5,
  backgroundColor: "#fff",
  borderRadius: 12,
});

export const InputWrapper = styled.View(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 1,
  borderColor: theme.colors.gray,
  borderRadius: 8,
  paddingHorizontal: 10,
  marginVertical: 6,
}));

export const InputField = styled.TextInput(({ theme }) => ({
  flex: 1,
  fontFamily: theme.font.regular,
  fontSize: theme.size.md,
  paddingVertical: 10,
}));

export const dropdown = {
  borderWidth: 1,
  borderColor: "#bebebe", 
  borderRadius: 8,
  paddingHorizontal: 12,
  paddingVertical: 14,
  marginVertical: 6,
};


export const placeholderStyle = {
  fontSize: 16,
  color: "gray",
};

export const selectedTextStyle = {
  fontSize: 16,
  color: "black",
};


export const UploadScrollRow = styled(ScrollView)({
  flexGrow: 0,
  marginTop: 12,
});

export const PreviewImageWrapper = styled.View({
  position: "relative",
  marginRight: 8,
});

export const PreviewImage = styled.Image({
  width: windowWidth * 0.3,
  height: windowWidth * 0.3,
  borderRadius: 8,
});

export const LargeUploadBox = styled.TouchableOpacity(({ theme }) => ({
  borderWidth: 1,
  borderColor: theme.colors.gray,
  borderStyle: "dashed",
  borderRadius: 8,
  padding: 20,
  alignItems: "center",
  justifyContent: "center",
  marginVertical: 8,
  width: contentWidth,
}));

export const SmallUploadBox = styled.TouchableOpacity(({ theme }) => ({
  width: windowWidth * 0.3,
  height: windowWidth * 0.3,
  borderWidth: 1,
  borderColor: theme.colors.gray,
  borderStyle: "dashed",
  borderRadius: 8,
  alignItems: "center",
  justifyContent: "center",
  marginRight: 8,
}));