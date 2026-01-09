import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Create Account</Text>
            <Text style={styles.text}>Go to Home</Text>
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