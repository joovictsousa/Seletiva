import { Pressable, Text, View } from 'react-native';
import styles from '../styles/home';

export function HomeComponent() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.textButton}>Bem Vindo ao Aplicativo</Text>
      </Pressable>
    </View>
  );
}