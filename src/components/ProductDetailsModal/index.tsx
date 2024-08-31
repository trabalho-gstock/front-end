import React, { useEffect, useState } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";

interface ProductDetailsModalProps {
  visible: boolean;
  onClose: () => void;
  sku: string | null;
}

interface Product {
  name: string;
  sku: string;
  quantity: number;
  price: number;
}

export function ProductDetailsModal({
  visible,
  onClose,
  sku,
}: ProductDetailsModalProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (sku) {
        setLoading(true);
        try {
          const response = await fetch(
            `http://192.168.0.142:8080/products?sku=${sku}`
          );
          if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
          }
          const data = await response.json();
          setProduct(data);
        } catch (err) {
          setError("Erro ao buscar detalhes do produto");
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProductDetails();
  }, [sku]);

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent
      animationType="slide"
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            width: 300,
          }}
        >
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : error ? (
            <Text className="text-red-700">{error}</Text>
          ) : product ? (
            <View className="flex-col gap-4">
              <Text className="text-2xl font-latoBlack">{product.name}</Text>
              <Text className="text-base font-latoRegular">{`SKU: ${product.sku}`}</Text>
              <Text className="text-base font-latoRegular">{`Preço: R$${product.price}`}</Text>
            </View>
          ) : (
            <Text>Produto não encontrado</Text>
          )}
          <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
            <Text className="text-lime-950 mt-6">Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
