import { StyleSheet } from "react-native";

// styles used by Login and Register views
export const authStyles = StyleSheet.create({
    root: {
        alignItems: 'center'
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
    }
})