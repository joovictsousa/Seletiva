import { useState } from 'react';
import { View } from 'react-native';
import styles from './AppStyles';
import { AppBarComponent } from './src/components/appBarComponent';
import { ContentController } from './src/components/contentComponent';
import { MapsComponent } from './src/components/mapsComponent';

export default function App() {
  const [choice, setChoice] = useState("home");

  return (
    <View style={styles.container}>
      <AppBarComponent screen = {choice} setScreen = {setChoice}/>
      <ContentController option = {choice} setOption = {setChoice}/>
    </View>
  );
}
