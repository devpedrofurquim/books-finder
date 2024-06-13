import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    root: {
        alignItems: 'center',
        margin: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "600",
        padding: 10,
        color: '#000'
    },
    button: {
        backgroundColor: 'gray',
        borderRadius: 5,
        marginHorizontal: 10,
        textAlign: 'center',
        paddingHorizontal: 20
    },
    buttonTitle: {
        fontSize: 20,
        color: '#fff',
        padding: 5
    }
})