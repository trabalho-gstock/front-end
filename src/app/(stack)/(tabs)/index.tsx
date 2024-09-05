import { Pressable, SafeAreaView, Text, View } from 'react-native';

import Constants from 'expo-constants';
import { useRouter } from 'expo-router';
import { CustomIcon } from '@/src/components/CustomIcon';
import { Banner } from '@/src/components/Banner';
import { useEffect, useState } from 'react';
import { useRefresh } from '@/src/context/contextRefresh';
const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
    const { refresh } = useRefresh();
    const router = useRouter();
    const username = 'Gabriel';
    const [data, setData] = useState({
        totalRegisteredProducts: 0,
        totalProductsStock: 0,
        totalValueProducts: 0,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'http://172.16.35.170:8080/stock/generate-report'
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                setData({
                    totalRegisteredProducts:
                        result.totalRegisteredProducts || 0,
                    totalProductsStock: result.totalProductsStock || 0,
                    totalValueProducts: result.totalValueProducts || 0,
                });
            } catch (error: any) {
                setError(error.message || 'Falha ao carregar os dados');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [refresh]);

    if (loading) {
        return <Text>Carregando...</Text>;
    }

    if (error) {
        return <Text>{error}</Text>;
    }
    return (
        <SafeAreaView className="" style={{ flex: 1 }}>
            <View className="m-6" style={{ marginTop: statusBarHeight + 20 }}>
                <View className="flex-row justify-between">
                    <Text className="text-2xl font-latoBold ">
                        Olá, {username}
                    </Text>
                    <View className="flex-row gap-2">
                        <CustomIcon icon="bell" iconSize={24} />
                        <CustomIcon icon="log-out" iconSize={24} />
                    </View>
                </View>
                <Banner />
                <View>
                    <Text className="text-xl text-center font-latoBold py-4 ">
                        Resumo
                    </Text>
                    <View className="bg-white rounded-2xl p-4 justify-center items-center my-2">
                        <Text className="text-sm font-latoRegular">
                            Total de produtos Cadastrados
                        </Text>
                        <Text className="text-lg font-latoBold">
                            {data.totalRegisteredProducts}
                        </Text>
                    </View>
                    <View className="bg-white rounded-2xl p-4 justify-center items-center my-2">
                        <Text className="text-sm font-latoRegular">
                            Total de produtos em estoque
                        </Text>
                        <Text className="text-lg font-latoBold">
                            {data.totalProductsStock}
                        </Text>
                    </View>
                    <View className="bg-white rounded-2xl p-4 justify-center items-center my-2">
                        <Text className="text-sm font-latoRegular">
                            Valor total em produtos
                        </Text>
                        <Text className="text-lg font-latoBold">
                            R${data.totalValueProducts}
                        </Text>
                    </View>
                </View>
                <Pressable
                    onPress={() => {
                        router.push('../registerScreen');
                    }}
                >
                    <Text className="text-sm font-latoBold">Cadastre-se</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
