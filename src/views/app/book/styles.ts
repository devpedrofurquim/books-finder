import { StyleSheet } from "react-native";

export const bookStyles = StyleSheet.create({
    container: {
        margin: 20,
    },
    author: {
        fontSize: 15
    },
    title: {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold'
    },
    first_publish_year: {
        textAlign: 'left',
        fontSize: 15
    },
    first_sentence: {
        fontSize: 15
    },
    number_of_pages_median: {
        fontSize: 15
    },
    id_amazon: {
        flexDirection: 'row',
        gap: 20,
        width: '100%',
        backgroundColor: '#131a22',
        padding: 20,
        marginVertical: 20,
        borderRadius: 10,
        justifyContent: 'space-between'
    },
    id_amazon_text: {
        textAlign: 'center',
        color: '#ff9900',
        fontSize: 25,
        fontWeight: 'bold',
        textDecorationLine: 'none'
    },
    cover: {
        marginVertical: 20,
        marginHorizontal: 'auto',
        width: 300,
        height: 400,
        borderRadius: 10
    }
});