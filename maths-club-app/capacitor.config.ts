/// <reference types="@capacitor-community/safe-area" />
/// <reference types="@capacitor/splash-screen" />

import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.c2dev.samimathsclub",
  appName: "Maths Club",
  webDir: "dist/sami-maths-club-app",
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchFadeOutDuration: 500,
      backgroundColor: "#ffffffff",
      splashFullScreen: true,
      splashImmersive: true,
    },
    SafeArea: {
      enabled: true,
      customColorsForSystemBars: true,
      statusBarColor: "#03a9f4", // SAMI Theme color
      statusBarContent: "light",
      navigationBarColor: "#03a9f4",
      navigationBarContent: "light",
      offset: 0,
    },
  },
  ios: {
    contentInset: "automatic",
  },
  // server: {
  //   url: "http://192.168.50.67:4200",
  //   cleartext: true,
  // },
};

export default config;
