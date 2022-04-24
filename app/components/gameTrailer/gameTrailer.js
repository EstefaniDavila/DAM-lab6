import * as React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Video } from 'expo-av'

export default function gameTrailer({ navigation }) {
  const video = React.useRef(null);
    return (
      <SafeAreaView style={styles.container}>
      <Video
        ref={video}
        style={styles.backgroundVideo}
        source={require('../../media/videoTrailer.mp4')}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
    backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    },
  });