import { FlatList, Text } from "react-native";
import { useState, useEffect } from "react";
import { CardProduct } from "./CardProduct";

export interface FlatProductProps {
  name: string;
  sku: string;
  price: number;
}

export function FlatProduct() {
  const [products, setProducts] = useState<FlatProductProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("http://192.168.0.142:8080/products");

      const data = await response.json();
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <CardProduct product={item} />}
      contentContainerStyle={{ gap: 14 }}
    />
  );
}
