import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.c2dev.samimathsclub",
  appName: "Maths Club",
  webDir: "dist/sami-maths-club-app",
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
  ios: {
    contentInset: "automatic",
  },
};

export default config;
