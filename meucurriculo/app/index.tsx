import { Text, View,  StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sophia Gonçalves e Tamires Anastacio</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
        </Link>
     <Link href="/formacao" style={styles.button}>
        Nossa formação
    </Link>
    <Link href="/habilidades" style={styles.button}>
        Habilidades
    </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB6C1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#836FFF',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#FF00FF',
  },
});

