import { Redirect, router, useLocalSearchParams } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Home() {
    const { id } = useLocalSearchParams()

    if (!id) {
        return <Redirect href="/" />
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home - {id}</Text>

            <TouchableOpacity activeOpacity={0.7} onPress={() => router.back()}>
                <Text style={styles.text}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    
    text: {
        fontSize: 24,
        color: '#333',
    }
})