import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.c2dev.samimathsclub",
  appName: "Maths Club",
  webDir: "dist/sami-maths-club-app",
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      launchFadeOutDuration: 500,
      backgroundColor: "#ffffffff",
    },
  },
  ios: {
    contentInset: "automatic",
  },
};

export default config;
