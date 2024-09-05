import { Stack } from 'expo-router/stack';
import { RefreshProvider } from '@/src/context/contextRefresh';

export default function DrawerLayout() {
    return (
        <RefreshProvider>
            <Stack
                initialRouteName="loginScreen"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="loginScreen" />
                <Stack.Screen name="registerScreen" />
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="registerProductScreen" />
                <Stack.Screen name="registerStockScreen" />
            </Stack>
        </RefreshProvider>
    );
}
