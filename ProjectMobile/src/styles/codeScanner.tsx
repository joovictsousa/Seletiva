import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        top: -36
    },
    buttonScanAgain: {
        width: '100%',
        height: 50,
        borderRadius: 4,
        backgroundColor: 'blue',
        position: 'absolute',
        elevation: 3,
        top: 700,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonBackToHome: {
        width: '100%',
        height: 50,
        borderRadius: 4,
        backgroundColor: 'blue',
        position: 'absolute',
        elevation: 3,
        top: 755,
        justifyContent: 'center',
        alignItems: 'center'
    },
    againTap: {
        color: 'white'
    }
});

export default styles;