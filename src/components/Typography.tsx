import styled from "@emotion/native";

export const Score = styled.Text(({ theme }) => ({
  fontFamily: theme.font.bold,
  fontSize: theme.size.xxl,
}));

export const Title = styled.Text(({ theme }) => ({
  fontFamily: theme.font.bold,
  fontSize: theme.size.xl,
}));

export const SmallTitle = styled.Text(({ theme }) => ({
  fontFamily: theme.font.semibold,
  fontSize: theme.size.lg,
}));

export const Body = styled.Text(({ theme }) => ({
  fontFamily: theme.font.regular,
  fontSize: theme.size.md
}));

export const Footer = styled.Text(({ theme }) => ({
  fontFamily: theme.font.regular,
  fontSize: theme.size.sm
}));

export const BtmSmall = styled.Text(({ theme }) => ({
  fontFamily: theme.font.regular,
  fontSize: theme.size.lg
}));

export const BtnBig = styled.Text(({ theme }) => ({
  fontFamily: theme.font.regular,
  fontSize: theme.size.xl
}));
