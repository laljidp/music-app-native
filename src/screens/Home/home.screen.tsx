import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { AppSafeAreaView } from "../../components/SafeAreaView";
import styled from "styled-components/native";
import { AlbumCard } from "./components/album-card.component";

const SampleText = styled.Text`
  flex: 1;
  justify-content: center;
  align-content: center;
`;

export const HomeScreen = ({ navigation }: any) => {
  const fetchLyrics = async () => {
    try {
      const response = await fetch(
        "http://api.musixmatch.com/ws/1.1/track.search?q_artist=Taylor swift&page_size=3&page=1&s_track_rating=desc",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.json();
      console.log({ data });
    } catch (err) {
      console.error({ err });
    }
  };

  useEffect(() => {
    fetchLyrics();
  }, []);

  return (
    <AppSafeAreaView>
      <AlbumCard>
        <Text>Gradient</Text>
      </AlbumCard>
    </AppSafeAreaView>
  );
};
