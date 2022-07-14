import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        top: 100,
    },
    viewProfile: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    viewAvatar: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20,
    },
    viewText: {
        width: '50%',
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewButtons: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        marginBottom: 10
    },
    textBold: {
        fontWeight: 'bold',
    },
    stretch: {
        width: 100,
        height: 100,
    },
    line: {
        height: 1,
        opacity: 1,
        backgroundColor: 'grey'
    }
});

export default styles;