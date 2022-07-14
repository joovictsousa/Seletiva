import AsyncStorage from "@react-native-async-storage/async-storage";
import { ListItem } from "@react-native-material/core";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "../styles/data";

export function DataComponent() {

    const [data, setData] = useState([])
    const [valid, setValid] = useState(false)

    async function getData() {
        try {
            let value = await AsyncStorage.getItem('@storage_Key')
            if (value != null) {
                setData(value.split('\n'));
                setValid(true)
            }
            else {
                setData([])
            }

        } catch (e) {
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <View style={styles.container}>
            {
                valid && data.map((element, index) => {
                    return (
                        <Pressable
                            style={styles.data}
                            key={index}
                        >
                            <Text style={styles.textData}>{element}</Text>
                        </Pressable>
                    )
                })
            }
            {
                !valid && (
                    <View style={{justifyContent:'center', alignItems: 'center', flex:1}}>
                        <Text>Não há dados</Text>
                    </View>
                )
            }
        </View>
    );
}