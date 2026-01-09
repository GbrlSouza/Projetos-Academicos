import { MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarLabelPosition: 'beside-icon',
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name='list' color={color} size={size} />
                    ),
                    tabBarLabel: 'Produtos',
                }}
            />

            <Tabs.Screen
                name='order'
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name='shopping-bag' color={color} size={size} />
                    ),
                    tabBarLabel: 'Pedidos',
                }}
            />

            <Tabs.Screen
                name='product'
                options={{ tabBarButton: () => null, }}
            />
        </Tabs>
    )
}