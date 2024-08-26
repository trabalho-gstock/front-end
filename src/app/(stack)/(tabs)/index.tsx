import { Pressable, SafeAreaView, Text, View } from "react-native";

import Constants from "expo-constants";
import { useRouter } from "expo-router";
const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className="" style={{ flex: 1 }}>
      <View style={{ marginTop: statusBarHeight + 10 }}>
        <Text>Ola</Text>

        <Pressable
          onPress={() => {
            router.push("../loginScreen");
          }}
        >
          <Text>Go to login</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            router.push("../registerScreen");
          }}
        >
          <Text>Go to register</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
