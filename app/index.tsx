import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Currículo das alunas: Sophia Gonçalves e Tamires Anastacio</Text>

      <View style={styles.menuContainer}>
        <Text style={styles.menuHeader}>Menu</Text>
        <View style={styles.linkContainer}>
          <Link href="/" style={styles.menuItem}>Home</Link>
          <Link href="/formacao" style={styles.menuItem}>Nossa formação</Link>
          <Link href="/habilidades" style={styles.menuItem}>Habilidades</Link>
          <Link href="/sobre-nos" style={styles.menuItem}>Sobre nós</Link>
        </View>
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
  menuContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '80%',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  menuHeader: {
    fontSize: 24,
    color: '#FF00FF',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  linkContainer: {
    width: '100%',
    alignItems: 'center',
  },
  menuItem: {
    fontSize: 20,
    color: '#FF00FF',
    textDecorationLine: 'underline',
    marginVertical: 10,
    textAlign: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#836FFF',
    width: '100%',
  },
});
