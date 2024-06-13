import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
    root: {
        alignItems: 'center',
        margin: 20,
    },
    logo: {
        width: '40%',
        height: 100,
        maxWidth: 300,
        maxHeight: 300,
    },
    title: {
        fontSize: 40,
        fontWeight: "600",
        padding: 10,
        color: '#000'
    },
    error: {
        color: 'red'
    }
})