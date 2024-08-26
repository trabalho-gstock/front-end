import {
  Alert,
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

export default function RegisterScreen() {
  const [cpf, setCPF] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const router = useRouter();

  const handleSignUp = () => {
    if (!name || !cpf || !password || !confirmPassword) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }
  };

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
        <Text className="text-4xl font-latoBlack">Crie sua conta :)</Text>
        <View className="w-full px-10 gap-12 pt-14">
          <CustomInput
            icon="face"
            placeholder="Digite seu Nome"
            iconColor="#9A9A9A"
            iconSize={20}
            inputStyle="text-lg font-medium"
            containerStyle="rounded-full drop-shadow-2xl"
            value={name}
            onChangeText={setName}
          />
          <CustomInput
            icon="face"
            placeholder="Digite seu CPF"
            iconColor="#9A9A9A"
            iconSize={20}
            inputStyle="text-lg font-medium"
            containerStyle="rounded-full drop-shadow-2xl"
            value={cpf}
            onChangeText={setCPF}
            maxLength={11}
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
          <CustomInput
            icon="password"
            iconRight="compass-calibration"
            placeholder="Confirme sua senha"
            iconColor="#9A9A9A"
            iconSize={20}
            inputStyle="text-lg font-medium"
            containerStyle="rounded-full drop-shadow-2xl"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <View className="flex-row gap-4 justify-end items-center">
            <Text className="text-xl font-latoBold">Sign Up</Text>
            <Pressable
              className="bg-[#55ACEE] rounded-full w-20 h-12 items-center"
              onPress={handleSignUp}
            >
              <MaterialIcons name="keyboard-double-arrow-right" size={42} />
            </Pressable>
          </View>
          <View className="flex-row gap-2 justify-center">
            <Text className="text-sm font-latoLight">Já tem uma conta?</Text>
            <Pressable
              onPress={() => {
                router.push("../loginScreen");
              }}
            >
              <Text className="text-sm font-latoBold">Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Image className="" source={require("@/src/assets/Vector2.png")} />
    </SafeAreaView>
  );
}
