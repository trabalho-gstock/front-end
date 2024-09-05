import { FlatList, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { CardProduct } from './CardProduct';
import { useRefresh } from '@/src/context/contextRefresh';

export interface FlatProductProps {
    name: string;
    sku: string;
    price: number;
}

export function FlatProduct() {
    const { refresh } = useRefresh();
    const [products, setProducts] = useState<FlatProductProps[]>([]);

    useEffect(() => {
        async function getProducts() {
            const response = await fetch('http://172.16.35.170:8080/products');

            const data = await response.json();
            setProducts(data);
        }
        getProducts();
    }, [refresh]);

    return (
        <FlatList
            data={products}
            renderItem={({ item }) => <CardProduct product={item} />}
            contentContainerStyle={{ gap: 14 }}
        />
    );
}
