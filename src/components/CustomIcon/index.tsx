import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

interface CustomIconProps {
  icon: keyof typeof Feather.glyphMap;
  iconColor?: string;
  iconSize?: number;
}

export function CustomIcon({ icon, iconColor, iconSize }: CustomIconProps) {
  return (
    <View className="bg-white w-10 rounded-full p-2">
      <Feather name={icon} size={iconSize} color={iconColor} />
    </View>
  );
}
