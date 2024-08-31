import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Constants from "expo-constants";
import { FlatStock } from "@/src/components/FlatStock";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
const statusBarHeight = Constants.statusBarHeight;

export default function TotalProducts() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={{ marginTop: statusBarHeight + 20 }}>
        <Text className="text-2xl font-latoBold text-center mb-4 ">
          Estoque Disponível
        </Text>
        <FlatStock />
        <View className="justify-end items-center">
          <TouchableOpacity
            onPress={() => {
              router.push("../registerStockScreen");
            }}
          >
            <View className="items-center text-center mt-12 flex-row gap-2 bg-slate-600 p-2 rounded-lg">
              <Feather name="plus" size={32} color="white" />
              <Text className="text-lg font-latoBold text-white">
                Novo Produto
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
