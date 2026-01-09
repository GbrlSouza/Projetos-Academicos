import { Stack } from 'expo-router'

export default function Layout() {
    return <Stack screenOptions={{}}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
    </Stack>
}