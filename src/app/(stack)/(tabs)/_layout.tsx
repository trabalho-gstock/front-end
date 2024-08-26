import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          // backgroundColor:,
          borderTopWidth: 0,
          minHeight: 74,
        },
        tabBarItemStyle: {
          paddingBottom: 34,
          paddingTop: 14,
        },
        tabBarShowLabel: false,
        // tabBarActiveTintColor: ,
        // tabBarInactiveTintColor,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
