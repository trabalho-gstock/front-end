import CustomInput from '@/src/components/CustomInput';
import { useRefresh } from '@/src/context/contextRefresh';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';

export default function RegisterProductScreen() {
    const { triggerRefresh } = useRefresh();
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [sku, setSku] = useState<string>('');

    const handleRegister = async () => {
        if (!name || !price || !sku) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await fetch('http://172.16.35.170:8080/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    price: parseFloat(price),
                    sku,
                }),
            });

            if (!response.ok) {
                throw new Error(`Erro: ${response.status}`);
            }

            Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');

            triggerRefresh();
            router.replace('/(stack)/(tabs)/');
            setName('');
            setPrice('');
            setSku('');
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o produto.');
            console.error(error);
        }
    };

    return (
        <View className="flex-1 p-12 justify-center flex-col gap-8">
            <Text className="text-2xl font-latoBold text-center mb-4 ">
                Cadastro de produto
            </Text>

            <CustomInput
                icon="package"
                placeholder="Nome do Produto"
                value={name}
                onChangeText={setName}
                className=""
            />

            <CustomInput
                icon="dollar-sign"
                placeholder="Preço"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
                className=""
            />

            <CustomInput
                icon="archive"
                placeholder="SKU"
                value={sku}
                onChangeText={setSku}
                className=""
            />

            <TouchableOpacity
                className="w-full justify-center "
                onPress={handleRegister}
            >
                <Text className="text-lg font-latoLight text-center py-3 bg-slate-600 rounded-lg">
                    Cadastrar Produto
                </Text>
            </TouchableOpacity>
        </View>
    );
}
