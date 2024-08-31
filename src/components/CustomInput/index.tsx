import React from "react";
import { TextInput, View, TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";

interface CustomInputProps extends TextInputProps {
  icon: keyof typeof Feather.glyphMap;
  iconRight?: keyof typeof Feather.glyphMap;
  inputStyle?: string;
  containerStyle?: string;
  iconColor?: string;
  iconSize?: number;
}

const CustomInput: React.FC<CustomInputProps> = ({
  icon,
  iconRight,
  inputStyle,
  containerStyle,
  iconColor = "#000",
  iconSize = 24,
  placeholder,
  ...rest
}) => {
  const [isPasswordVisible, setPasswordVisible] =
    React.useState<boolean>(false);
  const [isPasswordHidden, setPasswordHidden] = React.useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
    setPasswordHidden(true);
  };

  return (
    <View
      className={`flex-row items-center rounded-lg px-3 h-14 bg-white shadow-lg shadow-gray-500/50 ${containerStyle}`}
    >
      <Feather name={icon} size={iconSize} color={iconColor} className="mr-2" />
      <TextInput
        className={`flex-1 text-black text-base font-latoRegular ${inputStyle}`}
        placeholder={placeholder}
        placeholderTextColor="#C8C8C8"
        secureTextEntry={!isPasswordVisible && isPasswordHidden}
        {...rest}
      />
      {iconRight && (
        <Feather
          name={iconRight}
          size={iconSize}
          color={iconColor}
          className="ml-2"
          onPress={togglePasswordVisibility}
        />
      )}
    </View>
  );
};

export default CustomInput;
