import { FlatProduct } from '@/src/components/FlatProduct';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useRouter } from 'expo-router';

import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
const statusBarHeight = Constants.statusBarHeight;

export default function Products() {
    const router = useRouter();

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            className=""
        >
            <View style={{ marginTop: statusBarHeight + 20 }}>
                <Text className="text-2xl font-latoBold text-center mb-4 ">
                    Produtos Cadastrados
                </Text>
                <FlatProduct />
                <View className="justify-end items-center">
                    <TouchableOpacity
                        onPress={() => {
                            router.push('../registerProductScreen');
                        }}
                    >
                        <View className="items-center text-center mt-12 flex-row gap-2 bg-slate-600 p-2 rounded-lg">
                            <Feather name="plus" size={32} color="white" />
                            <Text className="text-lg font-latoBold text-white">
                                Novo Produto
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
