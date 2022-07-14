import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from '../styles/codeScanner';

export function CodeScannerComponent(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    function backToHome() {
        props.setOption('home')
      }

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned &&
                <Pressable
                    style = {styles.buttonScanAgain}
                    onPress={() => setScanned(false)}
                >
                    <Text style={styles.againTap}>Clique para escanear novamente</Text>
                </Pressable>
            }
            <Pressable
                    style = {styles.buttonBackToHome}
                    onPress={backToHome}
                >
                    <Text style={styles.againTap}>Voltar</Text>
                </Pressable>
        </View>
    );
}