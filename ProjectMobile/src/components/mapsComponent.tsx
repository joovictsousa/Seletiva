import { Pressable, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from '../styles/maps';
import * as Location from 'expo-location';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { estData } from '../constants/places';

export function MapsComponent(props) {

  const refMapView = useRef(null);
  const [location, setLocation] = useState(null);

  function clickEstLocalization() {
    refMapView.current.animateCamera({ center: estData.location })
  }

  function backToHome() {
    props.setOption('home')
  }

  useEffect(() => {
    (async function () {
      await Location.requestForegroundPermissionsAsync();
      let location = await Location.getCurrentPositionAsync();
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00922
      })
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        ref={refMapView}
        region={location}
        style={styles.mapView}
        showsUserLocation={true}>
        <Marker
          coordinate={estData.location}
          title={estData.title}
          description={estData.description} />

      </MapView>
      <Pressable
        style={styles.button_home}
        onPress={backToHome}
      >
        <Text style={styles.textButton}>Voltar</Text>
      </Pressable>
      <Pressable
        style={styles.button_est}
        onPress={clickEstLocalization}
      >
        <Text style={styles.textButton}>Ir para EST</Text>
      </Pressable>

    </View>
  );
}
