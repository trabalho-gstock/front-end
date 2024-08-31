import { Stack } from "expo-router/stack";

export default function DrawerLayout() {
  return (
    <Stack
      initialRouteName="loginScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="loginScreen" />
      <Stack.Screen name="registerScreen" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="registerProductScreen" />
      <Stack.Screen name="registerStockScreen" />
    </Stack>
  );
}
