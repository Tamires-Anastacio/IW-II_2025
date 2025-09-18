    import { Text, View, StyleSheet } from 'react-native';
    import { Link } from 'expo-router';

    export default function Index() {
    return (
        <View style={styles.container}>
        <Text style={styles.headerText}>Sophia Gonçalves e Tamires Anastácio</Text>

        <View style={styles.linkContainer}>
            <Link href="/formacao" style={styles.button}>Nossa formação</Link>
            <Link href="/habilidades" style={styles.button}>Habilidades</Link>
            <Link href="/sobre-nos" style={styles.button}>Sobre nós</Link>
        </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFB6C1',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    headerText: {
        fontSize: 24,
        color: '#836FFF',
        fontWeight: 'bold',
        marginBottom: 40,
    },
    linkContainer: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#FF00FF',
        marginVertical: 10,
    },
    });
