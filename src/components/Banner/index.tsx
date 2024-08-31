import { Image, View } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
  return (
    <View className="w-full h-44 rounded-2xl mt-5 mb-4">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <View className="relative w-full h-44 pt-6 rounded-2xl" key={0}>
          <Image
            source={require("@/src/assets/background.png")}
            className="w-full h-36 pt-4 rounded-2xl"
            resizeMode="cover"
          />

          <Image
            source={require("@/src/assets/raquete.png")}
            className="absolute w-45 h-40 top-0 left-[-220px]"
            resizeMode="contain"
          />
        </View>
        <View className="relative w-full h-44 pt-6 rounded-2xl" key={1}>
          <Image
            source={require("@/src/assets/backgroundNotebook.png")}
            className="w-full h-36 pt-4 rounded-2xl"
            resizeMode="cover"
          />

          <Image
            source={require("@/src/assets/notebook.png")}
            className="absolute w-56 h-60 top-[-40px] left-[-25px] "
            resizeMode="contain"
          />
        </View>
      </PagerView>
    </View>
  );
}
