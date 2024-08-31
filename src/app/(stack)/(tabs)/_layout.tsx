import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="loginScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          // backgroundColor:,
          borderTopWidth: 0,
          minHeight: 74,
        },
        tabBarItemStyle: {
          paddingBottom: 34,
          paddingTop: 16,
        },
        tabBarShowLabel: false,
        // tabBarActiveTintColor: ,
        // tabBarInactiveTintColor,
      }}
    >
      <Tabs.Screen
        name="products"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="package" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="totalProducts"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="box" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
