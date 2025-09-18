import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Habilidades 😎</Text>

      <View style={styles.profileContainer}>
        <Text style={styles.name}>Tamires</Text>
        <Text style={styles.skill}>Organização</Text>
        <Text style={styles.skill}>Comunicação</Text>
        <Text style={styles.skill}>Responsabilidade</Text>
        <Text style={styles.skill}>Pro-atividade</Text>
      </View>

      <View style={styles.profileContainer}>
        <Text style={styles.name}>Sophia</Text>
        <Text style={styles.skill}>Responsabilidade</Text>
        <Text style={styles.skill}>Formação em Física</Text>
        <Text style={styles.skill}>Boa convivência</Text>
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
    padding: 20,
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
  skill: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
    paddingLeft: 10,
  },
});
