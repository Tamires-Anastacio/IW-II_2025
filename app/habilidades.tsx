import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
            <View style={styles.container}>
            <Text style={styles.text}>Habilidades 😎</Text>
            <h1>Tamires</h1>
            <ul>Organização; </ul> 
                <ul>Comunicação;</ul>
                <ul>Responsabilidade;</ul> 
                <ul>Pro-atividade.</ul>
            <h1>Sophia</h1>
                <ul>Responsabilidade;</ul>
                <ul>Formação em física;</ul>
                <ul>Boa convivência.</ul>
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