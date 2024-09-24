/// <reference types="@capacitor-community/safe-area" />

import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.c2dev.samimathsclub",
  appName: "Maths Club",
  webDir: "dist/sami-maths-club-app",
  plugins: {
    SafeArea: {
      enabled: true,
      customColorsForSystemBars: true,
      statusBarColor: "#03a9f4", // SAMI Theme color
      statusBarContent: "light",
      navigationBarColor: "#00FFFFFF", // transparent
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
