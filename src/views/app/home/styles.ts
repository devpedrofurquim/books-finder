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
    },
    errors: {
        fontSize: 20,
        margin: 40,
    },
    load: {
        fontSize: 25,
        margin: 40,
    },
    
    book: {

    },
    
});

export const bookStyles = StyleSheet.create({
    container: {
        marginVertical: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 10,
        backgroundColor: '#fff',
        borderTopEndRadius: 20,
        borderBottomLeftRadius: 20,
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        color: '#000'
    },
    author: {
        fontSize: 15,
        textAlign: 'center'
    }
});