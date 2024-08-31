import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { ProductDetailsModal } from "../ProductDetailsModal";

interface Product {
  sku: string;
  quantity: number;
}

export function FlatStock() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedSku, setSelectedSku] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://192.168.0.142:8080/stock");
        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const openModal = (sku: string) => {
    setSelectedSku(sku);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedSku(null);
    setModalVisible(false);
  };

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg text-gray-700">Carregando...</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.sku}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openModal(item.sku)}>
            <View className="bg-white rounded-2xl p-4 justify-between my-2 mx-4">
              <Text className="text-base text-black">SKU: {item.sku}</Text>
              <Text className="text-base text-black">
                Quantity: {item.quantity}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ padding: 16 }}
      />
      <ProductDetailsModal
        visible={modalVisible}
        onClose={closeModal}
        sku={selectedSku}
      />
    </View>
  );
}
