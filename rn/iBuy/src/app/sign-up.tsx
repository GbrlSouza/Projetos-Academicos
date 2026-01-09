import { router, useLocalSearchParams } from 'expo-router'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function SignUp() {
    const { id, name } = useLocalSearchParams()

    function back() {
        if (!router.canGoBack()) { 
            return Alert.alert('No previous screen', 'There is no screen to go back to.')
        }
        
        router.back()
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{name} - {id}</Text>
            <hr />
            <TouchableOpacity style={styles.back} activeOpacity={0.7} onPress={back}>
                <Text style={styles.text}>Go to Home</Text>
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
        color: '#777',
    },

    back: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#333',
        borderRadius: 5,
    }
})