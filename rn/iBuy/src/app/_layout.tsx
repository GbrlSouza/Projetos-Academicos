import { MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function Layout() {
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarLabelPosition: 'beside-icon' }}>
            <Tabs.Screen name="index" options={{ 
                tabBarLabel: 'Sign In',
                tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />
                
            }} />
            <Tabs.Screen name="sign-up" options={{ 
                tabBarLabel: 'Sign Up',
                tabBarIcon: ({ color, size }) => <MaterialIcons name="person" color={color} size={size} />
            }} />
        </Tabs>
    )
}