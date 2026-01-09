import { router } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Index() {
    function signUp() {
        router.navigate('/sign-up')
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={signUp}>
                <Text style={styles.text}>Go to Sign Up</Text>
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