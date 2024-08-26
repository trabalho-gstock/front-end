import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import CustomInput from "@/src/components/CustomInput";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const statusBarHeight = Constants.statusBarHeight;

export default function LoginScreen() {
  const [cpf, setCPF] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  return (
    <SafeAreaView
      className="bg-white"
      style={{ flex: 1, marginTop: statusBarHeight + 10 }}
    >
      <Image
        className="w-full h-40"
        source={require("@/src/assets/Vector3.png")}
      />
      <View className="justify-center items-center pt-22">
        <Text className="text-6xl font-latoBlack">Olá :)</Text>
        <Text className="text-lg font-latoRegular pt-6">
          Faça login na sua conta
        </Text>
        <View className="w-full px-10 gap-16 pt-24">
          <CustomInput
            icon="face"
            placeholder="Digite seu CPF"
            iconColor="#9A9A9A"
            iconSize={20}
            inputStyle="text-lg font-medium"
            containerStyle="rounded-full drop-shadow-2xl"
            value={cpf}
            onChangeText={setCPF}
          />
          <CustomInput
            icon="password"
            iconRight="compass-calibration"
            placeholder="Digite sua senha"
            iconColor="#9A9A9A"
            iconSize={20}
            inputStyle="text-lg font-medium"
            containerStyle="rounded-full drop-shadow-2xl"
            value={password}
            onChangeText={setPassword}
          />
          <Pressable className="items-end">
            <Text className="text-md font-latoLight color-[#BEBEBE]">
              Esqueceu a senha?
            </Text>
          </Pressable>

          <View className="flex-row gap-4 justify-end items-center">
            <Text className="text-xl font-latoBold">Sign In</Text>
            <Pressable className="bg-[#55ACEE] rounded-full w-20 h-12 items-center">
              <MaterialIcons name="keyboard-double-arrow-right" size={42} />
            </Pressable>
          </View>
          <View className="flex-row gap-2 justify-center">
            <Text className="text-sm font-latoLight">Não tem uma conta?</Text>
            <Pressable
              onPress={() => {
                router.push("../registerScreen");
              }}
            >
              <Text className="text-sm font-latoBold">Cadastre-se</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Image className="" source={require("@/src/assets/Vector2.png")} />
    </SafeAreaView>
  );
}
