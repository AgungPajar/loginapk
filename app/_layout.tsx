import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  return (
    <>
      <StatusBar style="dark" />=
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(home)" options={{ title: "Home" }} />
        <Stack.Screen name="(auth)/login" options={{ title: "Login" }} />
        <Stack.Screen name="(auth)/signup" options={{ title: "Sign Up" }} />
      </Stack>
    </>
  );
};

export default RootLayout;