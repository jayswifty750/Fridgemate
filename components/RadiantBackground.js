// components/RadiantBackground.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { Video } from 'expo-av';

export default function RadiantBackground() {
  return (
    <Video
      source={require('../assets/animations/FridgeMate Solid Color.mp4')}
      style={StyleSheet.absoluteFill}
      shouldPlay
      isLooping
      resizeMode="cover"
      isMuted
    />
  );
}
