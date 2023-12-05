import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { styled } from "styled-components/native";

export const AppSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg.white};
`;
