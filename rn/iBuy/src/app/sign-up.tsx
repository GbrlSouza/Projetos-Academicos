import { Link } from "expo-router";
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Create Account</Text>
            <Link href="/" style={styles.text}>Go to Home</Link>
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