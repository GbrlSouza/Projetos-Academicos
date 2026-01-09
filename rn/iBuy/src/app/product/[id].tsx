import { router, useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Product() {
    const { id } = useLocalSearchParams()

    return(
        <View style={styles.container}>
            <Text style={styles.text}>ID do produto: {id}</Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text onPress={() => router.back()}>Voltar</Text>
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
    },

    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5,
    }
})