import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Formação 😎</Text>

      <View style={styles.profileContainer}>
        <Text style={styles.name}>Tamires</Text>
        <Text style={styles.course}>Curso de administração - INext</Text>
        <Text style={styles.course}>Curso de informática - INext</Text>
        <Text style={styles.course}>Curso de inglês - Anhanguera</Text>
        <Text style={styles.course}>PDP - Projeto de Desenvolvimento Profissional - Microlins</Text>
        <Text style={styles.course}>Fundamentos de TI: Hardware e Software - Escola virtual Bradesco</Text>
        <Text style={styles.course}>SWE Nexters - Etec MCM</Text>
      </View>

      <View style={styles.profileContainer}>
        <Text style={styles.name}>Sophia</Text>
        <Text style={styles.course}>Curso de inglês - Wizard</Text>
        <Text style={styles.course}>Curso de escrita criativa - EMARP</Text>
        <Text style={styles.course}>SWE Nexters - Etec MCM</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F08080',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileContainer: {
    marginBottom: 30,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // Adds a subtle shadow for depth
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF1493', // A contrasting color for the name
    marginBottom: 10,
    textAlign: 'center',
  },
  course: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
    paddingLeft: 10,
  },
});
