import React, { useState } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import CustomInput from "@/src/components/CustomInput";

export default function RegisterStockScreen() {
  const [sku, setSku] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");

  // Função para verificar se o SKU já existe
  const checkIfSkuExists = async (sku: string): Promise<boolean> => {
    try {
      const response = await fetch(`http://192.168.0.142:8080/stock?sku=${sku}`);
      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }
      const data = await response.json();
      return data.length > 0;
    } catch (error) {
      console.error("Erro ao verificar SKU:", error);
      return false;
    }
  };

  // Função para cadastrar o produto
  const handleRegister = async () => {
    if (!sku || !quantity) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    // Verifica se o SKU já existe
    const skuExists = await checkIfSkuExists(sku);
    if (skuExists) {
      Alert.alert("Erro", "SKU já existe no estoque.");
      return;
    }

    try {
      const response = await fetch("http://192.168.0.142:8080/stock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sku,
          quantity: parseInt(quantity, 10),
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }

      Alert.alert("Sucesso", "Produto cadastrado com sucesso!");
      setSku("");
      setQuantity("");
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao cadastrar o produto.");
      console.error(error);
    }
  };

  return (
    <View className="flex-1 p-12 justify-center flex-col gap-8">
      <Text className="text-2xl font-latoBold text-center mb-4">
        Cadastro de Estoque
      </Text>

      <CustomInput
        icon="archive"
        placeholder="SKU"
        value={sku}
        onChangeText={setSku}
        className=""
      />

      <CustomInput
        icon="package"
        placeholder="Quantidade"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
        className=""
      />

      <TouchableOpacity
        className="w-full justify-center"
        onPress={handleRegister}
      >
        <Text className="text-lg font-latoLight text-center py-3 bg-slate-600 rounded-lg">
          Cadastrar Estoque
        </Text>
      </TouchableOpacity>
    </View>
  );
}
