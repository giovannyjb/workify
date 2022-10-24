import { StatusBar } from 'expo-status-bar';

import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Navigation from './src/components/Navigation';



const App = () => {

  const [fontsLoaded] = useFonts({
    interRegular: require("./assets/fonts/Inter-Regular.ttf"),
    interSemibold: require("./assets/fonts/Inter-SemiBold.ttf"),
    interBold: require("./assets/fonts/Inter-Bold.ttf"),
    interExtrabold: require("./assets/fonts/Inter-ExtraBold.ttf"),
  });


  useEffect(() => {
    async () => {
      await SplashScreen.preventAutoHideAsync();
    }
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar translucent />
      <Navigation onLayoutRootView={onLayoutRootView} />
    </>
  );
}

export default App;
