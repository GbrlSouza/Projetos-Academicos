import { StyleSheet, Text, View } from 'react-native'

export default function Configs() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Configuração</Text>
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