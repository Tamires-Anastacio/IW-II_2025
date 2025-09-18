import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre nós 😎</Text>
      <h1>Tamires</h1>
      <p>Meu nome é Tamires Anastacio de Freitas. Tenho 16 anos. Moro em Ribeirão Pires, São Paulo. Atualmente estudo na Etec Maria Cristina Medeiros, cursando o segundo ano do ensino médio integrado ao curso técnico de informática para internet. Gosto muito de ler, estudar idiomas, dançar, conversar e programar.</p>
      <h1>Sophia</h1>
      <p>Meu nome é Sophia Gonçalves Morais. Tenho 16 anos. Moro em Ribeirão Pires, São Paulo. Atualmente estudo na Etec Maria Cristina Medeiros, cursando o segundo ano do ensino médio integrado ao curso técnico de informática para internet. Gosto de escrever, estudar física, estudar idiomas, ler a Bíblia. </p>
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