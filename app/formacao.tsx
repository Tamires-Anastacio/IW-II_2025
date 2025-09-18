import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Formação 😎</Text>
      <h1>Tamires</h1>
      <ul>Curso de administração - INext;</ul>
      <ul>Curso de informática - INext;</ul>
      <ul>Curso de inglês - Anhanguera;</ul>
      <ul>PDP - Projeto de Desenvolvimento Profissional - Microlins;</ul>
      <ul>Fundamentos de TI: Hardware e Software - Escola virtual Bradesco.</ul>
      <ul>SWE Nexters - Etec MCM</ul>
      <h1>Sophia</h1>
      <ul>Curso de inglês - Wizard;</ul>
      <ul>Curso de escrita criativa - EMARP;</ul>
      <ul>SWE Nexters - Etec MCM.</ul>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F08080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});