import MaterialIcon from '@expo/vector-icons/MaterialIcons'
import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
            name="index"
            options={{
                drawerLabel: 'Sign In',
                drawerIcon: ({ color, size }) => <MaterialIcon name="home" color={color} size={size} />
            }} />
        <Drawer.Screen
            name="sign-up"
            options={{
                drawerLabel: 'Sign Up',
                drawerIcon: ({ color, size }) => <MaterialIcon name="login" color={color} size={size} />
            }} />
      </Drawer>
    </GestureHandlerRootView>
  )
} 