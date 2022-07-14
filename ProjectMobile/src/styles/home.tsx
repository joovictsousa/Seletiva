import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        top: 100,
    },
    button: {
        top: 300,
        left: 100,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'blue',
    },
    textButton: {
        fontWeight: 'bold',
        color: 'white'
    }
});

export default styles;