import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { styled } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

const CardView = styled.View`
  height: 300px;
  width: 100%;
  border-radius: 26px;
  padding: 10px;
  position: relative;
  opacity: 0.9;
`;

const CardImage = styled.Image`
  position: absolute;
  right: 0px;
  height: 300px;
  width: 100%;
  object-fit: cover;
  background: transparent;
  opacity: 0.4;
  z-index: 999;
`;

const TitleText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.h5};
  color: ${({ theme }) => theme.colors.text.white};
  z-index: 999;
`;

const BottomSection = styled.View`
  position: absolute;
  left: 10px;
  bottom: 20;
`;

const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.colors.text.white};
`;

const SmallText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.caption};
  color: ${({ theme }) => theme.colors.text.white};
`;

const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    padding: 8,
  },
});

const colors = [
  "rgba(98, 59, 235, 1)",
  "rgba(107, 70, 252, 1)",
  "rgba(138, 53, 250, 1)",
];

export const AlbumCard = ({ children }: { children: React.ReactElement }) => {
  return (
    <CardView>
      <LinearGradient
        locations={[0.06, 0.2, 0.9]}
        start={{ x: 0.1, y: 0.5 }}
        colors={colors}
        style={styles.gradient}
      >
        <CardImage source={require("../../../../assets/sad-album.png")} />
        <TitleText>Your Daily mood</TitleText>
        <BottomSection>
          <SubTitle>Sadness</SubTitle>
          <SmallText>
            Help you get over the loss of mood and feel your feelings to the
            fullest
          </SmallText>
        </BottomSection>
      </LinearGradient>
    </CardView>
  );
};
