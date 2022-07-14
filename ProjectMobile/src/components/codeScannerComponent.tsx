import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from '../styles/codeScanner';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true);
        try {
            const value = "";
            try {
                let value = await AsyncStorage.getItem('@storage_Key')
                if (value !== null) {
                    alert("Dado salvo com sucesso!")
                }
                await AsyncStorage.setItem('@storage_Key', value +'\n'+ data)
            } catch (e) {
                // error reading value
            }
        } catch (e) {
            // saving error
        }
    };

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned &&
                <Pressable
                    style={styles.buttonScanAgain}
                    onPress={() => setScanned(false)}
                >
                    <Text style={styles.againTap}>Clique para escanear novamente</Text>
                </Pressable>
            }
            <Pressable
                style={styles.buttonBackToHome}
                onPress={backToHome}
            >
                <Text style={styles.againTap}>Voltar</Text>
            </Pressable>
        </View>
    );
}