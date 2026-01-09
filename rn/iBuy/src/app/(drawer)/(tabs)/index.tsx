import { router } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Products() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Lista de Produtos</Text>

            <TouchableOpacity style={styles.button} onPress={() => router.navigate('/product/1')}>
                <Text style={styles.buttonText}>Ver Detalhes do Produto</Text>
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
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
    }
})