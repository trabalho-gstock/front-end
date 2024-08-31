import { Text, View } from "react-native";

import { FlatProductProps } from "..";

export function CardProduct({ product }: { product: FlatProductProps }) {
  return (
    <View className="bg-white rounded-2xl p-4 justify-between my-2 mx-4">
      <View className="flex-row justify-between items-center">
        <Text className="text-lg font-latoBold">{product.name}</Text>
        <Text className="text-sm font-latoLight">SKU: {product.sku}</Text>
      </View>
      <Text className="text-base font-latoRegular">
        Preço R$ {product.price}
      </Text>
    </View>
  );
}
