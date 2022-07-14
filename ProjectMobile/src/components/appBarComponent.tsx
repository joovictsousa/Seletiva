import React, { useState } from "react";
import { AppBar, HStack, IconButton, ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "../styles/appBar";
import { Pressable, Text, View } from "react-native";

export function AppBarComponent(props) {
  const screens = ['home', 'maps', 'codeScanner', 'contact']
  const [valid, setValid] = useState(false)

  function changeScreen(value) {
    props.setScreen(value)
  }

  return (
    <View>
      <AppBar
        color="blue"
        style={styles.appbar}
        title="App"
        centerTitle={true}
        leading={props => (
          <IconButton
            icon={props => <Icon name="menu" {...props} />}
            {...props}
            onPress={() => {
              setValid(prevState => !prevState)
            }}
          >
          </IconButton>
        )}
      />
      {(valid && (props.screen !== 'maps' || props.screen !== 'codeScanner')) && screens.map((element, index) => {
        return (
          <View>
            {
              (props.screen !== element) && (
                <View style={styles.viewListItem}>
                  <ListItem
                    title={element}
                    onPress={() => {
                      setValid(false)
                      changeScreen(element)
                    }}
                  />
                </View>
              )
            }
          </View>
        )
      })}
    </View>
  );
}